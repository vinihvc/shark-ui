import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => (
  <Tabs defaultValue="tab-1">
    <TabsList>
      <TabsTrigger value="tab-1">Profile</TabsTrigger>
      <TabsTrigger disabled value="tab-2">
        Settings
      </TabsTrigger>
    </TabsList>
    <TabsContent
      className="p-4 text-center text-muted-foreground text-xs"
      value="tab-1"
    >
      Profile content
    </TabsContent>
    <TabsContent
      className="p-4 text-center text-muted-foreground text-xs"
      value="tab-2"
    >
      Settings content
    </TabsContent>
  </Tabs>
);

export default Example;
