"use client";

import {
	Field,
	FieldDescription,
	FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const FieldDemo = () => (
	<Field className="w-full max-w-xs">
		<FieldLabel>Username</FieldLabel>
		<Input placeholder="John Doe" />
		<FieldDescription>
			Choose a unique username for your account.
		</FieldDescription>
	</Field>
);

export default FieldDemo;
