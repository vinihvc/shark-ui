import { ScrollArea } from "@/registry/react/components/scroll-area";

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-alpha.${i}`);

const Example = () => (
  <ScrollArea className="h-64 w-48 rounded-lg border" scrollFade>
    <div className="px-4 py-2">
      <h4 className="mb-2 font-medium text-sm">Tags</h4>
      <div className="flex flex-col gap-1">
        {tags.map((tag) => (
          <div className="text-sm" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  </ScrollArea>
);

export default Example;
