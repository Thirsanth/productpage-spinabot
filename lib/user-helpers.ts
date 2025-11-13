// User helpers removed for frontend-only/demo mode. These functions relied on
// Neon and server-side DB access. They are stubbed to avoid backend deps.

export async function hasCancelledSubscription() {
	throw new Error(
		"User helpers disabled in frontend-only mode. Enable backend to use these helpers.",
	);
}

export async function doesUserExist() {
	throw new Error(
		"User helpers disabled in frontend-only mode. Enable backend to use these helpers.",
	);
}

export async function updateUser() {
	throw new Error(
		"User helpers disabled in frontend-only mode. Enable backend to use these helpers.",
	);
}

export function getPlanType() {
	return { id: "starter", name: "Demo" };
}
