import Link from "next/link";
import React from "react";
import { AccordionThumb } from "@/components/thumbs/accordion";
import { ActionBarThumb } from "@/components/thumbs/action-bar";
import { AlertThumb } from "@/components/thumbs/alert";
import { AlertDialogThumb } from "@/components/thumbs/alert-dialog";
import { AnnouncementThumb } from "@/components/thumbs/announcement";
import { ApprovalCardThumb } from "@/components/thumbs/approval-card";
import { AspectRatioThumb } from "@/components/thumbs/aspect-ratio";
import { AttachmentThumb } from "@/components/thumbs/attachment";
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
import { CircularProgressThumb } from "@/components/thumbs/circular-progress";
import { CircularSliderThumb } from "@/components/thumbs/circular-slider";
import { ClipboardThumb } from "@/components/thumbs/clipboard";
import { CodeBlockThumb } from "@/components/thumbs/code-block";
import { CollapsibleThumb } from "@/components/thumbs/collapsible";
import { ColorPickerThumb } from "@/components/thumbs/color-picker";
import { ComboboxThumb } from "@/components/thumbs/combobox";
import { CommandThumb } from "@/components/thumbs/command";
import { ContextThumb } from "@/components/thumbs/context";
import { ContextMenuThumb } from "@/components/thumbs/context-menu";
import { DataListThumb } from "@/components/thumbs/data-list";
import { DateInputThumb } from "@/components/thumbs/date-input";
import { DatePickerThumb } from "@/components/thumbs/date-picker";
import { DialogThumb } from "@/components/thumbs/dialog";
import { DiffThumb } from "@/components/thumbs/diff";
import { DrawerThumb } from "@/components/thumbs/drawer";
import { EditableThumb } from "@/components/thumbs/editable";
import { FieldThumb } from "@/components/thumbs/field";
import { FileThumbnailThumb } from "@/components/thumbs/file-thumbnail";
import { FileUploadThumb } from "@/components/thumbs/file-upload";
import { FloatThumb } from "@/components/thumbs/float";
import { FloatingPanelThumb } from "@/components/thumbs/floating-panel";
import { FrameThumb } from "@/components/thumbs/frame";
import { HintThumb } from "@/components/thumbs/hint";
import { HoverCardThumb } from "@/components/thumbs/hover-card";
import { ImageCropperThumb } from "@/components/thumbs/image-cropper";
import { InputThumb } from "@/components/thumbs/input";
import { InputGroupThumb } from "@/components/thumbs/input-group";
import { InputOTPThumb } from "@/components/thumbs/input-otp";
import { ItemThumb } from "@/components/thumbs/item";
import { KbdThumb } from "@/components/thumbs/kbd";
import { LinkOverlayThumb } from "@/components/thumbs/link-overlay";
import { ListboxThumb } from "@/components/thumbs/listbox";
import { MarkerThumb } from "@/components/thumbs/marker";
import { MarqueeThumb } from "@/components/thumbs/marquee";
import { MenuThumb } from "@/components/thumbs/menu";
import { MessageThumb } from "@/components/thumbs/message";
import { MessageBubbleThumb } from "@/components/thumbs/message-bubble";
import { MessageScrollerThumb } from "@/components/thumbs/message-scroller";
import { ModelSelectorThumb } from "@/components/thumbs/model-selector";
import { NativeSelectThumb } from "@/components/thumbs/native-select";
import { NavigationMenuThumb } from "@/components/thumbs/navigation-menu";
import { NumberInputThumb } from "@/components/thumbs/number-input";
import { PaginationThumb } from "@/components/thumbs/pagination";
import { PasswordInputThumb } from "@/components/thumbs/password-input";
import { PlanThumb } from "@/components/thumbs/plan";
import { PopoverThumb } from "@/components/thumbs/popover";
import { ProgressThumb } from "@/components/thumbs/progress";
import { PromptInputThumb } from "@/components/thumbs/prompt-input";
import { ProseThumb } from "@/components/thumbs/prose";
import { QrCodeThumb } from "@/components/thumbs/qr-code";
import { QuestionnaireThumb } from "@/components/thumbs/questionnaire";
import { QueueThumb } from "@/components/thumbs/queue";
import { RadioGroupThumb } from "@/components/thumbs/radio-group";
import { RatingGroupThumb } from "@/components/thumbs/rating";
import { ReasoningThumb } from "@/components/thumbs/reasoning";
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
import { SourcesThumb } from "@/components/thumbs/sources";
import { SpeechInputThumb } from "@/components/thumbs/speech-input";
import { SpinnerThumb } from "@/components/thumbs/spinner";
import { StateThumb } from "@/components/thumbs/state";
import { StatusThumb } from "@/components/thumbs/status";
import { StepsThumb } from "@/components/thumbs/steps";
import { SuggestionThumb } from "@/components/thumbs/suggestion";
import { SwitchThumb } from "@/components/thumbs/switch";
import { TableThumb } from "@/components/thumbs/table";
import { TabsThumb } from "@/components/thumbs/tabs";
import { TagsInputThumb } from "@/components/thumbs/tags-input";
import { TaskThumb } from "@/components/thumbs/task";
import { TerminalThumb } from "@/components/thumbs/terminal";
import { TextareaThumb } from "@/components/thumbs/textarea";
import type { ThumbCardProps } from "@/components/thumbs/thumb-card";
import { TimerThumb } from "@/components/thumbs/timer";
import { ToastThumb } from "@/components/thumbs/toast";
import { TocThumb } from "@/components/thumbs/toc";
import { ToggleThumb } from "@/components/thumbs/toggle";
import { ToggleGroupThumb } from "@/components/thumbs/toggle-group";
import { ToggleTooltipThumb } from "@/components/thumbs/toggle-tooltip";
import { ToolResultThumb } from "@/components/thumbs/tool-result";
import { TooltipThumb } from "@/components/thumbs/tooltip";
import { TourThumb } from "@/components/thumbs/tour";
import { TreeViewThumb } from "@/components/thumbs/tree-view";
import { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";

const THUMB_MAP: Record<string, React.ComponentType<ThumbCardProps>> = {
  accordion: AccordionThumb,
  "action-bar": ActionBarThumb,
  alert: AlertThumb,
  "alert-dialog": AlertDialogThumb,
  announcement: AnnouncementThumb,
  "approval-card": ApprovalCardThumb,
  "aspect-ratio": AspectRatioThumb,
  attachment: AttachmentThumb,
  autocomplete: AutocompleteThumb,
  avatar: AvatarThumb,
  badge: BadgeThumb,
  "bottom-navigation": BottomNavigationThumb,
  breadcrumb: BreadcrumbThumb,
  button: ButtonThumb,
  "button-group": ButtonGroupThumb,
  calendar: CalendarThumb,
  card: CardThumb,
  carousel: CarouselThumb,
  chart: ChartThumb,
  checkbox: CheckboxThumb,
  "circular-progress": CircularProgressThumb,
  "circular-slider": CircularSliderThumb,
  clipboard: ClipboardThumb,
  "code-block": CodeBlockThumb,
  collapsible: CollapsibleThumb,
  "color-picker": ColorPickerThumb,
  combobox: ComboboxThumb,
  command: CommandThumb,
  context: ContextThumb,
  "context-menu": ContextMenuThumb,
  "data-list": DataListThumb,
  "data-table": TableThumb,
  "date-input": DateInputThumb,
  "date-picker": DatePickerThumb,
  dialog: DialogThumb,
  diff: DiffThumb,
  drawer: DrawerThumb,
  editable: EditableThumb,
  field: FieldThumb,
  "file-thumbnail": FileThumbnailThumb,
  "file-upload": FileUploadThumb,
  float: FloatThumb,
  "floating-panel": FloatingPanelThumb,
  frame: FrameThumb,
  hint: HintThumb,
  "hover-card": HoverCardThumb,
  "image-cropper": ImageCropperThumb,
  input: InputThumb,
  "input-group": InputGroupThumb,
  "input-otp": InputOTPThumb,
  item: ItemThumb,
  kbd: KbdThumb,
  "link-overlay": LinkOverlayThumb,
  listbox: ListboxThumb,
  marker: MarkerThumb,
  marquee: MarqueeThumb,
  menu: MenuThumb,
  message: MessageThumb,
  "message-bubble": MessageBubbleThumb,
  "message-scroller": MessageScrollerThumb,
  "model-selector": ModelSelectorThumb,
  "native-select": NativeSelectThumb,
  "navigation-menu": NavigationMenuThumb,
  "number-input": NumberInputThumb,
  pagination: PaginationThumb,
  "password-input": PasswordInputThumb,
  plan: PlanThumb,
  popover: PopoverThumb,
  progress: ProgressThumb,
  "prompt-input": PromptInputThumb,
  prose: ProseThumb,
  "qr-code": QrCodeThumb,
  questionnaire: QuestionnaireThumb,
  queue: QueueThumb,
  "radio-group": RadioGroupThumb,
  rating: RatingGroupThumb,
  reasoning: ReasoningThumb,
  resizable: ResizableThumb,
  "scroll-area": ScrollAreaThumb,
  "segment-group": SegmentGroupThumb,
  select: SelectThumb,
  separator: SeparatorThumb,
  sheet: SheetThumb,
  sidebar: SidebarThumb,
  "signature-pad": SignaturePadThumb,
  skeleton: SkeletonThumb,
  "skip-nav": SkipNavThumb,
  slider: SliderThumb,
  sources: SourcesThumb,
  "speech-input": SpeechInputThumb,
  spinner: SpinnerThumb,
  state: StateThumb,
  status: StatusThumb,
  steps: StepsThumb,
  suggestion: SuggestionThumb,
  switch: SwitchThumb,
  table: TableThumb,
  tabs: TabsThumb,
  "tags-input": TagsInputThumb,
  task: TaskThumb,
  terminal: TerminalThumb,
  textarea: TextareaThumb,
  timer: TimerThumb,
  toast: ToastThumb,
  toc: TocThumb,
  toggle: ToggleThumb,
  "toggle-group": ToggleGroupThumb,
  "toggle-tooltip": ToggleTooltipThumb,
  "tool-result": ToolResultThumb,
  tooltip: TooltipThumb,
  tour: TourThumb,
  "tree-view": TreeViewThumb,
};

interface ComponentsListProps extends React.ComponentProps<"div"> {}

export const ComponentsList = (props: ComponentsListProps) => {
  const { className, ...rest } = props;

  const { pageTree } = source;

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
