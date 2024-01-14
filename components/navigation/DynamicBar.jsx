"use client";

import { useStore } from "@/store";
import clsx from "clsx";

export const DynamicBar = () => {
	const { Highlight, setHighlight, navFocused, setNavFocused } = useStore();

	return (
		<div className="absolute top-0 flex flex-col items-center w-full p-2 place-content-center">
			{/* <div
				className={clsx(
					" bg-gradient-to-b from-isSystemLightPrimary to-isSystemLightTertiary flex flex-col items-center p-2 rounded-2xl transition-all duration-500 max-w-0 max-h-0",
					navFocused === false ? "w-44 h-6" : "w-fit h-12  mt-5"
				)}
			>
				<Highlight />
			</div> */}
		</div>
	);
};
