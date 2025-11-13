"use client";
import MobileNavbar from "@/components/home/mobile-navbar";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS, cn } from "@/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AnimationContainer from "../global/animation-container";
import MaxWidthWrapper from "../global/max-width-wrapper";

const Navbar = () => {
	// Clerk removed for frontend-only mode — treat user as not signed in.
	const user = null;
	const pathname = usePathname();

	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 8) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky inset-x-0 top-0 z-[99999] h-14 w-full select-none border-transparent border-b",
				scroll && "border-background/80 bg-background/40 backdrop-blur-md",
			)}
		>
			<AnimationContainer reverse delay={0.1} className="size-full">
				<MaxWidthWrapper className="flex items-center justify-between">
					<div className="flex items-center">
						<Link href="/">
							<div className="!leading-none flex items-center gap-1 font-bold font-heading text-lg">
								<img src="/logo.png" alt="logo" className="h-7 w-7" />
								<span className="mt-1">SpinaBot</span>
							</div>
						</Link>
					</div>

					{/* Centered navigation */}
					<div className="flex flex-1 justify-center">
						<NavigationMenu className="hidden lg:flex">
							<NavigationMenuList>
								{NAV_LINKS.map((link) => (
									<NavigationMenuItem key={link.title}>
										{(link as any).menu ? (
											<>
												<NavigationMenuTrigger>
													{link.title}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul
														className={cn(
															"grid gap-1 rounded-xl p-4 md:w-[400px] lg:w-[500px]",
															link.title === "Features"
																? "lg:grid-cols-[.75fr_1fr]"
																: "lg:grid-cols-2",
														)}
													>
														{(link as any).menu?.map((menuItem: any) => (
															<ListItem
																key={menuItem.title}
																title={menuItem.title}
																href={menuItem.href}
																icon={menuItem.icon}
															>
																{menuItem.tagline}
															</ListItem>
														))}
													</ul>
												</NavigationMenuContent>
											</>
										) : (
											<Link href={link.href} legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{link.title}
												</NavigationMenuLink>
											</Link>
										)}
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					{/* <div className="hidden items-center lg:flex">
						<div className="flex items-center gap-3"> */}
					{/* <Link
								href={pathname === "/dashboard" ? "/posts" : "/dashboard"}
								className={`${buttonVariants({ size: "sm" })} font-semibold`}
							>
								{pathname === "/dashboard" ? "Your Posts" : "Upload a video"}
							</Link> */}
					{/* <Link href="/sign-in" className={buttonVariants({ size: "sm" })}>
								Get Started
								<ZapIcon className="ml-1.5 size-3.5 fill-orange-500 text-orange-500" />
							</Link> */}
					{/* </div>
					</div> */}
					<MobileNavbar />
				</MaxWidthWrapper>
			</AnimationContainer>
		</header>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					href={href!}
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="flex items-center space-x-2 text-neutral-300">
						<Icon className="h-4 w-4" />
						<h6 className="!leading-none font-medium text-sm">{title}</h6>
					</div>
					<p
						title={children! as string}
						className="line-clamp-1 text-muted-foreground text-sm leading-snug"
					>
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default Navbar;
