import { Tabs, TabsList, TabsTrigger } from "@/registry/react/components/tabs";

export const TabsExample = () => {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsTrigger tabIndex={-1} value="tab-1">
          Profile
        </TabsTrigger>
        <TabsTrigger tabIndex={-1} value="tab-2">
          Settings
        </TabsTrigger>
        <TabsTrigger tabIndex={-1} value="tab-3">
          Security
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
