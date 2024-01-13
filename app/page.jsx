import { PinFill } from "@/components/ios";
import Image from "next/image";
import clsx from "clsx";
import USC_Logo from "@/public/assets/logos/usc.png";
import { Trojan } from "@/components/logos";

export default function Page() {
	return (
		<main className="flex flex-col items-center w-full p-2 place-content-center">
			<div className="self-center h-6 max-w-full rounded-full min-w-44 w-fit bg-gradient-to-b from-isSystemLightPrimary to-isSystemLightTertiary"></div>

			<div className="flex flex-col items-center w-full mt-12 text-isWhite ">
				<div className="flex flex-row items-center px-1 py-1 text-base leading-tight border rounded-full w-fit bg-isSystemDarkSecondary border-isSeparatorDark font-200">
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

				<h1 className="mt-3 text-4xl text-center font-700 fon">
					Uday Khokhariya
				</h1>

				<div className="mt-12 text-xl tracking-tight text-center text-isLabelDarkSecondary font-300">
					I'm a{" "}
					<span className="inline-block px-1 leading-tight border rounded-full bg-gradient-to-br from-isSystemLightPrimary to-isSystemLightTertiary border-isSeparatorDark text-isBlack font-500">
						GRAD
					</span>{" "}
					student, @{" "}
					<span className="font-pacifico text-isLabelDarkPrimary">
						Uni. of Southern California.{" "}
						<div className="relative inline-block w-14 h-7">
							<div className="absolute bottom-0 w-full -mb-2 border rounded-lg h-7 bg-gradient-to-br from-isYellowDarkEmphasis to-isYellowLight border-isRedDark"></div>
							<div className="absolute inset-0 mt-1">
								<Trojan
									classes={clsx("w-6 h-6 inline-block")}
								/>
							</div>
						</div>
					</span>{" "}
				</div>

				{/* <div className="w-full h-screen bg-isWhite"></div> */}
			</div>
		</main>
	);
}
