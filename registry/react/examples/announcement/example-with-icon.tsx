import { Badge } from "@registry/react/components/badge";
import { ArrowUpRight, SparklesIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <Badge variant="info">
      <SparklesIcon aria-hidden />
      New features
    </Badge>
    <AnnouncementTitle>
      Dark mode and 12 new components available
      <ArrowUpRight aria-hidden />
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
