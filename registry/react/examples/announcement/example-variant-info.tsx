import { Badge } from "@registry/react/components/badge";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <Badge variant="info">Maintenance</Badge>
    <AnnouncementTitle>
      Scheduled downtime tonight 2–4 AM UTC. No action needed.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
