import { DocsLayout as DocsLayoutComponent } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout";
import { source } from "@/lib/source";

const DocsLayout = (props: LayoutProps<"/docs">) => (
  <DocsLayoutComponent tree={source.pageTree} {...baseOptions()} {...props} />
);

export default DocsLayout;
