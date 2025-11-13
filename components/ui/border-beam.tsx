import { cn } from "@/utils";

interface BorderBeamProps {
	className?: string;
	size?: number;
	duration?: number;
	borderWidth?: number;
	anchor?: number;
	colorFrom?: string;
	colorTo?: string;
	delay?: number;
}

export const BorderBeam = ({
	className,
	size = 200,
	duration = 15,
	anchor = 90,
	borderWidth = 1.5,
	colorFrom = "#f3f4f6",
	colorTo = "#1f1f1f",
	delay = 0,
}: BorderBeamProps) => {
	return (
		<>
			{/* First beam */}
			<div
				style={
					{
						"--size": size,
						"--duration": duration,
						"--anchor": anchor,
						"--border-width": borderWidth,
						"--color-from": colorFrom,
						"--color-to": colorTo,
						"--delay": `-${delay}s`,
					} as React.CSSProperties
				}
				className={cn(
					"absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*2px)_solid_transparent]",
					"![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
					"after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
					className,
				)}
			/>
			{/* Second beam moving in opposite direction */}
			<div
				style={
					{
						"--size": size,
						"--duration": duration,
						"--anchor": anchor,
						"--border-width": borderWidth,
						"--color-from": colorTo,
						"--color-to": colorFrom,
						"--delay": `-${delay + duration/2}s`,
					} as React.CSSProperties
				}
				className={cn(
					"absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*2px)_solid_transparent]",
					"![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
					"after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam-reverse after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_right,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
					className,
				)}
			/>
		</>
	);
};
