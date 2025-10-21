import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import { Button } from "../components/button";
import { Card, CardContent, CardFooter, CardHeader } from "../components/card";

const TabsDemo = () => (
  <Tabs className="size-full" defaultValue="1">
    <TabsList>
      <TabsTrigger value="1">Profile</TabsTrigger>
      <TabsTrigger value="2">Settings</TabsTrigger>
      <TabsTrigger value="3">Security</TabsTrigger>
      <TabsIndicator />
    </TabsList>

    <TabsContent value="1">
      <Card className="h-full w-sm">
        <CardHeader
          description="You can view and manage your profile information here."
          title="Profile"
        />
        <CardContent>
          You can view and manage your profile information here.
        </CardContent>

        <CardFooter className="mt-auto">
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
    </TabsContent>

    <TabsContent value="2">
      <Card className="h-full w-sm">
        <CardHeader
          description="You can view and manage your settings here."
          title="Settings"
        />
        <CardContent>You can view and manage your settings here.</CardContent>

        <CardFooter className="mt-auto">
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
    </TabsContent>

    <TabsContent value="3">
      <Card className="h-full w-sm">
        <CardHeader
          description="You can view and manage your security settings here."
          title="Security"
        />
        <CardContent>
          You can view and manage your security settings here.
        </CardContent>

        <CardFooter className="mt-auto">
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
);

export default TabsDemo;
