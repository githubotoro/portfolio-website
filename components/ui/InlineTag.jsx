import { cva } from "class-variance-authority";
import { Hoverable } from "@/store/Hoverable";
import clsx from "clsx";

const styles = cva(
	[
		"px-1",
		"leading-none",
		"rounded-full",
		"uppercase",
		"inline-block",
		// "dark-shadow",
	],
	{
		variants: {
			border: {
				default: ["border border-isSeparatorDark"],
			},
			font: {
				default: "text-isLabelLightPrimary font-500",
			},
			bg: {
				default:
					"bg-gradient-to-br from-isSystemLightPrimary to-isSystemLightTertiary",
			},
			rotate: {
				0: "rotate-0",
				0.5: "rotate-[0.5deg]",
				1: "rotate-1",
				2: "rotate-2",
				"-1": "-rotate-1",
				"-2": "-rotate-2",
				"-0.5": "-rotate-[0.5deg]",
			},
		},
		defaultVariants: {
			border: "default",
			font: "default",
			bg: "default",
			rotate: 0,
		},
	}
);

export const InlineTag = ({ border, bg, font, text, rotate, classes }) => {
	return (
		<Hoverable
			Hover={
				<div className="flex flex-row items-center space-x-1">
					<div className="w-12 h-12 rounded-md bg-isRedDark"></div>
					<div>some text content some more text and some more</div>
				</div>
			}
			children={
				<span
					className={clsx(
						styles({ border, bg, font, rotate }),
						classes
					)}
				>
					{text}
				</span>
			}
		/>
	);
};
