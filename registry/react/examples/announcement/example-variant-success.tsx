import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement asChild>
    <Link href="/logs">
      <AnnouncementTag variant="success">
        <CheckCircleIcon /> Deployed
      </AnnouncementTag>
      <AnnouncementTitle>
        Production build completed in 2m 34s <ArrowUpRightIcon />
      </AnnouncementTitle>
    </Link>
  </Announcement>
);

export default Example;
