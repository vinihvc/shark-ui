import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const preferences = new Map([
  ["theme", "dark"],
  ["language", "en"],
  ["notifications", "enabled"],
]);

const visitedPages = new Set(["/home", "/profile", "/settings"]);

const data = {
  preferences,
  visitedPages,
};

const Example = () => <JsonTreeView data={data} defaultExpandedDepth={1} />;

export default Example;
