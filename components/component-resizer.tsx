"use client";

import {
  ComputerIcon,
  FullscreenIcon,
  PhoneIcon,
  RotateCwIcon,
  TabletIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

interface ComponentResizerProps extends React.ComponentProps<"figure"> {
  /**
   * The title of the component
   */
  title: string;
  /**
   * The url of the component
   */
  url: string;
}

const MEDIA_QUERY = {
  mobile: "(max-width: 768px)",
  tablet: "(max-width: 1024px)",
  desktop: "(min-width: 1025px)",
};

type MediaQuery = keyof typeof MEDIA_QUERY;

export const ComponentResizer = (props: ComponentResizerProps) => {
  const { title, url, className, children, ...rest } = props;

  const [mediaQuery, setMediaQuery] = React.useState<MediaQuery>("desktop");

  const [count, setCount] = React.useState(0);

  return (
    <figure
      className={cn(
        "h-[600px] w-full gap-4 overflow-hidden rounded-md border bg-card",
        className
      )}
      {...rest}
    >
      <figcaption className="flex h-14 items-center justify-between bg-muted px-4">
        <div className="font-medium text-sm">{title}</div>

        <div className="flex items-center gap-2">
          <ButtonGroup>
            <Button
              aria-label="Desktop"
              onClick={() => setMediaQuery("desktop")}
              size="icon-sm"
              variant="outline"
            >
              <ComputerIcon aria-hidden />
            </Button>

            <Button
              aria-label="Tablet"
              onClick={() => setMediaQuery("tablet")}
              size="icon-sm"
              variant="outline"
            >
              <TabletIcon aria-hidden />
            </Button>

            <Button
              aria-label="Phone"
              onClick={() => setMediaQuery("mobile")}
              size="icon-sm"
              variant="outline"
            >
              <PhoneIcon aria-hidden />
            </Button>

            <Button
              aria-label="Fullscreen"
              asChild
              size="icon-sm"
              variant="outline"
            >
              <Link href={url} target="_blank">
                <FullscreenIcon aria-hidden />
              </Link>
            </Button>

            <Button
              onClick={() => setCount(count + 1)}
              size="icon-sm"
              variant="outline"
            >
              <RotateCwIcon />
            </Button>
          </ButtonGroup>
        </div>
      </figcaption>

      <Resizable defaultSize={[100, 0]} panels={[{ id: "1" }, { id: "2" }]}>
        <ResizablePanel
          id="1"
          key={count}
          style={{
            width: MEDIA_QUERY[mediaQuery] === "mobile" ? "100%" : "50%",
          }}
        >
          {children}
        </ResizablePanel>

        <ResizableResizeTrigger id="1:2" withHandle />
        <ResizablePanel
          className="relative z-10 flex size-full after:absolute after:inset-0 after:right-3 after:z-0 after:bg-muted/48"
          id="2"
        />
      </Resizable>
    </figure>
  );
};
