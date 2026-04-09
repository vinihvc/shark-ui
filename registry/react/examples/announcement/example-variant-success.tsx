import { Badge } from "@registry/react/components/badge";
import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement asChild>
    <Link href="#">
      <Badge variant="success">
        <CheckCircleIcon /> Deployed
      </Badge>
      <AnnouncementTitle>
        Production build completed in 2m 34s <ArrowUpRightIcon />
      </AnnouncementTitle>
    </Link>
  </Announcement>
);

export default Example;
