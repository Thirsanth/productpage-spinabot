"use client";

import { Button } from "@/components/ui/button";
import { Download, Edit2, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { ForwardRefEditor } from "./forward-ref-editor";

import { toast } from "sonner";
import { Card } from "../ui/card";

function SubmitButton({ saving }: { saving: boolean }) {
	return (
		<Button
			type="submit"
			variant="outline"
			className="w-40 transform rounded-full px-4 py-2 font-semibold shadow-lg transition duration-200 ease-in-out hover:scale-105"
			disabled={saving}
		>
			{saving ? (
				<span className="flex items-center justify-center">
					<Loader2 className="mr-2 h-5 w-5 animate-spin" /> Saving...
				</span>
			) : (
				<span className="flex items-center justify-center">
					<Edit2 className="mr-2 h-5 w-5" />
					Save
				</span>
			)}
		</Button>
	);
}

const initialState = {
	success: false,
};

type UploadState = {
	success: boolean;
};

type UploadAction = (
	state: UploadState,
	formData: FormData,
) => Promise<UploadState>;

export default function ContentEditor({
	posts,
}: {
	posts: Array<{ content: string; title: string; id: string }>;
}) {
	const [content, setContent] = useState(posts[0].content);
	const [isChanged, setIsChanged] = useState(false);
	const [saving, setSaving] = useState(false);

	const formAction = undefined; // server actions removed in frontend-only mode

	const handleSave = async () => {
		setSaving(true);
		// simulate save
		await new Promise((r) => setTimeout(r, 500));
		setSaving(false);
		setIsChanged(false);
		toast.message("Saved (frontend-only demo).", {
			description: "This app is running in frontend-only mode.",
		});
	};

	const handleContentChange = (value: string) => {
		setContent(value);
		setIsChanged(true);
	};

	const handleExport = useCallback(() => {
		const filename = `${posts[0].title || "blog-post"}.md`;

		const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}, [content, posts]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSave();
			}}
			className="flex flex-col gap-2"
		>
			<div className="mx-auto flex max-w-lg flex-col items-center justify-center py-10">
				<h1 className="!leading-tight mt-6 text-center font-heading font-semibold text-2xl md:text-4xl lg:text-5xl">
					Edit your post
				</h1>
				<p className="mt-6 text-center text-base text-muted-foreground md:text-lg">
					Start editing your blog post below...
				</p>
			</div>
			<div className="flex items-center justify-between border-gray-200/50 border-b-2 pb-4">
				<div className="flex flex-1 place-content-end gap-4">
					<SubmitButton saving={saving} />

					<Button
						onClick={handleExport}
						className="w-40 transform rounded-full px-4 py-2 font-semibold transition duration-200 ease-in-out hover:scale-105"
					>
						<Download className="mr-2 h-5 w-5" />
						Export
					</Button>
				</div>
			</div>
			<Card className="p-0">
				<ForwardRefEditor
					markdown={posts[0].content}
					onChange={handleContentChange}
				></ForwardRefEditor>
			</Card>
		</form>
	);
}
