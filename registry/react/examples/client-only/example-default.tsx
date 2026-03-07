import { ClientOnly } from "@/registry/react/components/client-only";

const ClientOnlyDemo = () => (
  <ClientOnly>
    <div className="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
      This content is only rendered on the client side.
    </div>
  </ClientOnly>
);

export default ClientOnlyDemo;
