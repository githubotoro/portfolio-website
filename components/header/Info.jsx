import {
	BuildspaceImage,
	ComputerImage,
	Cursive,
	FroogleImage,
	InlineTag,
	TrojanImage,
	Underline,
	YogurtImage,
} from "../ui";

export const Info = () => {
	return (
		<div className="max-w-4xl mt-12 text-lg !leading-[2rem] tracking-tight text-center md:text-xl text-isLabelDarkSecondary font-300">
			I'm a <InlineTag text="grad" rotate={1} /> student -- studying{" "}
			<Underline text="MS in Computer Science" />
			&nbsp;
			<ComputerImage />, @ <Cursive text="Uni. of Southern California." />{" "}
			<TrojanImage /> Apart from being a&nbsp;
			<FroogleImage />
			&nbsp;Addict & believer of{" "}
			<InlineTag text="Yogurt Communism" rotate={0.5} /> <YogurtImage />,
			I have published <Cursive text="3" />{" "}
			<Underline text="research papers" />, won <Cursive text="4" />{" "}
			<Underline text="hackathons" /> and graduated <BuildspaceImage />
			<Cursive text="'s" />
			&nbsp;&nbsp;
			<Underline text="Nights & Weekends Program" /> (
			<Cursive text="3 times so far" />)
		</div>
	);
};

{
	/* <InlineTag text="Yogurt Communism" classes={clsx("rotate-1")} /> */
}
