"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Feature {
	title: string;
	description: string;
	image: string;
}

const features: Feature[] = [
	{
		title: "Trust By Design",
		description:
			"Built with cutting-edge technology and best practices to create a trustworthy AI experience that users can rely on from day one.",
		image: "/assets/features/trust.jpg",
	},
	{
		title: "Built for Cutting-Edge AI Teams",
		description:
			"Whether you're developing LLMs, intelligent tools, or autonomous agents, our platform gives you a launch-ready site that speaks the language of innovation.",
		image: "/assets/features/ai-teams.jpg",
	},
	{
		title: "Scales With Your Vision",
		description:
			"From product launches to team showcases and case studies, our platform is flexible and scalable. As your agency grows, the template adapts—so your site evolves without needing a redesign.",
		image: "/assets/features/scale.jpg",
	},
	{
		title: "Modern UX",
		description:
			"Crafted with modern UX principles to showcase your AI capabilities in the most engaging and intuitive way possible.",
		image: "/assets/features/modern-ux.jpg",
	},
];

export default function StickyScroll() {
	const [activeFeature, setActiveFeature] = useState<number>(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	useEffect(() => {
		const observers = featureRefs.current.map((ref, index) => {
			if (!ref) return null;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveFeature(index);
					}
				},
				{
					threshold: 0.5,
					rootMargin: "-45% 0px -45% 0px",
				},
			);

			observer.observe(ref);
			return observer;
		});

		return () => {
			observers.forEach((observer) => observer?.disconnect());
		};
	}, []);

	return (
		<div className="flex w-full" ref={containerRef}>
			<div className="flex min-h-screen w-full items-start">
				<div className="mx-auto grid w-full max-w-8xl grid-cols-1 gap-10 md:grid-cols-[40%_60%]">
					{/* Sticky image container */}
					<motion.div
						className="sticky top-24 h-[70vh] overflow-hidden rounded-3xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl md:h-[85vh]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="relative h-full w-full">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0 }}
									animate={{
										opacity: activeFeature === index ? 1 : 0,
									}}
									transition={{ duration: 0.7, ease: "easeInOut" }}
									className="absolute inset-0 h-full w-full"
								>
									<motion.div
										initial={{ scale: 1.1, rotate: 4 }}
										animate={{
											scale: activeFeature === index ? 1 : 1.1,
											rotate: activeFeature === index ? 0 : 4,
										}}
										transition={{ duration: 1.2, ease: "easeOut" }}
										className="h-full w-full"
									>
										<img
											src={feature.image}
											alt={feature.title}
											className="h-full w-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-neutral-950/50 to-gray-950/80 mix-blend-multiply backdrop-blur-sm">
											<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{
											opacity: activeFeature === index ? 1 : 0,
											y: activeFeature === index ? 0 : 20,
										}}
										transition={{ duration: 0.8, delay: 0.3 }}
										className="absolute right-8 bottom-8 left-8 text-white"
									>
										<span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 font-medium text-sm backdrop-blur-md">
											Feature {index + 1}
										</span>
									</motion.div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Scrolling cards container */}
					<div className="space-y-[85vh] py-32 pl-6 first:pt-24 md:pl-10">
						{features.map((feature, index) => (
							<motion.div
								ref={(el: HTMLDivElement | null) => {
									if (el) featureRefs.current[index] = el;
								}}
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-10%" }}
								transition={{ duration: 0.6 }}
								className={`relative flex max-w-2xl flex-col gap-6 rounded-3xl p-10 transition-all duration-500 ${
									activeFeature === index
										? "scale-100 border border-gray-500/20 bg-gradient-to-br from-gray-950/90 via-neutral-900/95 to-gray-950/90 shadow-[0_0_30px_rgba(128,128,128,0.15)]"
										: "scale-[0.93] border border-neutral-800/10 bg-neutral-900/40 opacity-40"
								}`}
							>
								<div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
								<div className="absolute inset-[1px] rounded-3xl backdrop-blur-xl" />

								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: activeFeature === index ? 1 : 0.5, x: 0 }}
									transition={{ duration: 0.4 }}
									className="relative"
								>
									<span className="mb-2 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 font-medium text-sm text-violet-300">
										Feature {index + 1}
									</span>
								</motion.div>

								<motion.h3
									className="relative bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text font-semibold text-3xl text-transparent"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: activeFeature === index ? 1 : 0.5, x: 0 }}
									transition={{ duration: 0.4, delay: 0.1 }}
								>
									{feature.title}
								</motion.h3>

								<motion.p
									className="relative text-lg text-neutral-300/90 leading-relaxed"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: activeFeature === index ? 1 : 0.5, x: 0 }}
									transition={{ duration: 0.4, delay: 0.2 }}
								>
									{feature.description}
								</motion.p>

								{activeFeature === index && (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: 0.3 }}
										className="relative mt-4"
									>
										<div className="h-px w-full bg-gradient-to-r from-violet-500/10 via-violet-500/50 to-fuchsia-500/10" />
									</motion.div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
