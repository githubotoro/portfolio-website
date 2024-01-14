import { PinFill } from "@/components/ios";
import Image from "next/image";
import clsx from "clsx";
import { Info } from "@/components/header";

export default function Page() {
	return (
		<main className="flex flex-col items-center w-full p-2 place-content-center">
			<div className="flex flex-col items-center w-full mt-20 text-isWhite ">
				<div className="flex flex-row items-center px-1 py-1 text-base leading-tight border rounded-full w-fit bg-isSystemDarkSecondary border-isSeparatorDark font-200">
					{/* pink-shadow */}
					<PinFill
						classes={clsx(
							"w-6 h-6 fill-isWhite rounded-full p-1 bg-gradient-to-br from-isPinkDarkEmphasis to-isPinkDark"
						)}
					/>
					<div className="ml-2 mr-1">
						Los Angeles,&nbsp;
						<span className="font-pacifico">California.</span>
					</div>
				</div>

				<h1 className="mt-3 text-4xl text-center font-700">
					Uday Khokhariya
				</h1>

				{/* <div className="overflow-hidden rounded-lg w-fit h-fit">
					<div className="flex flex-row items-center pr-1 mt-5 space-x-1 overflow-hidden text-lg border rounded-lg h-fit bg-isSystemDarkSecondary hover:blur-none border-isSeparatorDark font-300 text-isLabelDarkPrimary blur-[0.25rem]">
						<div className="pl-1 pr-1 bg-isBlueDark font-500">
							NOTE
						</div>
						<div>Hover/Click on reveal the facts behind them</div>
					</div>
				</div> */}

				<Info />

				{/* <div className="w-full h-screen bg-isWhite"></div> */}
			</div>
		</main>
	);
}
