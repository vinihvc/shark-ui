import { TriangleAlertIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementTag variant="destructive">
      <TriangleAlertIcon /> Payment failed
    </AnnouncementTag>
    <AnnouncementTitle>
      Your last invoice couldn&apos;t be processed. Update your billing info.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
