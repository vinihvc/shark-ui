import { ArrowUpRightIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementTitle>
      New features added, check the logs for more details.
      <ArrowUpRightIcon />
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
