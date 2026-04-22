/** Curated ASCII trees for compound components (Installation → Anatomy → …). */
export const ANATOMIES = {
  accordion: `Accordion
└── AccordionItem
    ├── AccordionTrigger
    └── AccordionContent`,

  "action-bar": `ActionBar
├── ActionBarTrigger
└── ActionBarContent
    ├── ActionBarClose
    ├── ActionBarSelectionTrigger
    └── ActionBarBody`,

  alert: `Alert
├── Icon
├── AlertTitle
├── AlertDescription
└── AlertAction`,

  "alert-dialog": `AlertDialog
├── AlertDialogTrigger
└── AlertDialogContent
    ├── AlertDialogBody
    ├── AlertDialogHeader
    │   ├── AlertDialogTitle
    │   └── AlertDialogDescription
    ├── AlertDialogFooter
    │   ├── AlertDialogCancel
    │   └── AlertDialogAction
    └── AlertDialogClose`,

  announcement: `Announcement
└── AnnouncementTitle`,

  autocomplete: `Autocomplete
├── AutocompleteControl
│   ├── AutocompleteInput
│   ├── AutocompleteTrigger
│   └── AutocompleteClear
└── AutocompleteContent
    ├── AutocompleteEmpty
    ├── AutocompleteList
    │   └── AutocompleteCollection
    ├── AutocompleteGroup
    │   ├── AutocompleteGroupLabel
    │   └── AutocompleteItem
    └── AutocompleteSeparator`,

  avatar: `Avatar
├── AvatarImage
└── AvatarFallback

AvatarGroup
├── AvatarGroupCount
└── Avatar
    ├── AvatarImage
    ├── AvatarFallback
    └── AvatarBadge`,

  "bottom-navigation": `BottomNavigation
└── BottomNavigationList
    └── BottomNavigationItem
        ├── BottomNavigationItemIcon
        └── BottomNavigationItemLabel`,

  breadcrumb: `Breadcrumb
└── BreadcrumbList
    └── BreadcrumbItem
        ├── BreadcrumbLink
        ├── BreadcrumbPage
        ├── BreadcrumbSeparator
        └── BreadcrumbEllipsis`,

  "button-group": `ButtonGroup
├── ButtonGroupText
└── ButtonGroupSeparator`,

  calendar: `Calendar
├── CalendarViewControl
│   ├── CalendarPrevTrigger
│   ├── CalendarViewDate
│   └── CalendarNextTrigger
└── CalendarTable
    ├── CalendarWeekDays
    └── CalendarTableDays`,

  card: `Card
├── CardMedia
├── CardHeader
│   ├── CardTitle
│   ├── CardDescription
│   └── CardAction
├── CardContent
└── CardFooter`,

  carousel: `Carousel
├── CarouselContent
│   └── CarouselItem
├── CarouselControl
│   ├── CarouselPrevious
│   └── CarouselNext
└── CarouselIndicatorGroup
    └── CarouselIndicator`,

  chart: `ChartContainer
├── ChartStyle
├── Recharts surface (BarChart, LineChart, …)
├── ChartTooltip
│   └── ChartTooltipContent
└── ChartLegend
    └── ChartLegendContent`,

  checkbox: `CheckboxGroup
└── Checkbox
    └── CheckboxIndicator`,

  "circular-progress": `CircularProgress
├── CircularProgressTrack
└── CircularProgressValue`,

  "circular-slider": `CircularSlider
├── CircularSliderValue
├── CircularSliderThumb
└── CircularSliderMarkerGroup
    └── CircularSliderMarker`,

  clipboard: `Clipboard
├── ClipboardTrigger
├── ClipboardInput
├── ClipboardValue
└── ClipboardIndicator`,

  collapsible: `Collapsible
├── CollapsibleTrigger
│   └── CollapsibleIndicator
└── CollapsibleContent`,

  "color-picker": `ColorPicker
├── ColorPickerControl
│   └── ColorPickerTrigger
└── ColorPickerContent
    ├── ColorPickerTransparencyGrid
    ├── ColorPickerView
    ├── ColorPickerSlider
    ├── ColorPickerArea
    │   └── ColorPickerAreaThumb
    ├── ColorPickerSwatchGroup
    │   └── ColorPickerSwatchTrigger
    │       ├── ColorPickerSwatch
    │       └── ColorPickerSwatchIndicator
    ├── ColorPickerValue / ColorPickerValueSwatch
    ├── ColorPickerInput
    └── ColorPickerSwatchPreview`,

  combobox: `Combobox
├── ComboboxControl
│   ├── ComboboxInput
│   ├── ComboboxTrigger
│   └── ComboboxClear
└── ComboboxPositioner
    └── ComboboxContent
        ├── ComboboxEmpty
        ├── ComboboxList
        ├── ComboboxGroup
        │   ├── ComboboxGroupLabel
        │   └── ComboboxItem
        └── ComboboxSeparator`,

  command: `Command (inline)
├── CommandInput
├── CommandList
│   ├── CommandEmpty
│   └── CommandGroup
│       ├── CommandGroupLabel
│       └── CommandItem
├── CommandSeparator
├── CommandShortcut
└── CommandFooter

CommandDialog
├── CommandDialogTrigger
└── CommandDialogContent`,

  "context-menu": `ContextMenu
├── ContextMenuTrigger
└── ContextMenuContent
    ├── ContextMenuGroup
    ├── ContextMenuItem
    ├── ContextMenuCheckboxItem
    ├── ContextMenuRadioGroup
    │   └── ContextMenuRadioItem
    ├── ContextMenuSub
    │   ├── ContextMenuSubTrigger
    │   └── ContextMenuSubContent
    ├── ContextMenuSeparator
    └── ContextMenuShortcut`,

  "data-list": `DataList
└── DataListItem
    ├── DataListItemLabel
    └── DataListItemValue`,

  "date-picker": `DatePicker
├── DatePickerTrigger
├── DatePickerInput
├── DatePickerTimer
├── DatePickerPresetTrigger
└── DatePickerContent
    └── DatePickerValue`,

  dialog: `Dialog
├── DialogTrigger
└── DialogContent
    ├── DialogHeader
    │   ├── DialogTitle
    │   └── DialogDescription
    ├── DialogBody
    └── DialogFooter
        └── DialogClose`,

  drawer: `Drawer
├── DrawerTrigger
└── DrawerContent
    ├── DrawerGrabber
    ├── DrawerContentInner
    │   ├── DrawerHeader
    │   └── DrawerBody
    └── DrawerFooter
        └── DrawerClose`,

  editable: `Editable
├── EditableArea
│   ├── EditablePreview
│   └── EditableInput
└── EditableControl
    ├── EditableEditTrigger
    ├── EditableCancelTrigger
    └── EditableSubmitTrigger`,

  field: `FieldSet
├── FieldLegend
└── FieldGroup
    └── Field
        ├── FieldLabel
        ├── FieldRequiredIndicator
        ├── FieldTitle
        ├── FieldDescription
        ├── FieldSeparator
        ├── FieldHelper
        └── FieldError`,

  "file-upload": `FileUpload
├── FileUploadTrigger
├── FileUploadDropzone
│   ├── FileUploadDropzoneIcon
│   ├── FileUploadTitle
│   ├── FileUploadDescription
│   └── FileUploadHelper
├── FileUploadItemGroup
│   └── FileUploadList
│       └── FileUploadItem
│           ├── FileUploadItemPreview
│           │   └── FileUploadItemPreviewImage
│           ├── FileUploadItemName
│           ├── FileUploadItemSize
│           └── FileUploadItemDeleteTrigger
└── FileUploadClearTrigger

FileUploadRootProvider (alternate root for advanced wiring)`,

  "floating-panel": `FloatingPanel
├── FloatingPanelTrigger
└── FloatingPanelContent
    ├── FloatingPanelDragTrigger
    ├── FloatingPanelHeader
    │   ├── FloatingPanelControl
    │   │   ├── FloatingPanelMinimize
    │   │   ├── FloatingPanelMaximize
    │   │   └── FloatingPanelRestore
    │   ├── FloatingPanelTitle
    │   ├── FloatingPanelResizeTrigger
    │   ├── FloatingPanelStageTrigger
    │   └── FloatingPanelCloseTrigger
    ├── FloatingPanelBody
    └── FloatingPanelFooter`,

  frame: `Frame
├── FramePanel
└── FrameHeader
    ├── FrameTitle
    ├── FrameDescription
    └── FrameFooter`,

  hint: `Hint
├── HintTrigger
└── HintContent
    └── HintArrow`,

  "hover-card": `HoverCard
├── HoverCardTrigger
└── HoverCardContent
    └── HoverCardArrow`,

  "image-cropper": `ImageCropper
├── ImageCropperImage
├── ImageCropperSelection
├── ImageCropperHandle
└── ImageCropperGrid`,

  "input-group": `InputGroup
├── InputGroupAddon
├── InputGroupButton
├── InputGroupText
├── InputGroupInput
└── InputGroupTextarea`,

  "input-otp": `InputOtp
├── InputOtpSlot
└── InputOtpSeparator`,

  item: `ItemGroup
├── ItemSeparator
└── Item
    ├── ItemMedia
    ├── ItemHeader
    ├── ItemContent
    │   ├── ItemTitle
    │   └── ItemDescription
    ├── ItemActions
    └── ItemFooter`,

  kbd: `KbdGroup
└── Kbd`,

  "link-overlay": `LinkBox
└── LinkOverlay`,

  listbox: `Listbox
├── ListboxValueText
└── ListboxContent
    ├── ListboxEmpty
    ├── ListboxItemGroup
    │   ├── ListboxItemGroupLabel
    │   └── ListboxItem
    │       ├── ListboxItemText
    │       ├── ListboxItemIndicator
    │       └── ListboxShortcut
    └── ListboxItem (ungrouped)`,

  marquee: `Marquee
├── MarqueeContent
│   └── MarqueeItem
└── MarqueeEdge`,

  menu: `Menu
├── MenuTrigger
└── MenuPositioner
    └── MenuContent
        ├── MenuGroup
        │   └── MenuGroupLabel
        ├── MenuItem
        ├── MenuQuickItem
        ├── MenuCheckboxItem
        ├── MenuRadioGroup
        │   └── MenuRadioItem
        ├── MenuSub
        │   ├── MenuSubTrigger
        │   └── MenuSubContent
        ├── MenuSeparator
        ├── MenuShortcut
        └── MenuArrow`,

  "native-select": `NativeSelect
├── NativeSelectOptGroup
│   └── NativeSelectOption
└── NativeSelectOption (direct child)`,

  "number-input": `NumberField
└── NumberFieldGroup
    ├── NumberFieldDecrement
    ├── NumberFieldInput
    ├── NumberFieldIncrement
    └── NumberFieldScrubber`,

  pagination: `Pagination
├── PaginationPrevious
├── PaginationItems
│   ├── PaginationItem
│   │   └── PaginationItemLink
│   └── PaginationEllipsis
└── PaginationNext`,

  popover: `Popover
├── PopoverTrigger
├── PopoverAnchor
└── PopoverPositioner
    └── PopoverContent
        ├── PopoverHeader
        │   ├── PopoverTitle
        │   └── PopoverDescription
        ├── PopoverBody
        ├── PopoverFooter
        ├── PopoverClose
        └── PopoverArrow`,

  progress: `Progress
├── ProgressValue
└── ProgressTrack
    └── ProgressRange`,

  "qr-code": `QrCode
├── QrCodeFrame
├── QrCodeOverlay
└── QrCodeDownload`,

  "radio-group": `RadioGroup
├── RadioGroupLabel
└── RadioGroupItem
    └── RadioGroupText`,

  rating: `Rating
└── RatingItem`,

  resizable: `Resizable
├── ResizablePanel
└── ResizableResizeTrigger`,

  "scroll-area": `ScrollArea
└── ScrollAreaScrollbar`,

  "segment-group": `SegmentGroup
└── SegmentGroupItem
    ├── SegmentGroupItemText
    └── SegmentGroupIndicator`,

  select: `Select
├── SelectTrigger
│   └── SelectValue
└── SelectContent
    ├── SelectEmpty
    ├── SelectClearTrigger
    ├── SelectGroup
    │   ├── SelectGroupLabel
    │   └── SelectItem
    └── SelectItem`,

  sheet: `Sheet
├── SheetTrigger
└── SheetContent
    ├── SheetHeader
    │   ├── SheetTitle
    │   └── SheetDescription
    ├── SheetBody
    └── SheetFooter
        └── SheetClose`,

  sidebar: `SidebarProvider
├── Sidebar
│   ├── SidebarHeader
│   ├── SidebarContent
│   │   └── SidebarGroup
│   │       ├── SidebarGroupLabel
│   │       ├── SidebarGroupAction
│   │       ├── SidebarGroupContent
│   │       └── SidebarMenu
│   │           ├── SidebarMenuItem
│   │           │   ├── SidebarMenuButton
│   │           │   ├── SidebarMenuAction
│   │           │   └── SidebarMenuBadge
│   │           └── SidebarMenuSub
│   │               ├── SidebarMenuSubButton
│   │               └── SidebarMenuSubItem
│   ├── SidebarFooter
│   ├── SidebarSeparator
│   └── SidebarInput
├── SidebarTrigger
├── SidebarRail
└── SidebarInset`,

  skeleton: `Skeleton
├── SkeletonCircle
└── SkeletonText`,

  "skip-nav": `Skip navigation
├── SkipNavLink
└── SkipNavContent`,

  slider: `Slider
├── SliderLabel
└── SliderValue`,

  steps: `Steps
├── StepsList
│   └── StepsItem
│       ├── StepsTrigger
│       ├── StepsIndicator
│       ├── StepsSeparator
│       ├── StepsTitle
│       └── StepsDescription
├── StepsContent
├── StepsCompletedContent
├── StepsPrevious
└── StepsNext`,

  table: `Table
├── TableCaption
├── TableHeader
│   └── TableRow
│       └── TableHead
├── TableBody
│   └── TableRow
│       └── TableCell
└── TableFooter
    └── TableRow
        └── TableCell`,

  tabs: `Tabs
├── TabsList
│   └── TabsTrigger
└── TabsContent`,

  timer: `Timer
├── TimerArea
│   ├── TimerItem
│   ├── TimerSeparator
│   └── TimerItem …
├── TimerControl
└── TimerActionTrigger`,

  toast: `Toaster
└── ToastItem`,

  toggle: `Toggle
└── ToggleIndicator`,

  "toggle-group": `ToggleGroup
└── ToggleGroupItem`,

  "toggle-tooltip": `ToggleTooltip
├── ToggleTooltipTrigger
└── ToggleTooltipContent
    └── ToggleTooltipArrow`,

  tooltip: `Tooltip
├── TooltipTrigger
└── TooltipContent
    └── TooltipArrow`,

  tour: `Tour
├── TourTrigger
├── TourActionTrigger
├── TourOverlay
└── TourPositioner
    └── TourContent
        ├── TourSpotlight
        ├── TourHeader
        │   ├── TourProgressText
        │   ├── TourTitle
        │   └── TourDescription
        ├── TourBody
        ├── TourFooter
        │   ├── TourActions
        │   ├── TourPreviousStep
        │   └── TourNextStep
        └── TourClose`,

  "tree-view": `TreeView
├── TreeViewLabel
└── TreeViewTree
    └── TreeViewNode
        ├── TreeViewBranch
        │   ├── TreeViewBranchItem
        │   │   └── TreeViewBranchIndicator
        │   └── TreeViewBranchContent
        │       └── TreeViewNode …
        └── TreeViewContent
            └── TreeViewItem
                └── TreeViewCheckbox`,
};
