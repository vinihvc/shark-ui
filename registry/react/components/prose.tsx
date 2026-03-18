"use client";

import { ark } from "@ark-ui/react/factory";
import { cn } from "@/lib/utils";

export const Prose = (props: React.ComponentProps<typeof ark.div>) => {
	const { className, ...rest } = props;

	return (
		<ark.div
			className={cn("prose mx-auto max-w-[65ch]", className)}
			data-slot="prose"
			{...rest}
		/>
	);
};
