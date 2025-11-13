import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json(
		{ error: "uploadthing endpoints disabled in frontend-only mode" },
		{ status: 404 },
	);
}

export async function POST() {
	return NextResponse.json(
		{ error: "uploadthing endpoints disabled in frontend-only mode" },
		{ status: 404 },
	);
}
