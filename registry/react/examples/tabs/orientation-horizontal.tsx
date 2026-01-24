import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => (
  <Tabs defaultValue="tab-1">
    <TabsList>
      <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
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
