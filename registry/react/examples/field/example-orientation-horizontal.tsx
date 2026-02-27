"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => (
	<Field className="w-full max-w-xs" orientation="horizontal">
		<Switch />
		<FieldLabel>Enable notifications</FieldLabel>
	</Field>
);

export default Example;
