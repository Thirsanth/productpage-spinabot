"use client";

import { AnimationContainer, MaxWidthWrapper } from "@/components/global";
import Card3D from "@/components/ui/3d-card1";
import { BorderBeam } from "@/components/ui/border-beam";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { WorkflowFeaturesCard } from "@/components/ui/workflow-features-card";
import GetStartedButton from "@/components/ui/get-started-button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
// Running in frontend-only demo mode; server-side auth removed.
import { ArrowRightIcon, StarIcon } from "lucide-react";
import Image from "next/image";

import Loader from "@/components/ui/loader";
import NewButton from "@/components/ui/newbutton";

const AgenticAIWorkflowsPage = () => {
	// In frontend-only mode we don't have server-side auth available.
	// Treat user as null so links go to sign-in by default.
	const user = null;

	return (
		<div className="scrollbar-hide size-full overflow-x-hidden">
			{/* Hero Section */}
			<MaxWidthWrapper>
				<div
					id="home"
					className="flex w-full flex-col items-center justify-center bg-gradient-to-t from-background text-center"
				>
					<AnimationContainer className="flex w-full flex-col items-center justify-center text-center mt-12">
						{/* Loader placed above the hero title (frontend-only demo) */}
						<Loader />
						<h1 className="font-regular libre-baskerville !leading-[1.15] w-full text-balance py-6 text-center font-heading font-medium text-2xl text-foreground tracking-normal sm:text-6xl md:text-2xl lg:text-6xl">
							Automate & Orchestrate  <br />
							<span className="inline-bloc bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
								WorkFlows with Agentic AI
							</span>
						</h1>
						<p className="mb-12 text-balance text-lg text-muted-foreground tracking-tight md:text-lg">
							Transform your business operations with intelligent AI agents that can handle complex, 
							<br className="hidden md:block" />
							<span className="hidden md:block">
								multi-step workflows automatically From lead qualification to customer support.
							</span>
						</p>
						<GetStartedButton />
					</AnimationContainer>

					<AnimationContainer
						delay={0.2}
						className="relative w-full bg-transparent px-2 pt-20 pb-20 md:py-32"
					>
						<h3 className="faculty-glyphic-regular text-center font-heading font-medium text-md text-gray-200 mb-8 md:text-2xl">
							Powerful Features for Workflow Automation
						</h3>
						<div className="gradient -translate-x-1/2 absolute inset-0 left-1/2 h-1/4 w-3/4 animate-image-glow blur-[15rem] md:top-[10%] md:h-1/3"></div>
						<div className="-m-2 lg:-m-4 rounded-xl bg-opacity-50 p-2 ring-1 ring-foreground/20 ring-inset backdrop-blur-3xl lg:rounded-2xl">
							<BorderBeam size={250} duration={12} delay={9} />
							<video
								src="/video2.mp4"
								aria-label="Product demo"
								autoPlay
								muted
								loop
								playsInline
								className="h-auto w-full rounded-md bg-foreground/10 object-cover ring-1 ring-border lg:rounded-xl"
							/>
							<div className="-bottom-4 absolute inset-x-0 z-40 h-1/2 w-full bg-gradient-to-t from-background" />
							<div className="md:-bottom-8 absolute inset-x-0 bottom-0 z-50 h-1/4 w-full bg-gradient-to-t from-background" />
						</div>
					</AnimationContainer>
				</div>
			</MaxWidthWrapper>

			{/* Companies Section */}
			{/* <MaxWidthWrapper>
				<AnimationContainer delay={0.4}>
					<div className="py-14">
						<div className="mx-auto px-4 md:px-8">
							<h2 className="text-center font-heading font-medium text-neutral-400 text-sm uppercase">
								Trusted by the best in the industry
							</h2>
							<div className="mt-8">
								<ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 md:gap-x-16">
									{COMPANIES.map((company) => (
										<li key={company.name}>
											<Image
												src={company.logo}
												alt={company.name}
												width={80}
												height={80}
												quality={100}
												className="h-auto w-28"
											/>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</AnimationContainer>
			</MaxWidthWrapper> */}

			{/* Features Section */}
			<MaxWidthWrapper className="pt-10">
				<AnimationContainer delay={0.1}>
					<div
						id="features"
						className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
					>
						<MagicBadge title="Our Features" />
						
					</div>
				</AnimationContainer>
				<AnimationContainer delay={0.2}>
					<div className="mt-10 px-4 md:px-6 lg:px-8">
						<WorkflowFeaturesCard />
					</div>
				</AnimationContainer>
			</MaxWidthWrapper>

			{/* CTA Section */}
			<MaxWidthWrapper className="scrollbar-hide mt-20 max-w-[100vw] overflow-x-hidden">
				<AnimationContainer delay={0.1}>
					<LampContainer>
						<div className="relative flex w-full flex-col items-center justify-center text-center">
							<h2 className="font-regular libre-baskerville !leading-[1.1] mt-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text py-4 text-center font-heading font-medium text-4xl text-transparent tracking-tight md:text-7xl">
								Start Automating Today
							</h2>
							<p className="mx-auto mt-2 max-w-xl text-muted-foreground">
								Begin with our free tier and scale as your automation needs grow.
							</p>
							{/* <div className="mt-6">
								<NewButton>
									Get started for free
									<ArrowRightIcon className="ml-2 h-4 w-4" />
								</NewButton>
							</div> */}
						</div>
					</LampContainer>
				</AnimationContainer>
			</MaxWidthWrapper>
		</div>
	);
};

export default AgenticAIWorkflowsPage;
