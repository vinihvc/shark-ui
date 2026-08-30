import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const Example = () => (
  <div className="flex flex-col gap-6">
    <div>
      <p className="mb-2 font-medium text-foreground text-sm">
        defaultExpandedDepth={0} (all collapsed)
      </p>
      <JsonTreeView data={data} defaultExpandedDepth={0} />
    </div>
    <div>
      <p className="mb-2 font-medium text-foreground text-sm">
        defaultExpandedDepth={2}
      </p>
      <JsonTreeView data={data} defaultExpandedDepth={2} />
    </div>
  </div>
);

const data = {
  user: {
    profile: {
      name: "Jane",
      settings: {
        notifications: true,
        theme: "dark",
      },
    },
  },
};

export default Example;
