import { TriangleAlertIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementBadge,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementBadge variant="destructive">
      <TriangleAlertIcon /> Payment failed
    </AnnouncementBadge>
    <AnnouncementTitle>
      Your last invoice couldn&apos;t be processed. Update your billing info.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
