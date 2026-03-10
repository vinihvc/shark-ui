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
    <TabsContent
      className="p-4 text-center text-muted-foreground text-xs"
      value="tab-1"
    >
      Content 1
    </TabsContent>

    <TabsContent
      className="p-4 text-center text-muted-foreground text-xs"
      value="tab-2"
    >
      Content 2
    </TabsContent>

    <TabsContent
      className="p-4 text-center text-muted-foreground text-xs"
      value="tab-3"
    >
      Content 3
    </TabsContent>
  </Tabs>
);

export default Example;
