import { ArrowUpRight, SparklesIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementBadge,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementBadge variant="info">
      <SparklesIcon aria-hidden />
      New features
    </AnnouncementBadge>
    <AnnouncementTitle>
      Dark mode and 12 new components available
      <ArrowUpRight aria-hidden />
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
