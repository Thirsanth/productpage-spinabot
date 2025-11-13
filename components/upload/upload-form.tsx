"use client";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import MagicBadge from "../ui/magic-badge";

const schema = z.object({
	file: z
		.instanceof(File, { message: "Invalid file" })
		.refine(
			(file) => file.size <= 20 * 1024 * 1024,
			"File size must not exceed 20MB",
		)
		.refine(
			(file) =>
				file.type.startsWith("audio/") || file.type.startsWith("video/"),
			"File must be an audio or a video file",
		),
});

export default function UploadForm({ planTypeName }: { planTypeName: string }) {
	const { startUpload } = useUploadThing("videoOrAudioUploader", {
		onClientUploadComplete: () => {
			toast("uploaded successfully!");
		},
		onUploadError: (err: Error) => {
			console.error("Error occurred", err);
		},
		onUploadBegin: () => {
			toast("Upload has begun 🚀!");
		},
	});

	const handleTranscribe = async (formData: FormData) => {
		const file = formData.get("file") as File;

		const validatedFields = schema.safeParse({ file });

		if (!validatedFields.success) {
			console.log(
				"validatedFields",
				validatedFields.error.flatten().fieldErrors,
			);
			toast.error("Something went wrong", {
				description:
					validatedFields.error.flatten().fieldErrors.file?.[0] ??
					"Invalid file",
			});
		}

		if (file) {
			const resp: any = await startUpload([file]);
			console.log({ resp });

			if (!resp) {
				toast.error("Something went wrong", {
					description: "Please use a different file",
				});
				return;
			}

			// In frontend-only mode we can't transcribe or generate posts.
			// Show a friendly message to the user instead.
			toast.message("Upload simulated (frontend-only mode)", {
				description:
					"You're running the app in frontend-only demo mode. Transcription and blog generation are disabled.",
			});
		}
	};
	return (
		<>
			<MagicBadge title={`${planTypeName} Plan Is Active`} />
			<h1 className="!leading-tight mt-6 text-center font-heading font-semibold text-2xl md:text-4xl lg:text-5xl">
				Start Creating Amazing Content
			</h1>
			<p className="mt-6 pb-5 text-center text-base text-muted-foreground md:text-lg">
				Upload your audio or video file and let our AI do the magic!
			</p>
			<form className="flex flex-col gap-6 pt-5" action={handleTranscribe}>
				<div className="flex items-center justify-end gap-1.5">
					<Input
						id="file"
						name="file"
						type="file"
						accept="audio/*,video/*"
						required
						className="cursor-pointer"
					/>
					<Button>Transcribe</Button>
				</div>
			</form>
		</>
	);
}
