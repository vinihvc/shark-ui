# Shark Toc

## When to use

- In-page navigation that highlights the heading currently in view.
- Docs, articles, and long-form layouts with a sticky “on this page” list.

## When NOT to use

- Site-wide or app-shell navigation → `Sidebar` or `BottomNavigation`.
- Hierarchical file/folder trees → `TreeView`.
- Paged result sets → `Pagination`.

## Install

```bash
npx shadcn@latest add @shark/toc
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Toc,
  TocContent,
  TocIndicator,
  TocItem,
  TocLink,
  TocList,
  TocNav,
  TocRootProvider,
  TocTitle,
  useToc,
  useTocContext,
} from "@/components/ui/toc"
```

## Minimal pattern

```tsx
<Toc items={items} scrollEl={() => contentRef.current}>
  <TocContent ref={contentRef}>
    <h2 id="intro">Introduction</h2>
  </TocContent>
  <TocNav>
    <TocTitle>On this page</TocTitle>
    <TocList>
      <TocIndicator />
      {items.map((item) => (
        <TocItem item={item} key={item.value}>
          <TocLink href={`#${item.value}`}>{item.label}</TocLink>
        </TocItem>
      ))}
    </TocList>
  </TocNav>
</Toc>
```

Each item `value` must match the heading `id`. Pass `scrollEl` when the document scrolls inside a container (including docs previews).

Ark UI marks Toc as preview; treat the API as unstable.
