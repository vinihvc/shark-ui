import { Separator } from "@/registry/react/components/separator";

const Example = () => (
  <div className="flex h-5 items-center gap-4 text-sm *:[div]:space-y-1">
    <div>
      <p className="font-medium leading-none">Blog</p>
      <p className="text-muted-foreground text-xs">Latest posts</p>
    </div>
    <Separator orientation="vertical" />
    <div>
      <p className="font-medium leading-none">Docs</p>
      <p className="text-muted-foreground text-xs">API references</p>
    </div>
    <Separator orientation="vertical" />
    <div>
      <p className="font-medium leading-none">Source</p>
      <p className="text-muted-foreground text-xs">View on GitHub</p>
    </div>
  </div>
);

export default Example;
