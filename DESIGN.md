---
name: Shark UI
description: A compact, themeable registry interface built from quiet semantic surfaces and inspectable product UI.
colors:
  background: "var(--background)"
  foreground: "var(--foreground)"
  card: "var(--card)"
  card-foreground: "var(--card-foreground)"
  primary: "var(--primary)"
  primary-foreground: "var(--primary-foreground)"
  secondary: "var(--secondary)"
  secondary-foreground: "var(--secondary-foreground)"
  muted: "var(--muted)"
  muted-foreground: "var(--muted-foreground)"
  accent: "var(--accent)"
  accent-foreground: "var(--accent-foreground)"
  border: "var(--border)"
  input: "var(--input)"
  ring: "var(--ring)"
  code: "var(--code)"
  code-foreground: "var(--code-foreground)"
  destructive: "var(--destructive)"
  destructive-foreground: "var(--destructive-foreground)"
typography:
  display:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.111
    letterSpacing: "-0.03em"
  editorialDisplay:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "4.5rem"
    fontSizeXl: "6rem"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.333
  body:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.375
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  xs: "0.125rem"
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "14": "3.5rem"
  "16": "4rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "0 0.75rem"
    height: "2rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "0 0.75rem"
    height: "2rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "0 0.75rem"
    height: "2rem"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "0 0.75rem"
    height: "2rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.xl}"
    padding: "1.5rem"
  badge-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.md}"
    padding: "0 0.25rem"
    height: "1.25rem"
  tab-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "0 0.625rem"
    height: "2rem"
---

# Design System: Shark UI

## Overview

**Creative North Star: "The Living Workbench"**

Shark UI feels like a well-kept technical workbench: quiet enough for the interface under examination to lead, but precise enough that the surrounding controls always feel intentional. Its identity comes from compact geometry, semantic surface layering, restrained borders, and real product compositions rather than ornamental framing.

The system is designed to survive customization. A user can change the neutral family, primary accent, base radius, and light or dark mode without changing the component grammar. Strong hierarchy comes from weight, scale, spacing, and state—not from accumulating colors or effects.

**Key Characteristics:**

- Neutral semantic surfaces with one active primary accent.
- Compact, consistently sized controls with generous keyboard focus indicators.
- Restrained borders and shallow shadows that clarify structure without decorating it.
- Real, usable interface compositions as the visual material.
- Direction-aware layout and reduced-motion fallbacks built into component behavior.

## Colors

The palette is role-driven and themeable: background, foreground, surface, state, and feedback roles stay stable while their underlying neutral family and primary hue can change.

### Primary

- **Theme Accent:** Reserved for primary actions, selected emphasis, focus borders, and the focus ring. The default theme keeps this role neutral; configured themes may supply one chromatic hue.
- **Accent Foreground:** Maintains readable contrast on the current primary surface in both color modes.

### Neutral

- **Canvas:** The page foundation; it remains visually quiet so examples and content carry the hierarchy.
- **Foreground:** The highest-emphasis text and icon role.
- **Card and Popover Surfaces:** Near-canvas layers used for bounded content, overlays, and composed product regions.
- **Muted and Secondary Surfaces:** Low-contrast fills for selected navigation, supporting controls, skeletons, and low-emphasis regions.
- **Muted Foreground:** Supporting copy, metadata, placeholders, and inactive navigation.
- **Border and Input Strokes:** Subtle structural separators derived from the active neutral family rather than a fixed gray.
- **Code Surface:** A dedicated semantic surface that follows the selected neutral family and color mode.

### Named Rules

**The Semantic Roles Rule.** Build with semantic color roles; never bind a reusable component to a raw palette color when a surface, text, border, state, or feedback token exists.

**The One Accent Rule.** A screen may use one configured primary hue. Keep surrounding surfaces neutral so the accent communicates state and action rather than decoration.

**The Contrast Pair Rule.** Primary, card, popover, sidebar, code, and feedback surfaces travel with their matching foreground roles; do not mix foreground tokens across surface families.

## Typography

**Display Font:** Hanken Grotesk (with sans-serif fallback)  
**Body Font:** Hanken Grotesk (with sans-serif fallback)  
**Label/Mono Font:** JetBrains Mono (with monospace fallback) for commands, file paths, and code-oriented metadata

**Character:** The single sans family keeps the product direct and cohesive, while weight and tight tracking give headings a confident, contemporary shape. Monospace appears only where the content is genuinely executable or file-oriented.

### Hierarchy

- **Display** (semibold, 2.25rem base / 3rem on larger screens, tight leading): Page-level statements only; use balanced wrapping and slightly tighter tracking.
- **Editorial Display** (semibold, 4.5rem at large widths / 6rem at extra-large widths, 0.98 line-height, -0.04em tracking): Reserved for persuasive catalog first viewports where a single product promise must lead; collapse through the standard 3rem and 3.75rem steps on smaller screens.
- **Headline** (semibold, 1.25rem, compact leading): Major content units and named compositions.
- **Title** (semibold, 1.125rem, 1.5rem line-height): Cards, dialogs, and bounded interface regions.
- **Body** (regular, 1rem, 1.5 line-height): Primary explanatory content; use the smaller supporting size for dense product UI.
- **Label** (medium, 0.875rem, snug leading): Controls, field labels, navigation, and compact metadata.
- **Mono** (regular, 0.75rem base): Commands and paths; it is a semantic content cue, not an ornamental contrast face.

### Named Rules

**The One-Family Rule.** Use Hanken Grotesk for both display and interface typography; create hierarchy with scale, weight, line-height, and restrained negative tracking.

**The Semantic Mono Rule.** Reserve JetBrains Mono for code, commands, file names, keyboard-oriented data, and similarly technical strings.

## Layout

The default page container is centered, capped at 1400px, and uses 1rem inline padding. Layouts begin as one fluid column, then introduce side-by-side structure only when the content benefits from it. Major page bands use 2.5–4rem vertical padding; related controls and metadata use a dense 0.25–1rem rhythm; independent content regions separate more decisively.

Controls may wrap or scroll horizontally before they compress their labels. Data and product compositions change grid count at content-driven breakpoints, while primary interactions stay reachable and full-width where narrow screens demand it. Direction-sensitive spacing and positioning use logical start/end properties.

**The Density Ladder Rule.** Use the tightest rhythm inside controls, a moderate rhythm inside components, and the widest rhythm between independent content regions.

**The Content-Earns-Columns Rule.** Do not preserve a desktop column count on small screens; stack content until each region remains readable and operable.

## Elevation & Depth

The system is flat by default. Depth comes first from tonal separation and one-pixel borders, then from small ambient shadows on interactive or bounded surfaces. The shadow vocabulary is deliberately shallow; large diffuse elevation would compete with the interface being demonstrated.

### Shadow Vocabulary

- **Hairline Ambient** (`0 1px 2px 0 rgb(0 0 0 / 0.05)` geometry): Inputs, cards, and subtle outlined controls where a border alone needs a small amount of separation.
- **Compact Raised** (`0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` geometry): Primary actions and contained product surfaces; tint it from the owning semantic role when appropriate.

### Named Rules

**The Border-Before-Shadow Rule.** Establish structure with surface tone and a restrained border; add only the smallest shadow needed to separate a bounded or interactive element.

## Shapes

The default form language is gently rounded and compact. Controls use the base 0.5rem corner, cards and major bounded surfaces step up to 0.75rem, and small badges or tree items step down proportionally. Fully rounded pills are explicit variants rather than a default silhouette.

Radius is a user-configurable scale anchored by one base value. Components derive their corners from that base, so changing the theme radius preserves proportional relationships instead of producing a mix of fixed shapes.

**The Proportional Radius Rule.** Use the shared radius scale and its component roles; do not introduce unrelated one-off corner values.

## Components

### Buttons

- **Character:** Compact, quiet, and stateful; labels and icons remain visually centered with a consistent gap.
- **Shape:** Gently rounded by default, with an explicit pill option and smaller corners only at the extra-small size.
- **Primary:** Uses the semantic primary pair, a transparent border for stable geometry, and a shallow role-tinted shadow.
- **Secondary / Outline / Ghost:** Secondary uses a quiet filled surface; outline uses the input stroke over a transparent surface; ghost is transparent until hover.
- **Hover / Focus / Active:** Hover shifts the owning semantic surface slightly. Keyboard focus uses a three-pixel translucent ring plus a semantic border. Pressing scales ordinary buttons to 98%; reduced-motion mode removes transitions.
- **Disabled / Loading:** Preserve the control footprint, reduce opacity, block pointer actions, and expose busy/disabled state semantically.

### Badges

- **Character:** Small, low-noise state or count markers; not miniature primary buttons.
- **Style:** Compact label typography, a restrained fill or border, and proportional small corners. Feedback variants use semantic status roles.
- **State:** Interactive badges inherit the same visible focus grammar and coarse-pointer hit-area accommodation as buttons.

### Cards / Containers

- **Corner Style:** One step rounder than controls.
- **Background:** The semantic card surface and matching foreground.
- **Shadow Strategy:** A hairline ambient shadow complements, but never replaces, the border.
- **Border:** A restrained one-pixel semantic stroke.
- **Internal Padding:** 1.5rem is the canonical card inset; headers, content, and footers share it through a component-owned spacing variable.

### Inputs / Fields

- **Style:** Compact height, transparent light-mode fill, subtle dark-mode fill, semantic input stroke, and control-radius corners.
- **Focus:** The border moves to primary and a three-pixel translucent ring appears without changing layout.
- **Error / Disabled:** Invalid state switches border, text, and ring to destructive roles. Disabled state keeps content legible at reduced opacity and communicates the unavailable cursor state.
- **Composition:** Labels use medium interface type; descriptions use muted supporting text. Stacked form groups use explicit gaps rather than ad hoc margins.

### Navigation

- **Style:** Navigation uses compact label type and transparent or muted surfaces. Inactive items recede through muted foreground; active or selected items use the accent surface and normal foreground.
- **Desktop / Mobile:** Primary navigation may collapse behind a mobile trigger. Horizontal category or filter navigation scrolls rather than squeezing labels.
- **Persistent Chrome:** Sticky headers use a translucent canvas with restrained backdrop blur and a bottom border; their height and controls remain compact.

### Tabs

- **Style:** Tabs behave like a compact segmented control. The active indicator uses the accent surface beneath the selected trigger; inactive labels remain muted.
- **Motion:** Indicator width and position transition over 200ms with standard ease-in-out, and the transition is removed under reduced motion.

## Do's and Don'ts

### Do:

- **Do** compose new interfaces from semantic surfaces, matched foreground roles, and existing component variants.
- **Do** keep one configured primary accent surrounded by neutral structure.
- **Do** use compact controls, visible three-pixel focus rings, and stable transparent borders so state changes do not shift layout.
- **Do** use one-pixel borders and shallow shadows to clarify containment.
- **Do** use Hanken Grotesk for product hierarchy and JetBrains Mono only for technical strings.
- **Do** preserve responsive stacking, horizontal overflow where appropriate, reduced-motion behavior, and logical start/end layout.

### Don't:

- **Don't** hard-code raw palette colors into reusable components when semantic roles exist.
- **Don't** introduce a second accent hue to decorate an otherwise neutral surface.
- **Don't** replace live, functional UI with ornamental imagery when the interface itself can carry the material.
- **Don't** use large elevation, glow, or decorative shadow as the main hierarchy device.
- **Don't** invent isolated radius or spacing values outside the established proportional scales.
- **Don't** use monospace as a general display treatment or compress mobile content to preserve a desktop layout.
