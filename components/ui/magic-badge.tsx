interface Props {
	title: string;
}

const MagicBadge = ({ title }: Props) => {
	return (
		<div className="relative inline-flex h-8 select-none overflow-hidden rounded-full p-[1.5px] focus:outline-none">
			<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1f1f1f_0%,#e5e7eb_50%,#1f1f1f_100%)]" />
			<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 font-medium text-sm text-gray-100 backdrop-blur-3xl">
				{title}
			</span>
		</div>
	);
};

export default MagicBadge;
