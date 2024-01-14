"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export const DynamicIsland = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleSize = () => {
		setIsExpanded(!isExpanded);
	};

	const sizes = {
		initial: {
			width: "8rem",
			height: "1.5rem",
			y: "0rem",
		},
		expanded: {
			width: "20rem",
			height: "10rem",
			y: "2rem",
		},
	};

	return (
		<React.Fragment>
			<div className="flex flex-row items-center w-full mb-12 space-x-2 place-content-center text-isWhite">
				<button
					onClick={toggleSize}
					className="px-2 rounded-lg bg-isBlueLight"
				>
					Expand
				</button>
			</div>

			<hr className="w-full rounded-full bg-isSeparatorDark" />

			<motion.div
				className="block overflow-hidden rounded-3xl bg-isWhite"
				initial={{
					width: sizes.initial.width,
					height: sizes.initial.height,
					y: sizes.initial.y,
				}}
				animate={{
					width: isExpanded
						? sizes.expanded.width
						: sizes.initial.width,
					height: isExpanded
						? sizes.expanded.height
						: sizes.initial.height,
					y: isExpanded ? sizes.expanded.y : sizes.initial.y,
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			></motion.div>
		</React.Fragment>
	);
};
