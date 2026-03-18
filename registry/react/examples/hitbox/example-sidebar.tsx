"use client";

import React from "react";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";
import { cn } from "@/lib/utils";

const Example = () => {
	const [show, setShow] = React.useState(false);

	return (
		<div className="relative flex size-full items-center justify-center">
			<div className="absolute top-2 right-2">
				<Field orientation="horizontal">
					<Switch
						checked={show}
						onCheckedChange={({ checked }) => setShow(checked)}
					/>
					<FieldLabel>Show hitbox</FieldLabel>
				</Field>
			</div>

			<nav className="flex w-48 flex-col gap-2 rounded-lg border p-1">
				<a
					href="#"
					className={cn(
						"hitbox-y-1 block rounded-md px-4 py-2 text-sm hover:bg-muted",
						{ "hitbox-debug": show },
					)}
				>
					Dashboard
				</a>
				<a
					href="#"
					className={cn(
						"hitbox-y-1 block rounded-md px-4 py-2 text-sm hover:bg-muted",
						{ "hitbox-debug": show },
					)}
				>
					Projects
				</a>
				<a
					href="#"
					className={cn(
						"hitbox-y-1 block rounded-md px-4 py-2 text-sm hover:bg-muted",
						{ "hitbox-debug": show },
					)}
				>
					Settings
				</a>
			</nav>
		</div>
	);
};

export default Example;
