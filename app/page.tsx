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
import { FeaturesCard } from "@/components/ui/features-card";
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

const HomePage = () => {
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
						{/* <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
							<span>
								<span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
							</span>
							<span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
							<span className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-tr from-primary/20 blur-md"></span>
							<span className="z-10 flex items-center justify-center gap-1 py-0.5 text-neutral-100 text-sm">
								✨ Introduction Writora AI
								<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
							</span>
						</button> */}

						{/* Loader placed above the hero title (frontend-only demo) */}
						<Loader />
						<h1 className="!leading-[1.15] w-full text-balance py-6 text-center font-heading font-medium text-5xl text-foreground tracking-normal sm:text-6xl md:text-7xl lg:text-8xl">
							AI Voice Agents That{" "}
							<span className="inline-bloc bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
								Talk Like Humans
							</span>
						</h1>
						<p className="mb-12 text-balance text-lg text-muted-foreground tracking-tight md:text-xl">
							Create high-quality voice-bots for
							<br className="hidden md:block" />
							<span className="hidden md:block">
								Businesses, Sales, Marketing and Operations and Business
								Development!
							</span>
						</p>
						<GetStartedButton />
					</AnimationContainer>

					<AnimationContainer
						delay={0.2}
						className="relative w-full bg-transparent px-2 pt-20 pb-20 md:py-32"
					>
						<div className="gradient -translate-x-1/2 absolute inset-0 left-1/2 h-1/4 w-3/4 animate-image-glow blur-[5rem] md:top-[10%] md:h-1/3 bg-gray-400"></div>
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

			{/* Companies Section */}
			{/* {/* <MaxWidthWrapper>
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
						<MagicBadge title="Features" />
						<h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
							Advanced Voice AI Capabilities
						</h2>
						<p className="mt-4 max-w-3xl text-center text-md text-gray-4pl00 lg:text-center ">
							SpinaBot's advance AI technology enables natural <br /> engaging voice interactions for your business, sales, marketing, and operations needs.
						</p>
					</div>
				</AnimationContainer>
				<AnimationContainer delay={0.2}>
					<div className="mt-10 px-4 md:px-6 lg:px-8">
						<FeaturesCard />
					</div>
				</AnimationContainer>
			</MaxWidthWrapper>

			{/* Process Section */}
			{/* <MaxWidthWrapper className="py-10">
				<AnimationContainer delay={0.1}>
					<div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center py-8 lg:items-center">
						<MagicBadge title="The Process" />
						<h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
							Generate content effortlessly in just 3 steps
						</h2>
						<p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
							Easily repurpose your content into SEO focused blog posts
						</p>
					</div>
				</AnimationContainer>

				<AnimationContainer delay={0.3}>
					<div className="grid grid-cols-1 place-items-center gap-8 py-12 md:grid-cols-3">
						<Card3D
							title="Professional Sarah"
							subtitle="Clear American Accent"
							description="Formal Tone"
							accent="#404040"
							onPlay={() => console.log("Playing Sarah sample")}
							badgeWrapperClass="py-4 scale-125"
						/>
						<Card3D
							title="Friendly Alex"
							subtitle="Warm British Accent"
							description="Welcoming Tone"
							accent="#666666"
							onPlay={() => console.log("Playing Alex sample")}
							badgeWrapperClass="py-4 scale-125"
						/>
						<Card3D
							title="Expert Marcus"
							subtitle="Energetic Australian Accent"
							description="Confident Tone"
							accent="#808080"
							onPlay={() => console.log("Playing Marcus sample")}
							badgeWrapperClass="py-4 scale-125"
						/>
					</div>
				</AnimationContainer>
			</MaxWidthWrapper> */}

			{/* Pricing Section */}
			{/* <MaxWidthWrapper className="py-10">
				<AnimationContainer delay={0.1}>
					<div
						id="pricing"
						className="mx-auto flex w-full max-w-xl flex-col items-center justify-center py-8 lg:items-center"
					>
						<MagicBadge title="Simple Pricing" />
						<h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
							Choose a plan that works for you
						</h2>
						<p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
							Get started with Writora today and enjoy more features with our
							pro plans.
						</p>
					</div>
				</AnimationContainer>
				<AnimationContainer delay={0.2}>
					<PricingCards />
				</AnimationContainer>
				<AnimationContainer delay={0.3}>
					<div className="mx-auto mt-12 flex w-full max-w-5xl flex-wrap items-start justify-center gap-6 md:items-center lg:justify-evenly">
						<div className="flex items-center gap-2">
							<CreditCardIcon className="h-5 w-5 text-foreground" />
							<span className="text-muted-foreground">
								No credit card required
							</span>
						</div>
					</div>
				</AnimationContainer>
			</MaxWidthWrapper> */}

			{/* Reviews Section */}
			{/* <MaxWidthWrapper className="py-10">
				<AnimationContainer delay={0.1}>
					<div
						id="testimonials"
						className="mx-auto flex w-full max-w-xl flex-col items-center justify-center py-8 lg:items-center"
					>
						<MagicBadge title="Our Customers" />
						<h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
							What our users are saying
						</h2>
						<p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
							Here&apos;s what some of our users have to say about SpinaBot.
						</p>
					</div>
				</AnimationContainer>
				<div className="grid grid-cols-1 place-items-start gap-4 py-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
					<div className="flex h-min flex-col items-start gap-6">
						{REVIEWS.slice(0, 3).map((review, index) => (
							<AnimationContainer delay={0.2 * index} key={index}>
								<MagicCard key={index} className="md:p-0">
									<Card className="flex h-min w-full flex-col border-none">
										<CardHeader className="space-y-0">
											<CardTitle className="font-medium text-lg text-muted-foreground">
												{review.name}
											</CardTitle>
											<CardDescription>{review.username}</CardDescription>
										</CardHeader>
										<CardContent className="space-y-4 pb-4">
											<p className="text-muted-foreground">{review.review}</p>
										</CardContent>
										<CardFooter className="mt-auto w-full space-x-1">
											{Array.from({ length: review.rating }, (_, i) => (
												<StarIcon
													key={i}
													className="h-4 w-4 fill-yellow-500 text-yellow-500"
												/>
											))}
										</CardFooter>
									</Card>
								</MagicCard>
							</AnimationContainer>
						))}
					</div>
					<div className="flex h-min flex-col items-start gap-6">
						{REVIEWS.slice(3, 6).map((review, index) => (
							<AnimationContainer delay={0.2 * index} key={index}>
								<MagicCard key={index} className="md:p-0">
									<Card className="flex h-min w-full flex-col border-none">
										<CardHeader className="space-y-0">
											<CardTitle className="font-medium text-lg text-muted-foreground">
												{review.name}
											</CardTitle>
											<CardDescription>{review.username}</CardDescription>
										</CardHeader>
										<CardContent className="space-y-4 pb-4">
											<p className="text-muted-foreground">{review.review}</p>
										</CardContent>
										<CardFooter className="mt-auto w-full space-x-1">
											{Array.from({ length: review.rating }, (_, i) => (
												<StarIcon
													key={i}
													className="h-4 w-4 fill-yellow-500 text-yellow-500"
												/>
											))}
										</CardFooter>
									</Card>
								</MagicCard>
							</AnimationContainer>
						))}
					</div>
					<div className="flex h-min flex-col items-start gap-6">
						{REVIEWS.slice(6, 9).map((review, index) => (
							<AnimationContainer delay={0.2 * index} key={index}>
								<MagicCard key={index} className="md:p-0">
									<Card className="flex h-min w-full flex-col border-none">
										<CardHeader className="space-y-0">
											<CardTitle className="font-medium text-lg text-muted-foreground">
												{review.name}
											</CardTitle>
											<CardDescription>{review.username}</CardDescription>
										</CardHeader>
										<CardContent className="space-y-4 pb-4">
											<p className="text-muted-foreground">{review.review}</p>
										</CardContent>
										<CardFooter className="mt-auto w-full space-x-1">
											{Array.from({ length: review.rating }, (_, i) => (
												<StarIcon
													key={i}
													className="h-4 w-4 fill-yellow-500 text-yellow-500"
												/>
											))}
										</CardFooter>
									</Card>
								</MagicCard>
							</AnimationContainer>
						))}
					</div>
				</div>
			</MaxWidthWrapper> */}

			{/* CTA Section */}
			<MaxWidthWrapper className="scrollbar-hide mt-20 max-w-[100vw] overflow-x-hidden">
				<AnimationContainer delay={0.1}>
					<LampContainer>
						<div className="relative flex w-full flex-col items-center justify-center text-center">
							<h2 className="!leading-[1.1] mt-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text py-4 text-center font-heading font-medium text-4xl text-transparent tracking-tight md:text-7xl">
								Start your <br />
								Voice AI Journey
							</h2>
							<p className="mx-auto mt-6 max-w-md text-muted-foreground">
								Deploy your first voice agent in minutes and transform your
								customer interactions.
							</p>
							<div className="mt-6">
								<NewButton>
									Get started for free
									<ArrowRightIcon className="ml-2 h-4 w-4" />
								</NewButton>
							</div>
						</div>
					</LampContainer>
				</AnimationContainer>
			</MaxWidthWrapper>
		</div>
	);
};

export default HomePage;
