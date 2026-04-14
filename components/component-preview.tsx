/** biome-ignore-all lint/correctness/noConstAssign: it's ok */
/** biome-ignore-all lint/style/noParameterAssign: it's ok */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { GetRegistryItemArgs } from "@/lib/registry";
import { ComponentPreviewTabs } from "./component-preview-tabs";
import { ComponentSource } from "./component-source";

type PreviewFramework = NonNullable<GetRegistryItemArgs["framework"]>;

const exampleExtension: Record<PreviewFramework, string> = {
  react: "tsx",
  /** Plain-text snippet so Next does not typecheck or bundle Solid JSX as React. */
  solid: "solid",
};

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
   * Registry framework for the example source file (React is live-rendered; others are source-only).
   *
   * @default "react"
   */
  framework?: PreviewFramework;
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
    framework = "react",
    ...rest
  } = props;

  const ext = exampleExtension[framework];
  const examplesRoot = `registry/${framework}/examples`;
  const examplePath = join(
    /* turbopackIgnore: true */
    process.cwd(),
    examplesRoot,
    componentName,
    `${fileName}.${ext}`
  );

  const sourceCode = readFileSync(
    /* turbopackIgnore: true */
    examplePath,
    "utf-8"
  );

  if (framework === "react") {
    const Example = await import(
      `${examplesRoot}/${componentName}/${fileName}.tsx`
    );

    if (!Example.default) {
      throw new Error(`File ${fileName} not found`);
    }

    return (
      <ComponentPreviewTabs
        component={<Example.default />}
        showBorders={showBorders}
        source={<ComponentSource code={sourceCode} isCollapsible={false} />}
        {...rest}
      />
    );
  }

  const previewNote = `This documentation site only live-renders React. Below is the ${framework} example source.`;

  return (
    <ComponentPreviewTabs
      defaultTab="code"
      previewNote={previewNote}
      showBorders={showBorders}
      source={<ComponentSource code={sourceCode} isCollapsible={false} />}
      {...rest}
    />
  );
};
