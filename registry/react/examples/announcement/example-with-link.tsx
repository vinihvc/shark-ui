import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement asChild>
    <Link href="/">
      <AnnouncementTag>Latest update</AnnouncementTag>
      <AnnouncementTitle>
        New feature added
        <ArrowUpRight aria-hidden />
      </AnnouncementTitle>
    </Link>
  </Announcement>
);

export default Example;
