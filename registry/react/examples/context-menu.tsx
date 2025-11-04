import {
  Archive,
  ArchiveX,
  Bell,
  CirclePlus,
  FolderInput,
  MailX,
  Reply,
  ReplyAll,
  Send,
  SquarePen,
  Trash,
  Trash2,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const ContextMenuDemo = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex items-center justify-center rounded-md border-2 border-dashed p-10">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuGroup>
        <ContextMenuItem value="forward">
          <Send /> Forward
          <ContextMenuShortcut>⇧⌘F</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem value="reply">
          <Reply /> Reply
          <ContextMenuShortcut>⇧⌘R</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem value="reply-all">
          <ReplyAll /> Reply all
          <ContextMenuShortcut>⇧⌘A</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem value="archive">
          <Archive /> Archive
          <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <FolderInput /> Move to
          </ContextMenuSubTrigger>

          <ContextMenuSubContent>
            <ContextMenuItem value="move-to-folder-1">
              <ArchiveX /> Junk
            </ContextMenuItem>

            <ContextMenuItem value="move-to-folder-2">
              <Trash /> Trash
            </ContextMenuItem>

            <ContextMenuItem value="move-to-folder-3">
              <Bell /> Reminders
            </ContextMenuItem>

            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <CirclePlus />
                More
              </ContextMenuSubTrigger>

              <ContextMenuSubContent>
                <ContextMenuItem value="move-to-folder-4">
                  <SquarePen />
                  Drafts
                </ContextMenuItem>
                <ContextMenuItem value="move-to-folder-6">
                  <MailX />
                  Spam
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuSeparator />
        <ContextMenuItem value="delete" variant="destructive">
          <Trash2 /> Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
);

export default ContextMenuDemo;
