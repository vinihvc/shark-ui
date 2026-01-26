import { Tabs, TabsList, TabsTrigger } from "@/registry/react/components/tabs";

interface ComponentVariantsProps extends React.ComponentProps<typeof Tabs> {
  /**
   * The variants to display
   */
  variants: string[];
}

export const ComponentVariants = (props: ComponentVariantsProps) => {
  const { variants, children, ...rest } = props;

  return (
    <Tabs defaultValue={variants.at(0)} {...rest}>
      <TabsList>
        {variants.map((variant) => (
          <TabsTrigger className="capitalize" key={variant} value={variant}>
            {variant}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex flex-col items-center justify-center rounded-md border p-10">
        {children}
      </div>
    </Tabs>
  );
};
