import Link from "fumadocs-core/link";
import React from "react";
import {
  AccordionThumb,
  AlertDialogThumb,
  AlertThumb,
  AutocompleteThumb,
  AvatarThumb,
  BadgeThumb,
  ButtonGroupThumb,
  ButtonThumb,
  CardThumb,
  CarouselThumb,
  ChartThumb,
  CheckboxThumb,
  ClipboardThumb,
  CollapsibleThumb,
  ComboboxThumb,
  CommandThumb,
  ContextMenuThumb,
  DatePickerThumb,
  DialogThumb,
  EditableThumb,
  FieldThumb,
  FileUploadThumb,
  FloatingPanelThumb,
  HintThumb,
  HoverCardThumb,
  InputGroupThumb,
  InputOtpThumb,
  InputThumb,
  ItemThumb,
  KbdThumb,
  MarqueeThumb,
  MenuThumb,
  NativeSelectThumb,
  NumberInputThumb,
  PaginationThumb,
  PopoverThumb,
  ProgressThumb,
  ProseThumb,
  QrCodeThumb,
  RadioGroupThumb,
  RatingGroupThumb,
  ResizableThumb,
  ScrollAreaThumb,
  SelectThumb,
  SeparatorThumb,
  SheetThumb,
  SkeletonThumb,
  SliderThumb,
  SpinnerThumb,
  StepsThumb,
  SwitchThumb,
  TableThumb,
  TabsThumb,
  TextareaThumb,
  ToastThumb,
  ToggleGroupThumb,
  ToggleThumb,
  TooltipThumb,
  TourThumb,
  TreeViewThumb,
} from "@/components/thumbs";
import type { ThumbProps } from "@/components/thumbs/types";
import { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";

const THUMB_MAP: Record<string, React.ComponentType<ThumbProps>> = {
  accordion: AccordionThumb,
  "alert-dialog": AlertDialogThumb,
  alert: AlertThumb,
  autocomplete: AutocompleteThumb,
  avatar: AvatarThumb,
  badge: BadgeThumb,
  "button-group": ButtonGroupThumb,
  button: ButtonThumb,
  card: CardThumb,
  carousel: CarouselThumb,
  chart: ChartThumb,
  checkbox: CheckboxThumb,
  clipboard: ClipboardThumb,
  collapsible: CollapsibleThumb,
  combobox: ComboboxThumb,
  command: CommandThumb,
  "context-menu": ContextMenuThumb,
  datepicker: DatePickerThumb,
  dialog: DialogThumb,
  editable: EditableThumb,
  field: FieldThumb,
  "file-upload": FileUploadThumb,
  "floating-panel": FloatingPanelThumb,
  hint: HintThumb,
  "hover-card": HoverCardThumb,
  "input-group": InputGroupThumb,
  "input-otp": InputOtpThumb,
  input: InputThumb,
  item: ItemThumb,
  kbd: KbdThumb,
  marquee: MarqueeThumb,
  menu: MenuThumb,
  "native-select": NativeSelectThumb,
  "number-input": NumberInputThumb,
  pagination: PaginationThumb,
  popover: PopoverThumb,
  progress: ProgressThumb,
  prose: ProseThumb,
  "qr-code": QrCodeThumb,
  "radio-group": RadioGroupThumb,
  rating: RatingGroupThumb,
  resizable: ResizableThumb,
  "scroll-area": ScrollAreaThumb,
  select: SelectThumb,
  separator: SeparatorThumb,
  sheet: SheetThumb,
  skeleton: SkeletonThumb,
  slider: SliderThumb,
  spinner: SpinnerThumb,
  steps: StepsThumb,
  switch: SwitchThumb,
  table: TableThumb,
  tabs: TabsThumb,
  textarea: TextareaThumb,
  toast: ToastThumb,
  "toggle-group": ToggleGroupThumb,
  toggle: ToggleThumb,
  tooltip: TooltipThumb,
  tour: TourThumb,
  "tree-view": TreeViewThumb,
};

interface ComponentsListProps extends React.ComponentProps<"div"> {}

export const ComponentsList = (props: ComponentsListProps) => {
  const { className, ...rest } = props;

  const pageTree = source.pageTree;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6",
        className
      )}
      {...rest}
    >
      {pageTree.children.map((group) => (
        <React.Fragment key={group.$id}>
          {group.type === "folder" &&
            group.children.map((item) => {
              if (item.type !== "page") {
                return null;
              }

              const slug = item.url.split("/").filter(Boolean).pop() ?? "";
              const ThumbComponent = THUMB_MAP[slug];

              if (!ThumbComponent) {
                return null;
              }

              const page = source.getNodePage(item);
              const title = page?.data.title ?? slug;
              const description = page?.data.description ?? "";

              return (
                <Link
                  className={cn(
                    "flex",
                    "transition-opacity hover:opacity-90",
                    "rounded-lg",
                    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  )}
                  href={item.url}
                  key={item.url}
                >
                  <ThumbComponent description={description} title={title} />
                </Link>
              );
            })}
        </React.Fragment>
      ))}
    </div>
  );
};
