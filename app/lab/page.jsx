import { Animate } from "./Animate";
import { DynamicIsland } from "./DynamicIsland";

export default function Page() {
	return (
		<div className="flex flex-col items-center w-full h-screen p-2 place-content-start">
			{/* <Animate /> */}

			<DynamicIsland />
		</div>
	);
}
