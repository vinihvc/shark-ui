import { Button } from "@/registry/react/components/button";
import { Card, CardFooter, CardHeader } from "@/registry/react/components/card";
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

        <CardFooter className="mt-auto">
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
    </TabsContent>

    <TabsContent value="tab-2">
      <Card className="h-full w-sm">
        <CardHeader
          description="Update credentials and preferences"
          title="Settings"
        />

        <CardFooter className="mt-auto">
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
    </TabsContent>

    <TabsContent value="tab-3">
      <Card className="h-full w-sm">
        <CardHeader
          description="Protect your account and data"
          title="Security"
        />

        <CardFooter className="mt-auto">
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
);

export default TabsDemo;
