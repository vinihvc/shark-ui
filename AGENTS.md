## Learned User Preferences

- When asked for code, write it only; do not install packages or run install commands
- Prefer simple divs over data arrays for thumb/preview components
- Thumbs should match the component's actual use case, not generic placeholder UI
- Use accordion thumb color pattern for other thumbs: `bg-muted-foreground/16` and `bg-muted-foreground/8`
- API reference: no Description column in component tables
- Hero preview cards: no rotation or hover scale; keep cards side by side
- Pattern components (DotPattern, GridPattern): no animation or motion
- When removing an example, delete the example file as well
- Field examples: use `className="w-full max-w-xs"` and export as default `Example`
- ScrollArea in menus: use native `overflow-y-auto` when ScrollArea causes layout issues
- Link overlay is a utility: div with `position: relative` and overlay link covering it, not a card-style component

## Learned Workspace Facts

- HackerRank tests: use `background` not `backgroundColor` for `toHaveStyle` assertions
- Component thumbs in `components/thumbs/` follow accordion color pattern (`bg-muted-foreground/16`, `bg-muted-foreground/8`)
- Registry examples in `registry/react/examples/<component>/` use `example-*.tsx` naming
- Sidebar examples: wrap in `absolute inset-0 overflow-hidden`, add `className="absolute"` to Sidebar, use `h-full` on SidebarProvider to prevent overflow outside preview
