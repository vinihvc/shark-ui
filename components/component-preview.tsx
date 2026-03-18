/** biome-ignore-all lint/correctness/noConstAssign: it's ok */
/** biome-ignore-all lint/style/noParameterAssign: it's ok */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ComponentPreviewTabs } from "./component-preview-tabs";
import { ComponentSource } from "./component-source";

const registryPath = "registry/react/examples";

interface ComponentPreviewProps
  extends Omit<React.ComponentProps<"div">, "ref"> {
  /**
   * The alignment of the component
   *
   * @default "center"
   */
  align?: "start" | "center" | "end";
  /**
   * The name of the component to display in the preview
   *
   * @default ""
   */
  componentName: string;
  /**
   * The file name of the component
   */
  fileName?: string;
  /**
   * Whether to show the dashed padding guide borders around the preview
   *
   * @default true
   */
  showBorders?: boolean;
}

export const ComponentPreview = async (props: ComponentPreviewProps) => {
  const {
    componentName,
    fileName = "example-default",
    align = "center",
    showBorders,
    ...rest
  } = props;

  // Dynamically import the example component
  const Example = await import(
    `${registryPath}/${componentName}/${fileName}.tsx`
  );

  if (!Example.default) {
    throw new Error(`File ${fileName} not found`);
  }

  // Read the source code from the example file
  const sourceCode = readFileSync(
    join(process.cwd(), registryPath, componentName, `${fileName}.tsx`),
    "utf-8"
  );

  if (!Example.default) {
    throw new Error(`Component ${componentName} not found`);
  }

  return (
    <ComponentPreviewTabs
      component={<Example.default />}
      showBorders={showBorders}
      source={<ComponentSource code={sourceCode} isCollapsible={false} />}
      {...rest}
    />
  );
};
