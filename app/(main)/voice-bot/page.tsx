"use client";

import { AnimationContainer, MaxWidthWrapper } from "@/components/global";
import { BorderBeam } from "@/components/ui/border-beam";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { VoiceBotFeaturesCard } from "@/components/ui/voicebot-features-card";
import GetStartedButton from "@/components/ui/get-started-button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
// Running in frontend-only demo mode; server-side auth removed.
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

import Loader from "@/components/ui/loader";
import NewButton from "@/components/ui/newbutton";

const VoiceBotPage = () => {
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
							AI Voice Agents That <br />
							<span className="inline-bloc bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
								Talk with Humans
							</span>
						</h1>   
						<p className="mb-12 text-balance text-lg text-muted-foreground tracking-tight md:text-xl">
							Deploy intelligent voice agents that can handle customer calls, appointments, and support inquiries with natural conversation flow. Powered by advanced AI that understands context and responds appropriately.
						</p>
						<GetStartedButton href="https://spinabot-mvp1-ui.web.app/voice-agent-builder" />
					</AnimationContainer>

					<AnimationContainer
						delay={0.2}
						className="relative w-full bg-transparent px-2 pt-20 pb-20 md:py-32"
					>
						<h3 className="text-center font-heading font-medium text-2xl text-foreground mb-8 md:text-3xl">
							Advanced Voice AI Capabilites
						</h3>
						<div className="gradient -translate-x-1/2 absolute inset-0 left-1/2 h-1/4 w-3/4 animate-image-glow blur-[15rem] md:top-[10%] md:h-1/3"></div>
						<div className="-m-2 lg:-m-4 rounded-xl bg-opacity-50 p-2 ring-1 ring-foreground/20 ring-inset backdrop-blur-3xl lg:rounded-2xl">
							<BorderBeam size={250} duration={12} delay={9} />
							<video
								src="/video.mp4"
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
						<VoiceBotFeaturesCard />
					</div>
				</AnimationContainer>
			</MaxWidthWrapper>

			{/* CTA Section */}
			<MaxWidthWrapper className="scrollbar-hide mt-20 max-w-[100vw] overflow-x-hidden">
				<AnimationContainer delay={0.1}>
					<LampContainer>
						<div className="relative flex w-full flex-col items-center justify-center text-center">
							<h2 className="font-regular libre-baskerville !leading-[1.1] mt-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text py-4 text-center font-heading font-medium text-4xl text-transparent tracking-tight md:text-7xl">
								Start Your Voice <br />
								AI Journey Today
							</h2>
							<p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
								Transform your customer interactions with intelligent voice agents that work 24/7.
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

export default VoiceBotPage;
