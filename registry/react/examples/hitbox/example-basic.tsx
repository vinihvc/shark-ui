"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
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

			<Button
				className={cn("hitbox-6", { "hitbox-debug": show })}
				clickEffect={false}
				size="sm"
			>
				Small target
			</Button>
		</div>
	);
};

export default Example;
