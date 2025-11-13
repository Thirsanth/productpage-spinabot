"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BarChart3, Database, Sparkles, Zap, Bot, Layers } from "lucide-react";

export function ChatbotFeaturesCard() {
	return (
		<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
			<GridItem
				area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
				icon={<Bot className="h-4 w-4 text-neutral-400" />}
				title="Drag-and-Drop Builder"
				description="Visually create chatbot flows with our intuitive no-code interface"
			/>

			<GridItem
				area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
				icon={<Layers className="h-4 w-4 text-neutral-400" />}
				title="Multi-Channel Deployment"
				description="Deploy to web, WhatsApp, Slack, and other platforms simultaneously"
			/>

			<GridItem
				area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
				icon={<Database className="h-4 w-4 text-neutral-400" />}
				title="CRM & Knowledge Base Integration"
				description="Connect with your existing systems for contextual conversations"
			/>

			<GridItem
				area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
				icon={<Zap className="h-4 w-4 text-neutral-400" />}
				title="Pre-built Templates"
				description="Start with industry-specific templates and customize to your needs"
			/>

			<GridItem
				area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
				icon={<Sparkles className="h-4 w-4 text-neutral-400" />}
				title="Advanced AI Training"
				description="Train your chatbot with your own data and knowledge to provide personalized responses"
			/>
		</ul>
	);
}

interface GridItemProps {
	area: string;
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
	return (
		<li className={`min-h-[14rem] list-none ${area}`}>
			<div className="group relative h-full rounded-2xl border border-neutral-800/50 bg-neutral-950/20 p-2 transition-all duration-300 hover:bg-neutral-900/30 md:rounded-3xl md:p-3">
				<GlowingEffect
					spread={60}
					glow={true}
					disabled={false} 
					proximity={150}
					inactiveZone={0}
					className="transition-opacity duration-500"
				/>
				<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-neutral-900/50 p-6 backdrop-blur-xl transition-all duration-300 group-hover:bg-neutral-800/50 md:p-6">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<div className="w-fit rounded-lg border border-gray-500/20 bg-gray-500/5 p-2.5 transition-all duration-300 group-hover:border-gray-500/40 group-hover:bg-gray-500/10">
							{icon}
						</div>
						<div className="space-y-3">
							{title === "Drag-and-Drop Builder" && (
								<div className="mb-10 flex justify-center">
									{/* <img src="/chatbot.png" alt="Chatbot Builder" className="h-25 w-25 object-contain" /> */}
								</div>
							)}
							{title === "CRM & Knowledge Base Integration" && (
								<div className="mb-10 flex justify-center">
									<img src="/kb.png" alt="Microphone" className="h-25 w-25 object-contain" />
								</div>
							)}
							<h3 className="text-balance bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text font-heading font-semibold text-transparent text-xl transition-all duration-300 group-hover:via-gray-100 group-hover:to-gray-300 md:text-2xl">
								{title}
							</h3>
							<h2 className="font-sans text-neutral-400 text-sm transition-all duration-300 group-hover:text-neutral-300 md:text-base">
								{description}
							</h2>
						</div>
					</div>
					<div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				</div>
			</div>
		</li>
	);
};
