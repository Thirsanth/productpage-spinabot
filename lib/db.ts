// Database helper removed for frontend-only/demo mode.
// Any runtime calls to this function should be avoided in the frontend-only build.
export default async function getDbConnection() {
	throw new Error(
		"getDbConnection is not available in frontend-only mode. Remove server-side DB usage or enable a backend.",
	);
}
