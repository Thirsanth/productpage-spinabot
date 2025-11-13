"use client";

import { cn } from "@/utils";
import React from "react";
import { useSidebar } from "@/contexts/sidebar-context";

interface Props {
	className?: string;
	children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => { 
	
	const { isVisible } = useSidebar();

	return (
		<section
			className={cn(
				"mx-auto h-full w-full max-w-full transition-all duration-300",
				isVisible 
					? "px-4 md:max-w-screen-xl md:px-12 lg:px-2" 
					: "px-2 md:max-w-full md:px-4 lg:px-12",
				className,
			)}
		>
			{children}
		</section>
	);
};

export default MaxWidthWrapper;
