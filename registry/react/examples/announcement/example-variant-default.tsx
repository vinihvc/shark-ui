import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <AnnouncementTag variant="default">Release</AnnouncementTag>
    <AnnouncementTitle>
      v2.1.0 — Dark mode, faster builds, and 12 new components
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
