import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const TabsDemo = () => (
  <Tabs defaultValue="tab-1">
    <TabsList>
      <TabsTrigger value="tab-1">Profile</TabsTrigger>
      <TabsTrigger value="tab-2">Settings</TabsTrigger>
      <TabsTrigger value="tab-3">Security</TabsTrigger>
    </TabsList>

    <TabsContent value="tab-1">
      <Card className="h-full w-sm">
        <CardHeader
          description="Manage your profile information"
          title="Profile"
        />

        <CardContent className="text-muted-foreground text-sm">
          View you shared information here, update you profile name, picture and
          email.
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="tab-2">
      <Card className="h-full w-sm">
        <CardHeader description="Update your preferences" title="Settings" />

        <CardContent className="text-muted-foreground text-sm">
          Customize how to handle notifications, update the theme and text
          density.
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="tab-3">
      <Card className="h-full w-sm">
        <CardHeader
          description="Protect your account and data"
          title="Security"
        />
        <CardContent className="text-muted-foreground text-sm">
          Update your security settings here, change your password and more.
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
);

export default TabsDemo;
