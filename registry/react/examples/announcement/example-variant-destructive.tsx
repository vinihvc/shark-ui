import { Badge } from "@registry/react/components/badge";
import { TriangleAlertIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <Badge variant="destructive">
      <TriangleAlertIcon /> Payment failed
    </Badge>
    <AnnouncementTitle>
      Your last invoice couldn&apos;t be processed. Update your billing info.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
