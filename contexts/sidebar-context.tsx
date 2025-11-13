"use client";

import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
	isVisible: boolean;
	setIsVisible: (visible: boolean) => void;
	toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
	const [isVisible, setIsVisible] = useState(true);

	const toggleSidebar = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<SidebarContext.Provider value={{ isVisible, setIsVisible, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
}

export function useSidebar() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
}
