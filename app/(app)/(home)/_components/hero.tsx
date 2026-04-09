import { Badge } from "@registry/react/components/badge";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { SharkIcon } from "@/components/icons/shark";
import { cn } from "@/lib/utils";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Button } from "@/registry/react/components/button";

interface HeroSectionProps extends React.ComponentProps<"section"> {
  /**
   * The number of components
   */
  count: number;
}

export const HeroSection = (props: HeroSectionProps) => {
  const { count, className, ...rest } = props;

  return (
    <section className={cn("relative", className)} {...rest}>
      <div className="flex max-w-2xl flex-col gap-4">
        <div>
          <Announcement asChild className="bg-background">
            <Link href="/docs/components">
              <Badge variant="default">
                <SharkIcon />
                <span className="max-sm:sr-only">Welcome</span>
              </Badge>
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
          <p className="text-base text-muted-foreground sm:text-xl">
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
