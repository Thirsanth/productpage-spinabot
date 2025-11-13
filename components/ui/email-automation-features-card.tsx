"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Mail, Zap, BarChart3, Settings, Users, Sparkles } from "lucide-react";

export function EmailAutomationFeaturesCard() {
	return (
		<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
			<GridItem
				area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
				icon={<Mail className="h-4 w-4 text-neutral-400" />}
				title="Smart Campaign Automation"
				description="Create and automate email campaigns triggered by user behavior and events"
			/>

			<GridItem
				area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
				icon={<Users className="h-4 w-4 text-neutral-400" />}
				title="Segmentation & Targeting"
				description="Intelligent audience segmentation based on behavior, preferences, and engagement"
			/>

			<GridItem
				area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
				icon={<Zap className="h-4 w-4 text-neutral-400" />}
				title="Real-Time Triggers"
				description="Send emails instantly based on specific user actions and workflow conditions"
			/>

			<GridItem
				area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
				icon={<BarChart3 className="h-4 w-4 text-neutral-400" />}
				title="Analytics & Reporting"
				description="Track open rates, click-through rates, conversions, and engagement metrics"
			/>

			<GridItem
				area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
				icon={<Settings className="h-4 w-4 text-neutral-400" />}
				title="Dynamic Content Personalization"
				description="Personalize emails with AI-driven content blocks that adapt to each recipient"
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
