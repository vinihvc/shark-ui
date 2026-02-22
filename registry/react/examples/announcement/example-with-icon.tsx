import { ArrowUpRight, SparklesIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementTag variant="info">
      <SparklesIcon aria-hidden />
      New feature
    </AnnouncementTag>
    <AnnouncementTitle>
      Dark mode and 12 new components available
      <ArrowUpRight aria-hidden />
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
