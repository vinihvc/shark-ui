"use client";

import { Checkbox } from "@/registry/react/components/checkbox";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
} from "@/registry/react/components/field";

const Example = () => (
	<Field orientation="horizontal" className="w-full max-w-xs">
		<Checkbox />
		<FieldContent>
			<FieldLabel>Receive notifications</FieldLabel>
			<FieldDescription>
				You'll receive a notification when someone posts a comment
			</FieldDescription>
		</FieldContent>
	</Field>
);

export default Example;
