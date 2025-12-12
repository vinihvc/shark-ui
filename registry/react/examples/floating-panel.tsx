"use client";

import { createListCollection } from "@ark-ui/react";
import { Cog, X } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
	Field,
	FieldInput,
	FieldLabel,
} from "@/registry/react/components/field";
import {
	FloatingPanel,
	FloatingPanelBody,
	FloatingPanelClose,
	FloatingPanelContent,
	FloatingPanelControl,
	FloatingPanelHeader,
	FloatingPanelMaximize,
	FloatingPanelMinimize,
	FloatingPanelRestore,
	FloatingPanelTitle,
	FloatingPanelTrigger,
} from "@/registry/react/components/floating-panel";
import { NumberInput } from "@/registry/react/components/number-input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValueText,
} from "@/registry/react/components/select";

const FloatingPanelDemo = () => {
	const collection = createListCollection({
		items: ["Inter", "Roboto", "Helvetica", "Geist"],
	});

	return (
		<FloatingPanel>
			<FloatingPanelTrigger asChild>
				<Button>Open Panel</Button>
			</FloatingPanelTrigger>

			<FloatingPanelContent>
				<FloatingPanelHeader>
					<Cog />
					<FloatingPanelTitle>Settings</FloatingPanelTitle>

					<FloatingPanelControl>
						<FloatingPanelMinimize />

						<FloatingPanelMaximize />

						<FloatingPanelRestore />

						<FloatingPanelClose asChild>
							<Button size="icon-sm" variant="solid">
								<X />
								<span className="sr-only">Close</span>
							</Button>
						</FloatingPanelClose>
					</FloatingPanelControl>
				</FloatingPanelHeader>

				<FloatingPanelBody>
					<Field>
						<FieldLabel>Font family</FieldLabel>
						<FieldInput>
							<Select collection={collection} defaultValue={["Inter"]}>
								<SelectTrigger className="w-full">
									<SelectValueText />
								</SelectTrigger>

								<SelectContent>
									{collection.items.map((item) => (
										<SelectItem item={item} key={item}>
											{item}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FieldInput>
					</Field>

					<Field>
						<FieldLabel>Font size</FieldLabel>
						<FieldInput>
							<NumberInput className="w-full" defaultValue="16" />
						</FieldInput>
					</Field>
				</FloatingPanelBody>
			</FloatingPanelContent>
		</FloatingPanel>
	);
};

export default FloatingPanelDemo;
