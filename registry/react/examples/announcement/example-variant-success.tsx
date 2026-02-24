import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import {
  Announcement,
  AnnouncementBadge,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement asChild>
    <Link href="/logs">
      <AnnouncementBadge variant="success">
        <CheckCircleIcon /> Deployed
      </AnnouncementBadge>
      <AnnouncementTitle>
        Production build completed in 2m 34s <ArrowUpRightIcon />
      </AnnouncementTitle>
    </Link>
  </Announcement>
);

export default Example;
