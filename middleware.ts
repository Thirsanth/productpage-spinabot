// No-op middleware for frontend-only/demo mode. The original project used
// Clerk middleware to protect server routes which required server-side
// Clerk configuration. For a frontend-only setup we disable middleware.

export default function middleware() {
	// intentionally empty
}

export const config = {
	matcher: [],
};
