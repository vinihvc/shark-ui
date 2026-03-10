import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  Announcement,
  AnnouncementBadge,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement asChild>
    <Link href="/">
      <AnnouncementBadge>Latest update</AnnouncementBadge>
      <AnnouncementTitle>
        New feature added
        <ArrowUpRight aria-hidden />
      </AnnouncementTitle>
    </Link>
  </Announcement>
);

export default Example;
