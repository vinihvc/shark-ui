import {
  Announcement,
  AnnouncementBadge,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementBadge>Release</AnnouncementBadge>
    <AnnouncementTitle>
      v2.1.0 — Dark mode, faster builds, and 12 new components
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
