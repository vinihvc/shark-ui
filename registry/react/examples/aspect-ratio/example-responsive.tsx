import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const Example = () => (
	<AspectRatio className="w-full max-w-40 rounded-xl border bg-muted sm:[--ratio:4/3] md:[--ratio:16/9] lg:[--ratio:1/1]">
		<div className="flex size-full items-center justify-center">
			<span className="select-none text-muted-foreground text-xs">
				4:3 → 16:9 → 1:1
			</span>
		</div>
	</AspectRatio>
);

export default Example;
