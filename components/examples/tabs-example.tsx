import { Tabs, TabsList, TabsTrigger } from "@/registry/react/components/tabs";

export const TabsExample = () => (
  <Tabs defaultValue="tab-1">
    <TabsList>
      <TabsTrigger value="tab-1">Profile</TabsTrigger>
      <TabsTrigger value="tab-2">Settings</TabsTrigger>
      <TabsTrigger value="tab-3">Security</TabsTrigger>
    </TabsList>
  </Tabs>
);
