"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Presence } from "@/registry/react/components/presence";

const PresenceDemo = () => {
	const [present, setPresent] = React.useState(false);

	return (
		<div className="relative">
			<Button
				clickEffect={false}
				onClick={() => setPresent(!present)}
				variant="outline"
			>
				Toggle
			</Button>
			<Presence asChild present={present}>
				<div
					className={cn(
						"absolute bottom-full left-1/2 mb-2 -translate-x-1/2",
						"px-4 py-2",
						"bg-muted",
						"text-sm",
						"rounded-md border",
						"origin-bottom",
						"data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-bottom-5 data-[state=closed]:animate-out",
						"data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-5 data-[state=open]:animate-in",
					)}
				>
					Content
				</div>
			</Presence>
		</div>
	);
};

export default PresenceDemo;
