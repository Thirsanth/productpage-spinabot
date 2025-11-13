import React from "react";

interface NewButtonProps {
	children?: React.ReactNode;
}

const NewButton = ({ children }: NewButtonProps) => {
	return (
		<div className="group relative">
			<button className="relative inline-block cursor-pointer rounded-xl bg-gray-600 p-px font-semibold text-white leading-6 shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
				<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-400 via-white to-gray-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
				<span className="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
					<div className="relative z-10 flex items-center space-x-2">
						{children ? (
							children
						) : (
							<>
								<span className="transition-all duration-500 group-hover:translate-x-1">
									Let's get started
								</span>
								<svg
									className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
									data-slot="icon"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
										fillRule="evenodd"
									/>
								</svg>
							</>
						)}
					</div>
				</span>
			</button>
		</div>
	);
};

export default NewButton;
