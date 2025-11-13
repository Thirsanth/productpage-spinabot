"use client";

import { cn } from "@/utils";
import { useSidebar } from "@/contexts/sidebar-context";

export function LayoutContent({ children }: { children: React.ReactNode }) {
	const { isVisible } = useSidebar();

	return (
		<main
			className={cn(
				"relative z-0 transition-all duration-300 ease-in-out",
				isVisible ? "ml-64 w-[calc(100%-16rem)]" : "ml-0 w-full"
			)}
		>
			{children}
		</main>
	);
}
