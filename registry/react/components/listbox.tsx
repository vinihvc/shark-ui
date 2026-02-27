"use client";

import {
	Listbox as ArkListbox,
	createListCollection as createListCollectionArk,
} from "@ark-ui/react/listbox";
import { Check } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const createListCollection = createListCollectionArk;

export const Listbox: ArkListbox.RootComponent = (props) => {
	const { className, ...rest } = props;

	return (
		<ArkListbox.Root
			className={cn(
				"flex w-full max-w-64 flex-col gap-1.5 text-foreground",
				"data-[orientation=vertical]:max-w-64",
				className,
			)}
			data-slot="listbox"
			{...rest}
		/>
	);
};

export const ListboxContent = (
	props: React.ComponentProps<typeof ArkListbox.Content>,
) => {
	const { className, ...rest } = props;
	return (
		<ArkListbox.Content
			className={cn(
				"flex max-h-72 flex-col overflow-y-auto rounded-md border bg-popover p-1 outline-none",
				"data-[orientation=horizontal]:max-h-none data-[orientation=horizontal]:max-w-max data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:overflow-x-auto data-[orientation=horizontal]:overflow-y-hidden",
				"scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border",
				className,
			)}
			data-slot="listbox-content"
			{...rest}
		/>
	);
};

export const ListboxItem = (
	props: React.ComponentProps<typeof ArkListbox.Item>,
) => {
	const { className, children, ...rest } = props;

	return (
		<ArkListbox.Item
			className={cn(
				"flex min-h-8 cursor-pointer select-none items-center justify-between gap-2 rounded-md px-2 py-1.5 text-foreground text-sm outline-none",
				"hover:bg-muted data-highlighted:bg-muted",
				"data-[state=checked]:text-primary",
				"data-disabled:opacity-64 data-disabled:grayscale",
				className,
			)}
			data-slot="listbox-item"
			{...rest}
		>
			<ListboxItemText>{children}</ListboxItemText>
			<ListboxItemIndicator />
		</ArkListbox.Item>
	);
};

export const ListboxItemText = (
	props: React.ComponentProps<typeof ArkListbox.ItemText>,
) => {
	const { className, ...rest } = props;
	return (
		<ArkListbox.ItemText
			className={cn(
				"min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap",
				className,
			)}
			data-slot="listbox-item-text"
			{...rest}
		/>
	);
};

export const ListboxItemIndicator = (
	props: React.ComponentProps<typeof ArkListbox.ItemIndicator>,
) => {
	const { children, ...rest } = props;

	return (
		<ArkListbox.ItemIndicator
			className={cn(
				"flex shrink-0 items-center justify-center text-primary",
				"[&_svg]:size-3.5",
				rest.className,
			)}
			data-slot="listbox-item-indicator"
			{...rest}
		>
			{children ?? <Check />}
		</ArkListbox.ItemIndicator>
	);
};
