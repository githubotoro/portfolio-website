export const Header = () => {
	return (
		<div className="relative col-span-12 row-span-5 p-3 md:row-span-4 bg-isSystemLightSecondary rounded-2xl">
			<div className="absolute w-8 h-8 md:w-12 md:h-12 rounded-xl top-3 left-3 bg-isSystemLightTertiary"></div>

			<div className="absolute bottom-3 left-3">
				<div className="text-2xl md:text-4xl font-700 text-isLabelLightPrimary">
					Uday Khokhariya
				</div>
				<div className="-mb-1 text-xs italic md:text-sm ">
					engineer. developer. builder.
				</div>
			</div>
		</div>
	);
};
