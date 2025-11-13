import { LucideIcon } from "lucide-react";

export type NavMenuItem = {
    title: string;
    href: string;
    icon?: LucideIcon;
    tagline?: string;
};

export type NavLink = {
    title: string;
    href: string;
    menu?: NavMenuItem[];
};

export const NAV_LINKS: NavLink[] = [
    {
        title: "Agentic AI & Workflows",
        href: "/agentic-ai-workflows",
    },
    {
        title: "Agentic Chatbot Builder",
        href: "/agentic-chatbot-builder",
    },
    {
        title: "AI Voice Agents",
        href: "/voice-bot",
    },
    {
        title: "SLM",
        href: "/slm",
    },
];
