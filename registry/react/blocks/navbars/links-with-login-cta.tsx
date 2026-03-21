import { Button } from "@/registry/react/components/button";

const LinksWithLoginCta = () => {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-card px-6 py-4">
      <span className="font-semibold text-foreground">Logo</span>
      <nav className="flex items-center gap-6">
        <a className="text-muted-foreground text-sm hover:text-foreground" href="#">
          Product
        </a>
        <a className="text-muted-foreground text-sm hover:text-foreground" href="#">
          About
        </a>
        <a className="text-muted-foreground text-sm hover:text-foreground" href="#">
          Blog
        </a>
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button size="sm">Open an account</Button>
      </nav>
    </div>
  );
};

export default LinksWithLoginCta;
