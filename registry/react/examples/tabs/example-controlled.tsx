"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => {
  const [value, setValue] = React.useState("profile");

  return (
    <div className="flex flex-col gap-4">
      <Tabs onValueChange={(e) => setValue(e.value)} value={value}>
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <p className="text-muted-foreground text-sm">
            Manage your profile information and preferences.
          </p>
        </TabsContent>

        <TabsContent value="settings">
          <p className="text-muted-foreground text-sm">
            Customize notifications, theme, and text density.
          </p>
        </TabsContent>

        <TabsContent value="security">
          <p className="text-muted-foreground text-sm">
            Update your password and security settings.
          </p>
        </TabsContent>
      </Tabs>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setValue("profile")}
        >
          Go to Profile
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setValue("settings")}
        >
          Go to Settings
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setValue("security")}
        >
          Go to Security
        </Button>
      </div>
    </div>
  );
};

export default Example;
