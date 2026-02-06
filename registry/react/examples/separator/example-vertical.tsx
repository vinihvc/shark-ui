import { Separator } from "@/registry/react/components/separator";

const Example = () => (
  <div className="flex h-5 items-center gap-4 text-sm">
    <span>Blog</span>
    <Separator orientation="vertical" />
    <span>Docs</span>
    <Separator orientation="vertical" />
    <span>Source</span>
  </div>
);

export default Example;
