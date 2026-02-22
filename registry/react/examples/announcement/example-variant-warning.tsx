import { TriangleAlertIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementTag variant="warning">
      <TriangleAlertIcon /> Trial ending
    </AnnouncementTag>
    <AnnouncementTitle>
      Your free trial expires in 3 days. Upgrade to keep access.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
