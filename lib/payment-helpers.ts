// Payment helpers removed for frontend-only/demo mode. These functions
// previously relied on Stripe and a server-side DB. They are intentionally
// stubbed to make the repo frontend-only. If you need payment handling,
// reintroduce a backend and restore these implementations.

export async function handleSubscriptionDeleted() {
	throw new Error(
		"Payment helpers are disabled in frontend-only mode. Enable backend to use payments.",
	);
}

export async function handleCheckoutSessionCompleted() {
	throw new Error(
		"Payment helpers are disabled in frontend-only mode. Enable backend to use payments.",
	);
}
