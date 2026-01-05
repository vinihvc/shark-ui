"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import { Input } from "@/registry/react/components/input";
import {
  createCollection,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import { Separator } from "@/registry/react/components/separator";

const collection = createCollection({
  items: [
    {
      value: "edit",
      label: "Can edit",
    },
    {
      value: "view",
      label: "Can view",
    },
  ],
});

export const CardsShare = () => (
  <Card>
    <CardHeader
      description="Anyone with the link can view this document."
      title="Share this document"
    />

    <CardContent>
      <div className="flex space-x-2">
        <Input readOnly value="http://example.com/link/to/document" />
        <Button className="shrink-0" variant="secondary">
          Copy Link
        </Button>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="font-medium text-sm">People with access</div>
        <div className="grid gap-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/03.png" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">m@example.com</p>
              </div>
            </div>
            <Select collection={collection} defaultValue={["edit"]}>
              <SelectTrigger className="ml-auto w-[110px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {collection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/05.png" />
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm leading-none">
                  Isabella Nguyen
                </p>
                <p className="text-muted-foreground text-sm">b@example.com</p>
              </div>
            </div>
            <Select collection={collection} defaultValue={["view"]}>
              <SelectTrigger className="ml-auto w-[110px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {collection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm leading-none">Sofia Davis</p>
                <p className="text-muted-foreground text-sm">p@example.com</p>
              </div>
            </div>
            <Select collection={collection} defaultValue={["view"]}>
              <SelectTrigger className="ml-auto w-[110px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {collection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
