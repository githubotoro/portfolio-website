import Image from "next/image";
import clsx from "clsx";
import Yogurt_Logo from "@/public/assets/logos/yogurt.png";
import { Trojan } from "@/components/logos";
import Buildspace_Logo from "@/public/assets/logos/buildspace.jpg";
import { SparklesTvFill } from "../ios";

const WRAPPER = clsx("relative inline-block h-5 w-14 md:h-7");
const CHILD = clsx(
	"absolute bottom-0 flex flex-col items-center w-full -mb-2 rounded-lg h-7 md:h-7 place-content-center overflow-hidden"
);

export const TrojanImage = () => {
	return (
		<div className={clsx(WRAPPER)}>
			<div
				className={clsx(
					CHILD,
					"bg-gradient-to-br from-isYellowDarkEmphasis to-isYellowLight ",
					"border border-isRedDark",
					"-rotate-2"
				)}
			>
				<Trojan classes={clsx("w-6 h-6 ")} />
			</div>
		</div>
	);
};

export const ComputerImage = () => {
	return (
		<div className={clsx(WRAPPER)}>
			<div
				className={clsx(
					CHILD,
					"bg-gradient-to-br from-isBlueDarkEmphasis to-isBlueLight ",
					"border border-isCyanDark",
					"rotate-1"
				)}
			>
				<SparklesTvFill classes={clsx("w-6 h-6 fill-isWhite")} />
			</div>
		</div>
	);
};

export const FroogleImage = () => {
	return (
		<span className="inline-block px-1 text-base leading-tight border rounded-full font-600 bg-isSystemDarkSecondary border-isSeparatorDark rotate-3 ">
			{/* waving-letters waving-container */}
			<span className="text-isBlueDark">F</span>
			<span className="text-isRedDark">r</span>
			<span className="text-isYellowDark">o</span>
			<span className="text-isYellowDark">o</span>
			<span className="text-isBlueDark">g</span>
			<span className="text-isGreenDark">l</span>
			<span className="text-isRedDark">e</span>
		</span>
	);
};

export const YogurtImage = () => {
	return (
		<div className={WRAPPER}>
			<div
				className={clsx(
					CHILD,
					"bg-isBlack",
					"border border-isSystemDarkSecondary",
					"-rotate-3",
					"opacity-95"
				)}
			>
				<Image
					src={Yogurt_Logo}
					alt="When yogurt took over."
					className="object-cover"
				/>
			</div>
		</div>
	);
};

export const BuildspaceImage = () => {
	return (
		<div className={clsx("relative inline-block h-5 w-28 md:h-7")}>
			<div className="absolute bottom-0 flex flex-col items-center w-full h-6 px-1 -mb-2 overflow-hidden border rounded-lg md:h-6 bg-isWhite border-isSystemDarkSecondary place-content-center -rotate-1 opacity-90">
				<Image
					src={Buildspace_Logo}
					alt="Logo of Buildspace"
					className="object-cover"
				/>
			</div>
		</div>
	);
};
