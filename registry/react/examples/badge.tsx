import {
  AlertTriangle,
  Check,
  Heart,
  Info,
  Settings,
  Star,
  Trash,
} from "lucide-react";
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
    <Badge variant="outline">
      <Settings />
      Settings
    </Badge>
    <Badge variant="success">
      <Check />
      Success
    </Badge>
    <Badge asChild variant="info">
      <a href="https://example.com">
        <Info />
        Info
      </a>
    </Badge>
    <Badge variant="warning">
      <AlertTriangle />
      Warning
    </Badge>

    <Badge variant="destructive">
      <Trash />
      Delete
    </Badge>
  </div>
);

export default BadgeDemo;
