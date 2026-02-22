import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementTag variant="info">Maintenance</AnnouncementTag>
    <AnnouncementTitle>
      Scheduled downtime tonight 2–4 AM UTC. No action needed.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
