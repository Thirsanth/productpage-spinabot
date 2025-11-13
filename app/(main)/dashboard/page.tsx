"use client";

import { AnimationContainer, MaxWidthWrapper } from "@/components/global";
import UploadForm from "@/components/upload/upload-form";

// Dashboard simplified for frontend-only demo mode. All server-side
// authentication and DB interactions have been removed. This renders the
// upload form in a demo state.
export default function Dashboard() {
	const planTypeName = "Demo";

	return (
		<MaxWidthWrapper className="mb-40">
			<AnimationContainer delay={0.1}>
				<div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-10">
					<UploadForm planTypeName={planTypeName} />
				</div>
			</AnimationContainer>
		</MaxWidthWrapper>
	);
}
