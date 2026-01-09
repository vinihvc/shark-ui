import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

interface ComponentVariantsProps extends React.ComponentProps<typeof Tabs> {
  /**
   * The variants to display
   */
  variants: string[];
}

export const ComponentVariants = (props: ComponentVariantsProps) => {
  const { variants, className, children, ...rest } = props;

  return (
    <Tabs
      className={cn("not-prose", className)}
      defaultValue={variants.at(0)}
      {...rest}
    >
      <TabsList>
        {variants.map((variant) => (
          <TabsTrigger className="capitalize" key={variant} value={variant}>
            {variant}

            <TabsIndicator />
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex flex-col items-center justify-center rounded-md border p-10">
        {children}
      </div>
    </Tabs>
  );
};
