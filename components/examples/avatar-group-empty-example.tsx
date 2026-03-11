import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";

export const AvatarGroupEmptyExample = () => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4">
        <AvatarGroup>
          <Avatar>
            <AvatarImage alt="User" src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage alt="User" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <div className="text-center">
          <h3 className="font-medium">No Team Members</h3>
          <p className="text-muted-foreground text-sm">
            Invite your team to collaborate on this project.
          </p>
        </div>
        <Button tabIndex={-1}>
          <PlusIcon />
          Invite Members
        </Button>
      </CardContent>
    </Card>
  );
};
