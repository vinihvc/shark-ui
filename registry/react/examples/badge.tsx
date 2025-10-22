import { Heart, Settings, Star, Trash } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";

const BadgeDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>
      <Star />
      Favorite
    </Badge>
    <Badge variant="secondary">
      <Heart />
      Like
    </Badge>
    <Badge variant="destructive">
      <Trash />
      Delete
    </Badge>
    <Badge variant="outline">
      <Settings />
      Settings
    </Badge>
  </div>
);

export default BadgeDemo;
