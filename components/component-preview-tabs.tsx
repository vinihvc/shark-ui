import type React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

interface ComponentPreviewTabsProps extends React.ComponentProps<"div"> {
  /**
   * The component to display in the preview
   *
   */
  component: React.ReactNode;
  /**
   * The source code to display in the preview
   *
   */
  source: React.ReactNode;
}

export function ComponentPreviewTabs(props: ComponentPreviewTabsProps) {
  const { className, component, source, ...rest } = props;

  return (
    <div
      className={cn("group relative mt-4 mb-12 flex flex-col gap-2", className)}
      {...rest}
    >
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger className="rounded-lg" value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger className="rounded-lg" value="code">
            Code
          </TabsTrigger>
        </TabsList>

        <div className={cn("relative", "rounded-lg border")}>
          <TabsContent value="preview">
            <div
              className={cn(
                "flex h-[450px] w-full items-center justify-center overflow-y-auto p-10 max-sm:px-6"
              )}
            >
              {component}
            </div>
          </TabsContent>

          <TabsContent value="code">
            <div
              className="overflow-hidden **:[figure]:m-0! **:[figure]:border-0 **:[figure]:bg-muted **:[pre]:h-[450px]"
              data-slot="code"
            >
              {source}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
