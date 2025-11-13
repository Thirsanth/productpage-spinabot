// Server action removed for frontend-only/demo mode.
// Keep a stub to avoid import errors; calling this will throw.

export async function updatePostAction() {
	throw new Error(
		"updatePostAction is disabled in frontend-only mode. Remove server action usage or enable a backend.",
	);
}
