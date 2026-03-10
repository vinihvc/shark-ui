import { TriangleAlertIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementBadge,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementBadge variant="warning">
      <TriangleAlertIcon /> Trial ending
    </AnnouncementBadge>
    <AnnouncementTitle>
      Your free trial expires in 3 days. Upgrade to keep access.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
