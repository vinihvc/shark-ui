import { ComponentResizer } from "@/components/component-resizer";

const BlocksPage = () => {
  return (
    <main className="container flex flex-col gap-4">
      <div className="grid gap-2 pt-8 pb-4">
        <h1 className="font-semibold text-3xl tracking-tight">Blocks</h1>

        <p className="text-lg text-muted-foreground">
          Blocks are the building blocks of your website.
        </p>
      </div>

      <ComponentResizer title="Login Block" url="/blocks/login">
        <iframe className="size-full" src="/blocks/login" title="Login" />
      </ComponentResizer>
    </main>
  );
};

export default BlocksPage;
