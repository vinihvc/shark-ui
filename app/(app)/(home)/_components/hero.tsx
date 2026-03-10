import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import {
  Announcement,
  AnnouncementBadge,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Button } from "@/registry/react/components/button";

interface HeroSectionProps extends React.ComponentProps<"section"> {
  /**
   * The number of components
   */
  count: number;
  /**
   * Background pattern: "dot" | "grid"
   * @default "dot"
   */
  pattern?: "dot" | "grid";
}

export const HeroSection = (props: HeroSectionProps) => {
  const { count, className, pattern = "dot", ...rest } = props;

  return (
    <section className={cn("relative py-32", className)} {...rest}>
      <div className="flex max-w-2xl flex-col gap-4">
        <div>
          <Announcement asChild>
            <Link href="/docs/components">
              <AnnouncementBadge variant="default">
                <Logo />
                <span className="max-sm:sr-only">Welcome</span>
              </AnnouncementBadge>
              <AnnouncementTitle>
                Shark UI is a new component library.
              </AnnouncementTitle>
            </Link>
          </Announcement>
        </div>

        <h1 className="font-extrabold text-4xl sm:text-7xl">
          Build your own <br /> component library
        </h1>

        <div className="max-w-xl">
          <p className="text-muted-foreground text-xl">
            {`A beautifully designed and accessible set of ${count}+ components, created to help you build reusable and scalable design systems. `}
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild size="xl">
            <Link href="/docs">Get Started</Link>
          </Button>

          <Button asChild size="xl" variant="ghost">
            <Link href="/docs/components">
              View components
              <ArrowRightIcon aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
