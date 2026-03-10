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
