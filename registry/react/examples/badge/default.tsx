import { Star } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";

const BadgeDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>
      <Star />
      Favorite
    </Badge>
  </div>
);

export default BadgeDemo;
