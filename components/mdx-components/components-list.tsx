import Link from "next/link";
import React from "react";
import { AccordionThumb } from "@/components/thumbs/accordion";
import { ActionBarThumb } from "@/components/thumbs/action-bar";
import { AlertThumb } from "@/components/thumbs/alert";
import { AlertDialogThumb } from "@/components/thumbs/alert-dialog";
import { AngleSliderThumb } from "@/components/thumbs/angle-slider";
import { AnnouncementThumb } from "@/components/thumbs/announcement";
import { AspectRatioThumb } from "@/components/thumbs/aspect-ratio";
import { AutocompleteThumb } from "@/components/thumbs/autocomplete";
import { AvatarThumb } from "@/components/thumbs/avatar";
import { BadgeThumb } from "@/components/thumbs/badge";
import { BottomNavigationThumb } from "@/components/thumbs/bottom-navigation";
import { BreadcrumbThumb } from "@/components/thumbs/breadcrumb";
import { ButtonThumb } from "@/components/thumbs/button";
import { ButtonGroupThumb } from "@/components/thumbs/button-group";
import { CalendarThumb } from "@/components/thumbs/calendar";
import { CardThumb } from "@/components/thumbs/card";
import { CarouselThumb } from "@/components/thumbs/carousel";
import { ChartThumb } from "@/components/thumbs/chart";
import { CheckboxThumb } from "@/components/thumbs/checkbox";
import { ClipboardThumb } from "@/components/thumbs/clipboard";
import { CollapsibleThumb } from "@/components/thumbs/collapsible";
import { ColorPickerThumb } from "@/components/thumbs/color-picker";
import { ComboboxThumb } from "@/components/thumbs/combobox";
import { CommandThumb } from "@/components/thumbs/command";
import { ContextMenuThumb } from "@/components/thumbs/context-menu";
import { DataListThumb } from "@/components/thumbs/data-list";
import { DatePickerThumb } from "@/components/thumbs/date-picker";
import { DialogThumb } from "@/components/thumbs/dialog";
import { DrawerThumb } from "@/components/thumbs/drawer";
import { EditableThumb } from "@/components/thumbs/editable";
import { FieldThumb } from "@/components/thumbs/field";
import { FileUploadThumb } from "@/components/thumbs/file-upload";
import { FloatThumb } from "@/components/thumbs/float";
import { FloatingPanelThumb } from "@/components/thumbs/floating-panel";
import { FrameThumb } from "@/components/thumbs/frame";
import { HintThumb } from "@/components/thumbs/hint";
import { HoverCardThumb } from "@/components/thumbs/hover-card";
import { ImageCropperThumb } from "@/components/thumbs/image-cropper";
import { InputThumb } from "@/components/thumbs/input";
import { InputGroupThumb } from "@/components/thumbs/input-group";
import { InputOtpThumb } from "@/components/thumbs/input-otp";
import { ItemThumb } from "@/components/thumbs/item";
import { KbdThumb } from "@/components/thumbs/kbd";
import { LinkOverlayThumb } from "@/components/thumbs/link-overlay";
import { ListboxThumb } from "@/components/thumbs/listbox";
import { MarqueeThumb } from "@/components/thumbs/marquee";
import { MenuThumb } from "@/components/thumbs/menu";
import { NativeSelectThumb } from "@/components/thumbs/native-select";
import { NumberInputThumb } from "@/components/thumbs/number-input";
import { PaginationThumb } from "@/components/thumbs/pagination";
import { PopoverThumb } from "@/components/thumbs/popover";
import { ProgressThumb } from "@/components/thumbs/progress";
import { ProseThumb } from "@/components/thumbs/prose";
import { QrCodeThumb } from "@/components/thumbs/qr-code";
import { RadioGroupThumb } from "@/components/thumbs/radio-group";
import { RatingGroupThumb } from "@/components/thumbs/rating-group";
import { ResizableThumb } from "@/components/thumbs/resizable";
import { ScrollAreaThumb } from "@/components/thumbs/scroll-area";
import { SegmentGroupThumb } from "@/components/thumbs/segment-group";
import { SelectThumb } from "@/components/thumbs/select";
import { SeparatorThumb } from "@/components/thumbs/separator";
import { SheetThumb } from "@/components/thumbs/sheet";
import { SidebarThumb } from "@/components/thumbs/sidebar";
import { SignaturePadThumb } from "@/components/thumbs/signature-pad";
import { SkeletonThumb } from "@/components/thumbs/skeleton";
import { SkipNavThumb } from "@/components/thumbs/skip-nav";
import { SliderThumb } from "@/components/thumbs/slider";
import { SpinnerThumb } from "@/components/thumbs/spinner";
import { StatusThumb } from "@/components/thumbs/status";
import { StepsThumb } from "@/components/thumbs/steps";
import { SwitchThumb } from "@/components/thumbs/switch";
import { TableThumb } from "@/components/thumbs/table";
import { TabsThumb } from "@/components/thumbs/tabs";
import { TextareaThumb } from "@/components/thumbs/textarea";
import type { ThumbCardProps } from "@/components/thumbs/thumb-card";
import { TimerThumb } from "@/components/thumbs/timer";
import { ToastThumb } from "@/components/thumbs/toast";
import { ToggleThumb } from "@/components/thumbs/toggle";
import { ToggleGroupThumb } from "@/components/thumbs/toggle-group";
import { ToggleTooltipThumb } from "@/components/thumbs/toggle-tooltip";
import { TooltipThumb } from "@/components/thumbs/tooltip";
import { TourThumb } from "@/components/thumbs/tour";
import { TreeViewThumb } from "@/components/thumbs/tree-view";
import { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";

const THUMB_MAP: Record<string, React.ComponentType<ThumbCardProps>> = {
  accordion: AccordionThumb,
  "action-bar": ActionBarThumb,
  "alert-dialog": AlertDialogThumb,
  "angle-slider": AngleSliderThumb,
  announcement: AnnouncementThumb,
  alert: AlertThumb,
  "aspect-ratio": AspectRatioThumb,
  autocomplete: AutocompleteThumb,
  avatar: AvatarThumb,
  badge: BadgeThumb,
  breadcrumb: BreadcrumbThumb,
  "bottom-navigation": BottomNavigationThumb,
  "button-group": ButtonGroupThumb,
  button: ButtonThumb,
  card: CardThumb,
  carousel: CarouselThumb,
  chart: ChartThumb,
  checkbox: CheckboxThumb,
  clipboard: ClipboardThumb,
  collapsible: CollapsibleThumb,
  "color-picker": ColorPickerThumb,
  combobox: ComboboxThumb,
  command: CommandThumb,
  "context-menu": ContextMenuThumb,
  "data-list": DataListThumb,
  "date-picker": DatePickerThumb,
  calendar: CalendarThumb,
  dialog: DialogThumb,
  drawer: DrawerThumb,
  editable: EditableThumb,
  field: FieldThumb,
  "file-upload": FileUploadThumb,
  float: FloatThumb,
  "floating-panel": FloatingPanelThumb,
  frame: FrameThumb,
  hint: HintThumb,
  "hover-card": HoverCardThumb,
  "image-cropper": ImageCropperThumb,
  "input-group": InputGroupThumb,
  "input-otp": InputOtpThumb,
  input: InputThumb,
  item: ItemThumb,
  kbd: KbdThumb,
  "link-overlay": LinkOverlayThumb,
  listbox: ListboxThumb,
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
  "segment-group": SegmentGroupThumb,
  select: SelectThumb,
  separator: SeparatorThumb,
  "signature-pad": SignaturePadThumb,
  sheet: SheetThumb,
  sidebar: SidebarThumb,
  skeleton: SkeletonThumb,
  "skip-nav": SkipNavThumb,
  slider: SliderThumb,
  spinner: SpinnerThumb,
  status: StatusThumb,
  steps: StepsThumb,
  switch: SwitchThumb,
  table: TableThumb,
  tabs: TabsThumb,
  textarea: TextareaThumb,
  timer: TimerThumb,
  toast: ToastThumb,
  "toggle-group": ToggleGroupThumb,
  toggle: ToggleThumb,
  "toggle-tooltip": ToggleTooltipThumb,
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
                    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
