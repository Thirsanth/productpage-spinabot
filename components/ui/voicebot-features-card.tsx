"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BarChart3, Database, History, Mic2, Sparkles } from "lucide-react";

export function VoiceBotFeaturesCard() {
	return (
		<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
			<GridItem
				area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
				icon={<History className="h-4 w-4 text-neutral-400" />}
				title="Call History Tracking"
				description="Complete conversation logs with analytics and sentiment analysis"
			/>

			<GridItem
				area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
				icon={<Database className="h-4 w-4 text-neutral-400" />}
				title="Knowledge Base Integration"
				description="Access your entire knowledge base dniuring live conversations"
			/>

			<GridItem
				area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
				icon={<Mic2 className="h-4 w-4 text-neutral-400" />}
				title="Natural Voice Synthesis"
				description="Multiple voice options with natural speech patterns and emotions"
			/>

			<GridItem
				area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
				icon={<BarChart3 className="h-4 w-4 text-neutral-400" />}
				title="Email Automation"
				description="Automatically generate and send follow-up emails based on call outcomes"
			/>

			<GridItem
				area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
				icon={<Sparkles className="h-4 w-4 text-neutral-400" />}
				title="AI-Powered Insights"
				description="Advanced machine learning algorithms for continual improvement and optimization"
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
							{title === "Natural Voice Synthesis" && (
								<div className="mb-10 flex justify-center">
									<img src="/mic.png" alt="Microphone" className="h-25 w-25 object-contain" />
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
