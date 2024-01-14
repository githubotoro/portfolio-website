"use client";

import React from "react";
import { useStore } from ".";

export const Hoverable = ({ Hover, children }) => {
	const { navFocused, setNavFocused, resetHighlight, setHighlight } =
		useStore();

	return (
		<span
			className="contents"
			onMouseOver={() => {
				setNavFocused(true);
				setHighlight(Hover);
			}}
			onMouseOut={() => {
				setNavFocused(false);
				resetHighlight();
			}}
		>
			{children}
		</span>
	);
};
