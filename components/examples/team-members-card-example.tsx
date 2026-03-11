"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const teamMembers = [
  {
    name: "Vinicius Vicentini",
    email: "m@example.com",
    avatar: "https://github.com/vinihvc.png",
    role: "Owner",
  },
  {
    name: "Shadcn",
    email: "p@example.com",
    avatar: "https://github.com/shadcn.png",
    role: "Developer",
  },
  {
    name: "Pasquale Vitiello",
    email: "i@example.com",
    avatar: "https://github.com/pasqualevitiello.png",
    role: "Billing",
  },
];

const collection = createListCollection({
  items: [
    {
      value: "Viewer",
      description: "Can view and comment.",
    },
    {
      value: "Developer",
      description: "Can view, comment and edit.",
    },
    {
      value: "Billing",
      description: "Can view, comment and manage billing.",
    },
    {
      value: "Owner",
      description: "Admin-level access to all resources.",
    },
  ],
});

export const TeamMembersCardExample = (props: React.ComponentProps<"div">) => {
  return (
    <Card className="gap-4" {...props}>
      <CardHeader
        description="Invite your team members to collaborate."
        title="Team Members"
      />

      <CardContent>
        {teamMembers.map((member) => (
          <Item className="gap-4 px-0" key={member.name}>
            <Avatar className="shrink-0 self-start border">
              <AvatarImage alt="Image" src={member.avatar} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <ItemContent>
              <ItemTitle>{member.name}</ItemTitle>
              <ItemDescription>{member.email}</ItemDescription>
            </ItemContent>

            <ItemActions>
              <Select collection={collection} defaultValue={[member.role]}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role..." />
                </SelectTrigger>

                <SelectContent>
                  {collection.items.map((role) => (
                    <SelectItem item={role} key={role.value}>
                      <div className="flex flex-col">
                        <p className="font-medium text-sm">{role.value}</p>
                        <p className="text-muted-foreground">
                          {role.description}
                        </p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </ItemActions>
          </Item>
        ))}
      </CardContent>
    </Card>
  );
};
