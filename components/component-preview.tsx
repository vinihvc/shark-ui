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
   * The alignment of the component
   *
   * @default "center"
   */
  align?: "start" | "center" | "end";
}

export const ComponentPreview = async (props: ComponentPreviewProps) => {
  const {
    componentName,
    fileName = "default",
    align = "center",
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

  const replacedCode = replaceContent(sourceCode);

  if (!Example.default) {
    throw new Error(`Component ${componentName} not found`);
  }

  return (
    <ComponentPreviewTabs
      align={align}
      component={<Example.default />}
      source={<ComponentSource code={replacedCode} isCollapsible={false} />}
      {...rest}
    />
  );
};

const replaceContent = (code: string) => {
  code = code.replaceAll("@/registry/react/components", "@/components/ui");
  code = code.replaceAll(/const (\w+) =/g, "export const $1 =");
  code = code.replaceAll(/export default (\w+);/g, "");
  code = code.replaceAll(/\n$/g, "");
  code = code.replaceAll(/\n$/g, "");
  code = code.replaceAll(/\n$/g, "");

  return code;
};
