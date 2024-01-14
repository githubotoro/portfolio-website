"use client";

import { motion } from "framer-motion";

export const Animate = () => {
	return (
		<motion.div
			className="w-24 h-24 bg-isWhite rounded-2xl"
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.8 }}
		></motion.div>
	);
};
