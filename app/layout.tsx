import Footer from "@/components/home/footer";
import type { Metadata } from "next";
import "./styles/globals.css";
import Sidebar from "@/components/home/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { aeonik, cn, inter } from "@/utils";
import { ORIGIN_URL } from "@/utils/constants/pricing";
import { SidebarProvider } from "@/contexts/sidebar-context";
import { LayoutContent } from "./layout-content";
// Clerk removed for frontend-only/demo mode. The app no longer provides
// a global ClerkProvider so authentication is disabled in this build.

export const metadata: Metadata = {
	title: "Spinabot",
	description:
		"Convert your video or audio into a Blog Post in seconds with the power of AI!",
	icons: {
		icon: "/logo.png",
	},
	metadataBase: new URL(ORIGIN_URL),
	alternates: {
		canonical: ORIGIN_URL,
	},
	openGraph: {
		title: "Spinabot",
		description:
			"Convert your video or audio into a Blog Post in seconds with the power of AI!",
		url: "https://spinabot.com",
		images: [
			{
				url: "/writora.png",
				width: 1260,
				height: 800,
			},
		],
		locale: "en-EN",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logo.png" sizes="any" />
			</head>
			<body
				className={cn(
					"!font-default min-h-screen overflow-x-hidden bg-background text-foreground antialiased",
					aeonik.variable,
					inter.variable,
				)}
			>
				<div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,231,235,0.15),rgba(255,255,255,0))] bg-neutral-950" />
				<SidebarProvider>
					<Sidebar />
					<LayoutContent>{children}</LayoutContent>
					<Footer />
				</SidebarProvider>
				<Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
