"use client";

import { Field, FieldDescription } from "@/registry/react/components/field";
import { NumberField } from "@/registry/react/components/number-input";

const Example = () => (
	<Field className="w-full max-w-48">
		<NumberField
			defaultValue="50"
			label="Quantity"
			max={100}
			min={1}
			scrubber
		/>
	</Field>
);

export default Example;
