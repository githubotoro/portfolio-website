import React from "react";
import { create } from "zustand";

const BASE_TEXT = "";

export const useStore = create((set) => ({
	navtext: BASE_TEXT,
	setNavtext: (navtext) => set({ navtext }),
	resetNavtext: () =>
		set((state) => ({
			navtext: BASE_TEXT,
		})),
	navHighlight: false,
	setNavHighlight: (navHighlight) => set({ navHighlight }),
	navFocused: false,
	setNavFocused: (navFocused) => set({ navFocused }),
	Highlight: () => {
		return <React.Fragment></React.Fragment>;
	},
	setHighlight: (highlightContent) =>
		set((state) => ({
			...state,
			Highlight: () => highlightContent,
		})),
	resetHighlight: () =>
		set((state) => ({
			...state,
			Highlight: () => <React.Fragment></React.Fragment>,
		})),
}));
