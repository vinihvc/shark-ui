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
   * Whether to show the dashed padding guide borders around the preview
   *
   * @default true
   */
  showBorders?: boolean;
  /**
   * The source code to display in the preview
   *
   */
  source: React.ReactNode;
}

export const ComponentPreviewTabs = (props: ComponentPreviewTabsProps) => {
  const { component, source, showBorders = true, className, ...rest } = props;

  return (
    <div
      className={cn("group relative mt-4 mb-12 flex flex-col gap-2", className)}
      {...rest}
    >
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <div className={cn("relative", "overflow-hidden rounded-2xl border")}>
          <TabsContent value="preview">
            <div
              className={cn(
                "relative flex h-[450px] w-full items-center justify-center overflow-y-auto p-4 sm:p-10"
              )}
            >
              {showBorders && (
                <>
                  <div className="absolute inset-x-0 top-4 border border-border/64 border-dashed max-sm:hidden sm:top-8" />
                  <div className="absolute inset-x-0 bottom-4 border border-border/64 border-dashed max-sm:hidden sm:bottom-8" />
                  <div className="absolute inset-s-4 inset-y-0 border border-border/64 border-dashed max-sm:hidden sm:inset-s-8" />
                  <div className="absolute inset-e-4 inset-y-0 border border-border/64 border-dashed max-sm:hidden sm:inset-e-8" />
                </>
              )}
              {component}
            </div>
          </TabsContent>

          <TabsContent value="code">
            <div
              className="overflow-hidden **:[figure]:m-0! **:[figure]:border-0 **:[pre]:min-h-[450px]"
              data-slot="code"
            >
              {source}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
