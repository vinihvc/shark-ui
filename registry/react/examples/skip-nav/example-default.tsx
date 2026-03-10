import {
  SkipNavContent,
  SkipNavLink,
} from "@/registry/react/components/skip-nav";

const SkipNavDemo = () => (
  <div className="flex min-h-[200px] flex-col gap-4">
    <SkipNavLink className="focus:absolute">Skip to Content</SkipNavLink>
    <nav className="rounded-lg border bg-muted/30 p-4">
      <p className="text-muted-foreground text-sm">
        Navigation — Tab to focus the skip link, then Enter to jump to main
        content.
      </p>
    </nav>
    <SkipNavContent>
      <main className="rounded-lg border border-primary/50 bg-primary/5 p-4">
        <h2 className="mb-2 font-semibold">Main Content</h2>
        <p className="text-muted-foreground text-sm">
          This is the main content area. When users press Tab and then Enter on
          the skip link, focus jumps here.
        </p>
      </main>
    </SkipNavContent>
  </div>
);

export default SkipNavDemo;
