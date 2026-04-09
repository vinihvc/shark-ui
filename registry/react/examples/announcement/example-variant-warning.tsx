import { Badge } from "@registry/react/components/badge";
import { TriangleAlertIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <Badge variant="warning">
      <TriangleAlertIcon /> Trial ending
    </Badge>
    <AnnouncementTitle>
      Your free trial expires in 3 days. Upgrade to keep access.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
