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
    avatar: "https://github.com/vinihvc.png",
    email: "m@example.com",
    name: "Vinicius Vicentini",
    role: "Owner",
  },
  {
    avatar: "https://github.com/shadcn.png",
    email: "p@example.com",
    name: "Shadcn",
    role: "Developer",
  },
  {
    avatar: "https://github.com/pasqualevitiello.png",
    email: "i@example.com",
    name: "Pasquale Vitiello",
    role: "Billing",
  },
];

const collection = createListCollection({
  items: [
    {
      description: "Can view and comment.",
      value: "Viewer",
    },
    {
      description: "Can view, comment and edit.",
      value: "Developer",
    },
    {
      description: "Can view, comment and manage billing.",
      value: "Billing",
    },
    {
      description: "Admin-level access to all resources.",
      value: "Owner",
    },
  ],
});

export const TeamMembersCardExample = (props: React.ComponentProps<"div">) => (
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
