"use client";

import { NAV_LINKS, cn } from "@/utils";
import { LucideIcon, ChevronDown, ChevronLeft, PanelLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useSidebar } from "@/contexts/sidebar-context";

const Sidebar = () => {
	const pathname = usePathname();
	const { isVisible, toggleSidebar } = useSidebar();
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	const toggleExpanded = (title: string) => {
		setExpandedItems((prev) =>
			prev.includes(title)
				? prev.filter((item) => item !== title)
				: [...prev, title]
		);
	};

	// Check if the link is active
	const isLinkActive = (href: string) => {
		return pathname === href;
	};

	return (
		<>
			{/* Hidden Sidebar - Fixed Left */}
			<aside
				className={cn(
					"fixed left-0 top-0 z-[99998] h-screen transition-all duration-300 ease-in-out",
					"border-r border-background/80 bg-background/95 backdrop-blur-md",
					"flex flex-col",
					isVisible ? "w-64" : "-translate-x-full w-64"
				)}
			>
				{/* Header with Logo and Hide Button */}
				<div className="flex items-center justify-between border-b border-background/80 px-6 py-4">
					<Link href="/">
						<div className="flex items-center gap-2 font-bold font-heading text-lg leading-none">
							<img src="/logo.png" alt="logo" className="h-6 w-6" />
							<span>SpinaBot</span>
						</div>
					</Link>
					<button
						onClick={toggleSidebar}
						className={cn(
							"rounded-lg p-2 transition-colors duration-200",
							"bg-gray-700/20 text-gray-400 hover:bg-gray-700/40"
						)}
						title="Hide sidebar"
					>
						<ChevronLeft className="h-4 w-4" />
					</button>
				</div>

			{/* Navigation Links */}
			<nav className="flex-1 overflow-y-auto px-4 py-6">
				<ul className="space-y-2">
					{NAV_LINKS.map((link) => (
						<li key={link.title}>
							{(link as any).menu ? (
								<>
									<button
										onClick={() => toggleExpanded(link.title)}
										className={cn(
											"flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium",
											"transition-colors duration-200",
											expandedItems.includes(link.title)
												? "bg-gray-700/40 text-foreground"
												: "text-muted-foreground hover:bg-gray-700/20 hover:text-foreground"
										)}
									>
										<span>{link.title}</span>
										<ChevronDown
											className={cn(
												"h-4 w-4 transition-transform duration-200",
												expandedItems.includes(link.title)
													? "rotate-180"
													: ""
											)}
										/>
									</button>

									{/* Submenu Items */}
									{expandedItems.includes(link.title) && (
										<ul className="mt-1 space-y-1 pl-4">
											{(link as any).menu?.map((menuItem: any) => (
												<ListItem
													key={menuItem.title}
													title={menuItem.title}
													href={menuItem.href}
													icon={menuItem.icon}
													isActive={pathname === menuItem.href}
												>
													{menuItem.tagline}
												</ListItem>
											))}
										</ul>
									)}
								</>
							) : (
								<Link
									href={link.href}
									className={cn(
										"flex w-full rounded-lg px-3 py-2 text-sm font-medium",
										"transition-colors duration-200",
										"text-muted-foreground hover:bg-gray-700/20 hover:text-foreground",
										isLinkActive(link.href) && "bg-gray-700/40 text-foreground"
									)}
								>
									{link.title}
								</Link>
							)}
						</li>
					))}
				</ul>
			</nav>

			{/* Footer Info */}
			<div className="border-t border-background/80 px-6 py-4 text-center text-xs text-muted-foreground">
				<p>© 2025 SpinaBot</p>
			</div>
		</aside>

			{/* Show Sidebar Button - Visible when sidebar is hidden */}
			{!isVisible && (
				<button
					onClick={toggleSidebar}
					className={cn(
						"fixed left-6 top-6 z-[99997] rounded-lg p-2.5 transition-all duration-300 ease-in-out",
						"bg-gray-700/40 text-gray-200 hover:bg-gray-700/60 shadow-lg"
					)}
					title="Show sidebar"
				>
					<PanelLeft className="h-5 w-5" />
				</button>
			)}
		</>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & {
		title: string;
		icon: LucideIcon;
		isActive?: boolean;
	}
>(
	({ className, title, href, icon: Icon, isActive = false, children, ...props }, ref) => {
		return (
			<li>
				<Link
					href={href!}
					ref={ref}
					className={cn(
						"flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs leading-tight",
						"transition-colors duration-200",
						"text-muted-foreground hover:bg-gray-700/20 hover:text-foreground",
						isActive && "bg-gray-700/30 text-foreground",
						className
					)}
					{...props}
				>
					<Icon className="h-3.5 w-3.5 flex-shrink-0" />
					<span className="truncate">{title}</span>
				</Link>
			</li>
		);
	}
);
ListItem.displayName = "ListItem";

export default Sidebar;
