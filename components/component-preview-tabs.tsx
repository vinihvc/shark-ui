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
   * The alignment of the component
   *
   * @default "center"
   */
  align?: "center" | "start" | "end";
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
  const { className, align = "center", component, source, ...rest } = props;

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

        <div
          className={cn(
            "relative",
            "rounded-lg border"
            // "**:data-[slot=preview]:w-full sm:**:data-[slot=preview]:max-w-[80%]"
          )}
        >
          <TabsContent value="preview">
            <div
              className={cn(
                "flex h-[450px] w-full justify-center overflow-y-auto p-10 data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center max-sm:px-6"
              )}
              data-align={align}
            >
              <div data-slot="preview">{component}</div>
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
