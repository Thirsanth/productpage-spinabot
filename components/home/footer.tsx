"use client";

import { AnimationContainer } from "@/components/global";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Github, Linkedin } from "lucide-react";
import { useSidebar } from "@/contexts/sidebar-context";
import { cn } from "@/utils";

const Footer = () => {
	const { isVisible } = useSidebar();

	return (
		<footer className={cn(
			"relative flex w-full flex-col items-center justify-center border-border border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 pt-16 pb-8 md:pb-0 lg:px-8 lg:pt-32 transition-all duration-300 ease-in-out",
			isVisible 
				? "ml-64 max-w-[calc(100%-16rem)]" 
				: "ml-0 max-w-6xl mx-auto"
		)}>
			<div className="-translate-x-1/2 -translate-y-1/2 absolute top-0 right-1/2 left-1/2 h-1.5 w-8 rounded-full bg-foreground"></div>

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimationContainer delay={0.1}>
					<div className="flex flex-col items-start justify-start md:max-w-[200px]">
						<div className="flex items-start">
							<img src="logo.png" alt="logo" className="h-7 w-7" />
						</div>
						<p className="mt-4 text-start text-muted-foreground text-sm">
							Create your content with ease.
						</p>
						<span className="mt-4 flex items-center text-neutral-200 text-sm">
							Made by Anayat
						</span>
						<div className="flex items-center gap-1 pt-2 text-muted-foreground">
							<Github className="size-4" />
							<Linkedin className="size-4" />
						</div>
					</div>
				</AnimationContainer>

				<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<AnimationContainer delay={0.2}>
							<div className="">
								<h3 className="font-medium text-base text-white">Product</h3>
								<ul className="mt-4 text-muted-foreground text-sm">
									<li className="mt-2">Features</li>
									<li className="mt-2">Pricing</li>
									<li className="mt-2">Testimonials</li>
									<li className="mt-2">Integration</li>
								</ul>
							</div>
						</AnimationContainer>
						<AnimationContainer delay={0.3}>
							<div className="mt-10 flex flex-col md:mt-0">
								<h3 className="font-medium text-base text-white">
									Integrations
								</h3>
								<ul className="mt-4 text-muted-foreground text-sm">
									<li>Facebook</li>
									<li className="mt-2">Instagram</li>
									<li className="mt-2">Twitter</li>
									<li className="mt-2">LinkedIn</li>
								</ul>
							</div>
						</AnimationContainer>
					</div>
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<AnimationContainer delay={0.4}>
							<div className="">
								<h3 className="font-medium text-base text-white">Resources</h3>
								<ul className="mt-4 text-muted-foreground text-sm">
									<li className="mt-2">Blog</li>
									<li className="mt-2">Support</li>
								</ul>
							</div>
						</AnimationContainer>
						<AnimationContainer delay={0.5}>
							<div className="mt-10 flex flex-col md:mt-0">
								<h3 className="font-medium text-base text-white">Company</h3>
								<ul className="mt-4 text-muted-foreground text-sm">
									<li>About Us</li>
									<li className="mt-2">Privacy Policy</li>
									<li className="mt-2">Terms & Conditions</li>
								</ul>
							</div>
						</AnimationContainer>
					</div>
				</div>
			</div>

			<div className="mt-8 w-full border-border/40 border-t pt-4 md:flex md:items-center md:justify-between md:pt-8">
				<AnimationContainer delay={0.6}>
					<p className="mt-8 text-muted-foreground text-sm md:mt-0">
						&copy; {new Date().getFullYear()} Spinabot INC. All rights reserved.
					</p>
				</AnimationContainer>
			</div>

			<div className="hidden h-[20rem] items-center justify-center md:flex lg:h-[20rem]">
				<TextHoverEffect text="SpinaBot" />
			</div>
		</footer>
	);
};

export default Footer;
