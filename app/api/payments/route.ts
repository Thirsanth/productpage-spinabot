import { NextResponse } from "next/server";

export async function POST() {
	return NextResponse.json(
		{ error: "payments webhook disabled in frontend-only mode" },
		{ status: 404 },
	);
}
