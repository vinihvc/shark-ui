import { ComponentResizer } from "@/components/component-resizer";

const BlocksPage = () => {
  return (
    <main className="container flex flex-col gap-4">
      <div className="grid gap-2 pt-8 pb-4">
        <h1 className="font-semibold text-3xl tracking-tight">Templates</h1>

        <p className="text-lg text-muted-foreground">
          Templates are pre-built pages and layouts for your website.
        </p>
      </div>

      <ComponentResizer
        className="h-dvh"
        title="Auth Template"
        url="/templates/auth"
      >
        <iframe className="size-full" src="/templates/auth" title="Auth" />
      </ComponentResizer>
    </main>
  );
};

export default BlocksPage;
