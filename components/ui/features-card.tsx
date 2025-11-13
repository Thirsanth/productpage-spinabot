"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Database, Zap, Target, Shield, Cpu } from "lucide-react";
import GetStartedButton from "@/components/ui/get-started-button";

export function FeaturesCard() {
	return (
		<div className="space-y-12">
			{/* Performance Comparison Section */}
			<div className="rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-950/40 to-neutral-950/20 p-8 backdrop-blur-sm">
				<h3 className="text-3xl font-semibold text-white mb-2 text-center">LLM vs SLM</h3>
				<p className="text-center text-gray-400 mb-8">Detailed Performance Metrics</p>
				
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b-2 border-neutral-700 bg-neutral-900/50">
								<th className="text-left py-5 px-6 text-gray-300 font-semibold text-lg">Feature</th>
								<th className="text-left py-5 px-6 text-gray-300 font-semibold text-lg">Large Language Model</th>
								<th className="text-left py-5 px-6 text-emerald-400 font-semibold text-lg">Spinabot SLM</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors duration-200">
								<td className="py-5 px-6 text-gray-300 font-medium">Response Time</td>
								<td className="py-5 px-6 text-gray-400">2–5 seconds</td>
								<td className="py-5 px-6 text-emerald-400 font-semibold text-base">&lt; 200ms</td>
							</tr>
							<tr className="border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors duration-200">
								<td className="py-5 px-6 text-gray-300 font-medium">Cost per 1M tokens</td>
								<td className="py-5 px-6 text-gray-400">$20–60</td>
								<td className="py-5 px-6 text-emerald-400 font-semibold text-base">$2–5</td>
							</tr>
							<tr className="border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors duration-200">
								<td className="py-5 px-6 text-gray-300 font-medium">Memory Usage</td>
								<td className="py-5 px-6 text-gray-400">8–40 GB</td>
								<td className="py-5 px-6 text-emerald-400 font-semibold text-base">500MB–2GB</td>
							</tr>
							<tr className="border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors duration-200">
								<td className="py-5 px-6 text-gray-300 font-medium">Accuracy</td>
								<td className="py-5 px-6 text-gray-400">90–95%</td>
								<td className="py-5 px-6 text-emerald-400 font-semibold text-base">92–96%*</td>
							</tr>
							<tr className="hover:bg-neutral-900/30 transition-colors duration-200">
								<td className="py-5 px-6 text-gray-300 font-medium">Customization</td>
								<td className="py-5 px-6 text-gray-400">Limited</td>
								<td className="py-5 px-6">
									<span className="inline-block bg-emerald-400/10 text-emerald-400 font-semibold px-3 py-1 rounded-full border border-emerald-400/30">Fully Customizable</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				
				<div className="mt-6 pt-4 border-t border-neutral-800/50">
					<p className="text-center text-gray-500 text-sm italic">* When fine-tuned for specific domains</p>
				</div>
			</div>

			{/* Why Choose SLMs Section */}
			<div>
				{/* <h3 className="text-2xl font-semibold text-white mb-8">Why Choose Small Language Models?</h3> */}
				
				<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
					<GridItem
						area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
						icon={<Zap className="h-4 w-4 text-neutral-400" />}
						title="Lightning Fast Inference"
						description="Optimized models that run efficiently on-device or in the cloud"
					/>

					<GridItem
						area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
						icon={<Target className="h-4 w-4 text-neutral-400" />}
						title="Domain Fine-tuning"
						description="Customize models specifically for your industry and use cases"
					/>

					<GridItem
						area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
						icon={<Database className="h-4 w-4 text-neutral-400" />}
						title="Cost-Efficient Pricing"
						description="Significantly lower costs compared to large language models"
					/>

					<GridItem
						area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
						icon={<Shield className="h-4 w-4 text-neutral-400" />}
						title="Edge Deployment"
						description="Run models directly on user devices for privacy and speed"
					/>

					<GridItem
						area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
						icon={<Cpu className="h-4 w-4 text-neutral-400" />}
						title="Minimal Resource Requirements"
						description="Deploy on low-powered devices without compromising performance or accuracy"
					/>
				</ul>
			</div>
		</div>
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
							{title === "Lightning Fast Inference" && (
								<div className="mb-10 flex justify-center">
									<img src="/slm.png" alt="SLM Model" className="h-25 w-25 object-contain" />
								</div>
							)}
							{title === "Cost-Efficient Pricing" && (
								<div className="mb-10 flex justify-center">
									<img src="/brain.png" alt="Brain" className="h-25 w-25 object-contain" />
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
