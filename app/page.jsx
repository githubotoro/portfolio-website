import { Header, Location } from "@/components/bentos";
import Image from "next/image";

export default function Page() {
	return (
		<main className="flex flex-col items-center w-full p-2 place-content-center">
			<div className="w-full max-w-5xl">
				<div className="grid grid-cols-12 gap-2 grid-rows-12 aspect-square">
					<Header />

					<div className="col-span-3 row-span-3 bg-isSystemLightSecondary rounded-2xl"></div>

					<div className="col-span-4 row-span-5 bg-isRedDark"></div>

					<Location />

					<div className="col-span-3 row-span-4 md:row-span-5 bg-isRedDark"></div>

					<div className="col-span-5 row-span-3 md:row-span-4 bg-isRedDark"></div>
					<div className="col-span-4 row-span-2 md:row-span-3 bg-isRedDark"></div>
				</div>

				<div className="flex flex-col w-full mt-2 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
					<div className="grid w-full grid-cols-12 gap-2 md:w-1/2 aspect-square grid-rows-12">
						<div className="col-span-9 row-span-3 bg-isRedDark"></div>

						<div className="col-span-3 row-span-9 bg-isRedDark"></div>

						<div className="col-span-6 row-span-6 bg-isRedDark"></div>

						<div className="col-span-3 row-span-3 bg-isRedDark"></div>

						<div className="col-span-3 row-span-3 bg-isRedDark"></div>

						<div className="col-span-12 row-span-3 bg-isRedDark"></div>
					</div>

					<div className="grid w-full grid-cols-12 gap-2 md:w-1/2 aspect-square grid-rows-12">
						<div className="col-span-6 row-span-5 bg-isRedDark"></div>

						<div className="col-span-3 row-span-3 bg-isRedDark"></div>

						<div className="col-span-3 row-span-3 bg-isRedDark"></div>

						<div className="col-span-6 row-span-5 bg-isRedDark"></div>

						<div className="col-span-6 row-span-3 bg-isRedDark"></div>

						<div className="col-span-12 row-span-4 bg-isRedDark"></div>
					</div>
				</div>
			</div>
		</main>
	);
}
