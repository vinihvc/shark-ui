import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => (
  <Tabs defaultValue="tab-1">
    <TabsList variant="underline">
      <TabsTrigger value="tab-1">Profile</TabsTrigger>
      <TabsTrigger value="tab-2">Settings</TabsTrigger>
      <TabsTrigger value="tab-3">Security</TabsTrigger>
    </TabsList>

    <TabsContent value="tab-1">
      <p className="p-4 text-center text-muted-foreground text-xs">Content 1</p>
    </TabsContent>

    <TabsContent value="tab-2">
      <p className="p-4 text-center text-muted-foreground text-xs">Content 2</p>
    </TabsContent>

    <TabsContent value="tab-3">
      <p className="p-4 text-center text-muted-foreground text-xs">Content 3</p>
    </TabsContent>
  </Tabs>
);

export default Example;
