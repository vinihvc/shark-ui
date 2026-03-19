import { Button } from "@/registry/react/components/button";

const FullBarWithDivider = () => {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-card px-6 py-4">
      <div className="flex items-center gap-8">
        <span className="font-semibold text-foreground">Logo</span>
        <nav className="flex gap-6">
          <a className="text-muted-foreground text-sm hover:text-foreground" href="#">
            Product
          </a>
          <a className="text-muted-foreground text-sm hover:text-foreground" href="#">
            Features
          </a>
          <a className="text-muted-foreground text-sm hover:text-foreground" href="#">
            Pricing
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-4 w-px bg-border" />
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button size="sm">Free trial</Button>
      </div>
    </div>
  );
};

export default FullBarWithDivider;
