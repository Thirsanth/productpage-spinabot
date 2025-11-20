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
import { ChatbotFeaturesCard } from "@/components/ui/chatbot-features-card";
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
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { User } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-[#707070] bg-[#2b2b2b] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

function AnimatedBeamMultipleOutputsDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full items-center justify-center overflow-hidden p-15",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-2xl flex-row items-stretch justify-between gap-16">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.website />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.slack />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.facebook />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.telegram />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  )
}

const Icons = {
  website: () => (
    <Image
      src="/website.svg"
      alt="Website"
      width={24}
      height={24}
      className="object-contain"
    />
  ),
  whatsapp: () => (
    <Image
      src="/whatsapp.svg"
      alt="WhatsApp"
      width={24}
      height={24}
      className="object-contain"
    />
  ),
  slack: () => (
    <Image
      src="/slack.svg"
      alt="Slack"
      width={24}
      height={24}
      className="object-contain"
    />
  ),
  facebook: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        fill="#1877F2"
      />
    </svg>
  ),
  telegram: () => (
    <Image
      src="/telegram.svg"
      alt="Telegram"
      width={24}
      height={24}
      className="object-contain"
    />
  ),
  sms: () => (
    <Image
      src="/sms.svg"
      alt="SMS"
      width={24}
      height={24}
      className="object-contain"
    />
  ),
  openai: () => (
    <Image
      src="/logo.png"
      alt="Logo"
      width={24}
      height={24}
      className="object-contain"
    />
  ),
  user: () => (
    <User size={24} className="text-gray-100" />
  ),
}

const AgenticChatbotBuilderPage = () => {
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
							Build and Deploy  <br />
							<span className="inline-bloc bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
								ChatBots Without Code
							</span>
						</h1>
						<p className="mb-12 text-balance text-lg text-muted-foreground tracking-tight md:text-md">
							Create sophisticated conversational AI experiences with our visual chatbot builder Design complex flows,
							<br className="hidden md:block" />
							<span className="hidden md:block">
								 integrate with your existing tools, and deploy across multiple channels—all without writing a single line of code
							</span>
						</p>
						<GetStartedButton text="Start building" href="https://dev-spinabot.com/chatbot-builder" />
					</AnimationContainer>

					<AnimationContainer
						delay={0.2}
						className="relative w-full bg-transparent px-2 pt-20 pb-20 md:py-32"
					>
						<h3 className="text-center font-heading font-medium text-2xl text-foreground mb-8 md:text-3xl">
							Everything You Need to Build Great Chatbots
						</h3>
						<div className="gradient -translate-x-1/2 absolute inset-0 left-1/2 h-1/4 w-3/4 animate-image-glow blur-[15rem] md:top-[10%] md:h-1/3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
						<div className="-m-2 lg:-m-4 rounded-xl bg-opacity-50 p-2 ring-1 ring-foreground/20 ring-inset backdrop-blur-3xl lg:rounded-2xl">
							<BorderBeam size={250} duration={12} delay={9} />
							<video
								src="/video3.mp4"
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
						<ChatbotFeaturesCard />
					</div>
				</AnimationContainer>
			</MaxWidthWrapper>

			{/* Integrations Section */}
			<MaxWidthWrapper className="pt-20">
				<AnimationContainer delay={0.1}>
					<div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
						<MagicBadge title="Integrations" />
						<h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
							Deploy Everywhere
						</h2>
						<p className="mt-4 max-w-3xl text-center text-md text-gray-400 lg:text-center ">
							One chatbot, multiple channels. Deploy to all your customer touchpoints with a single click.
						</p>
					</div>
				</AnimationContainer>
				<AnimationContainer delay={0.2}>
					<div className="mt-10">
						<AnimatedBeamMultipleOutputsDemo />
					</div>
				</AnimationContainer>
			</MaxWidthWrapper>

			{/* CTA Section */}
			<MaxWidthWrapper className="scrollbar-hide mt-20 max-w-[100vw] overflow-x-hidden">
				<AnimationContainer delay={0.1}>
					<LampContainer>
						<div className="relative flex w-full flex-col items-center justify-center text-center">
							<h2 className="font-regular libre-baskerville !leading-[1.1] mt-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text py-4 text-center font-heading font-medium text-4xl text-transparent tracking-tight md:text-6xl">
								Ready to Build Your <br />Chatbot?
							</h2>
							<p className="mx-auto mt-2 max-w-xl text-muted-foreground">
								Start with our free templates and have your first chatbot running in minutes.
							</p>
							{/* <div className="mt-6">
								<NewButton>
									Get started
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

export default AgenticChatbotBuilderPage;
