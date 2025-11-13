// Frontend-only stub for uploadthing. The server-side router and endpoints
// have been removed for frontend-only mode. This exports a safe stub that
// mimics the shape of the UploadThing helper so frontend components don't
// crash. In demo mode `startUpload` returns a mock server response.

type UploadFileResponse = {
	url: string;
	name: string;
};

type UploadResponse = {
	serverData: {
		userId: string;
		file: UploadFileResponse;
	};
};

type StartUploadResp = UploadResponse[];

interface UploadOptions {
	onClientUploadComplete?: () => void;
	onUploadError?: (error: Error) => void;
	onUploadBegin?: () => void;
}

export function useUploadThing(_name?: string, opts?: UploadOptions) {
	async function startUpload(
		files: File[] | undefined,
	): Promise<StartUploadResp | null> {
		console.warn("Upload disabled: running in frontend-only demo mode.");
		
		try {
			if (!files || files.length === 0) {
				throw new Error("No files provided");
			}

			opts?.onUploadBegin?.();

			// Simulate network delay
			await new Promise(resolve => setTimeout(resolve, 1000));

			const response: StartUploadResp = [
				{
					serverData: {
						userId: "demo-user",
						file: { url: "https://example.com/demo-file", name: files[0].name },
					},
				},
			];

			opts?.onClientUploadComplete?.();
			return response;
		} catch (error) {
			opts?.onUploadError?.(error instanceof Error ? error : new Error("Upload failed"));
			return null;
		}
	}

	return { startUpload };
}
