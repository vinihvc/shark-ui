"use client";

import { CheckIcon, Undo, WandSparklesIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { useHotKeys } from "@/hooks/use-hot-keys";
import { BORDER_RADIUS, GRAY_COLORS, PRIMARY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
	Field,
	FieldGroup,
	FieldLabel,
} from "@/registry/react/components/field";
import { Kbd } from "@/registry/react/components/kbd";
import {
	Sheet,
	SheetBody,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from "@/registry/react/components/sheet";
import { Slider } from "@/registry/react/components/slider";
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/registry/react/components/toggle-group";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/react/components/tooltip";
import {
	type BorderRadius,
	type GrayColor,
	type PrimaryColor,
	useConfig,
} from "@/store/config";

export const HeaderCustomize = () => {
	const [config, setConfig] = useConfig();
	const { resolvedTheme } = useTheme();

	const [isOpen, setIsOpen] = React.useState(false);

	useHotKeys(["c", "C"], () => setIsOpen((prev) => !prev));

	const isLight = resolvedTheme === "light";

	const handleSelectGrayColor = (color: GrayColor) => {
		setConfig({
			...config,
			grayColor: color,
		});
	};

	const handleSelectPrimaryColor = (color: PrimaryColor) => {
		setConfig({
			...config,
			primaryColor: color,
		});
	};

	return (
		<Sheet
			modal={false}
			open={isOpen}
			onOpenChange={({ open }) => setIsOpen(open)}
		>
			<Tooltip>
				<TooltipTrigger asChild>
					<SheetTrigger asChild>
						<Button size="icon-md" variant="ghost">
							<WandSparklesIcon />
						</Button>
					</SheetTrigger>
				</TooltipTrigger>
				<TooltipContent>
					<p>
						Customize <Kbd>C</Kbd>
					</p>
				</TooltipContent>
			</Tooltip>

			<SheetContent variant="inset">
				<SheetHeader
					description="Change the theme to match your style."
					title="Make it yours"
				/>

				<SheetBody>
					<FieldGroup className="gap-6">
						<Field>
							<FieldLabel>Gray Color</FieldLabel>
							<ToggleGroup
								className="grid w-full grid-cols-3 gap-2"
								multiple={false}
								onValueChange={({ value }) =>
									handleSelectGrayColor(value[0] as GrayColor)
								}
								value={[config.grayColor]}
							>
								{GRAY_COLORS.map((color) => (
									<ToggleGroupItem
										className="group flex items-center justify-between gap-2 border-input shadow-md/5"
										key={color.value}
										value={color.value}
									>
										<div className="flex items-center gap-2">
											<div
												className={cn(
													"size-4 rounded-full border",
													`bg-${color.value}-900`,
												)}
											/>
											{color.label}
										</div>
										<CheckIcon className="size-3.5 group-data-[state=off]:hidden" />
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</Field>

						<Field>
							<FieldLabel>Primary Color</FieldLabel>
							<ToggleGroup
								className="grid w-full grid-cols-3 gap-4"
								multiple={false}
								onValueChange={({ value }) =>
									handleSelectPrimaryColor(value[0] as PrimaryColor)
								}
								value={[config.primaryColor]}
							>
								{PRIMARY_COLORS.map((color) => {
									const hex =
										typeof color.hex === "string"
											? color.hex
											: color.hex[isLight ? "light" : "dark"];

									return (
										<ToggleGroupItem
											className="group flex items-center justify-between gap-2 border-input shadow-md/5"
											key={color.value}
											value={color.value}
										>
											<div className="flex items-center gap-2">
												<div
													className={cn("size-4 rounded-full border", hex)}
												/>
												{color.label}
											</div>
											<CheckIcon className="size-3.5 group-data-[state=off]:hidden" />
										</ToggleGroupItem>
									);
								})}
							</ToggleGroup>
						</Field>

						<Field>
							<FieldLabel>Radius</FieldLabel>
							<Slider
								min={0}
								defaultValue={[5]}
								markerInterval={1}
								max={BORDER_RADIUS.length - 1}
								showMarkers
								markerLabels={BORDER_RADIUS.map((radius) => radius.value)}
								value={[
									BORDER_RADIUS.findIndex(
										(radius) => radius.value === config.borderRadius,
									),
								]}
								onValueChange={({ value }) =>
									setConfig({
										...config,
										borderRadius: BORDER_RADIUS[value[0]].value as BorderRadius,
									})
								}
							/>
						</Field>
					</FieldGroup>
				</SheetBody>

				<SheetFooter>
					<Button variant="outline">
						<Undo /> Reset
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};
