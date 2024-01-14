export const Underline = ({ text }) => {
	return (
		<span className="underline decoration-wavy underline-offset-4 md:underline-offset-[5px]">
			{text}
		</span>
	);
};

export const Cursive = ({ text }) => {
	return (
		<span className="font-pacifico text-isLabelDarkPrimary">{text}</span>
	);
};
