import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";

const CenteredHeadlineForm = () => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
      <h2 className="font-bold text-2xl tracking-tight text-foreground sm:text-3xl">
        Subscribe to our newsletter
      </h2>
      <p className="max-w-md text-muted-foreground text-base">
        Get the latest updates and tips delivered to your inbox.
      </p>
      <form className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
        <Input className="flex-1" placeholder="Enter your email" type="email" />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
};

export default CenteredHeadlineForm;
