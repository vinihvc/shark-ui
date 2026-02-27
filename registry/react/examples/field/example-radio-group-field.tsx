"use client";

import {
	Field,
	FieldDescription,
	FieldLegend,
	FieldSet,
} from "@/registry/react/components/field";
import {
	RadioGroup,
	RadioGroupItem,
	RadioGroupText,
} from "@/registry/react/components/radio-group";

const Example = () => (
	<FieldSet className="w-full max-w-xs">
		<FieldLegend variant="label">Choose Plan</FieldLegend>
		<RadioGroup defaultValue="free">
			<Field>
				<RadioGroupItem value="free">Free</RadioGroupItem>
			</Field>
			<Field>
				<RadioGroupItem value="pro">Pro</RadioGroupItem>
			</Field>
			<Field>
				<RadioGroupItem value="enterprise">Enterprise</RadioGroupItem>
			</Field>
		</RadioGroup>
		<FieldDescription>Select the plan that fits your needs.</FieldDescription>
	</FieldSet>
);

export default Example;
