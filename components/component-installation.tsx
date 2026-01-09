import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Step, Steps } from "fumadocs-ui/components/steps";
import type React from "react";
import { REGISTRY_PATH } from "@/config/constants";
import { SITE_CONFIG } from "@/config/site";
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import { CodeBlock } from "./code-block";

const cliCommand = `pnpm dlx shadcn@latest add ${SITE_CONFIG.url}/r`;

export interface ComponentInstallationProps
  extends React.ComponentProps<"div"> {
  /**
   * The name of the component to display in the preview
   *
   * @default ""
   */
  componentName: string;
}

export const ComponentInstallation = (props: ComponentInstallationProps) => {
  const { componentName, children, ...rest } = props;

  const sourceCode = readFileSync(
    join(process.cwd(), REGISTRY_PATH, `${componentName}.tsx`),
    "utf-8"
  );

  return (
    <div className="group not-prose flex flex-col gap-2">
      <Tabs {...rest} defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>

          <TabsIndicator />
        </TabsList>

        <div className="relative mt-4 rounded-lg **:[figure]:border-none">
          <TabsContent value="cli">
            <CodeBlock
              code={`${cliCommand}/${componentName}.json`}
              lang="bash"
            />
          </TabsContent>

          <TabsContent value="manual">
            <Steps>
              <Step>{children}</Step>

              <p>Copy and paste the following code into your project.</p>

              <Step>
                <div className="my-4 **:[div]:max-h-[650px]">
                  <CodeBlock code={sourceCode} lang="tsx" />
                </div>

                <p>Update the import paths to match your project setup.</p>
              </Step>
            </Steps>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
