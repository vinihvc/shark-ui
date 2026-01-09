"use client";

import { Computer, Fullscreen, Phone, RotateCw, Tablet } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/registry/react/components/splitter";

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

export const ComponentResizer = (props: ComponentResizerProps) => {
  const { title, url, className, children, ...rest } = props;

  const [mediaQuery, setMediaQuery] = React.useState<
    "mobile" | "tablet" | "desktop"
  >("desktop");

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
              onClick={() => setMediaQuery("desktop")}
              size="icon-sm"
              variant="outline"
            >
              <Computer />
            </Button>

            <Button
              onClick={() => setMediaQuery("tablet")}
              size="icon-sm"
              variant="outline"
            >
              <Tablet />
            </Button>

            <Button
              onClick={() => setMediaQuery("mobile")}
              size="icon-sm"
              variant="outline"
            >
              <Phone />
            </Button>

            <Button asChild size="icon-sm" variant="outline">
              <Link href={url} target="_blank">
                <Fullscreen />
              </Link>
            </Button>

            <Button
              onClick={() => setCount(count + 1)}
              size="icon-sm"
              variant="outline"
            >
              <RotateCw />
            </Button>
          </ButtonGroup>
        </div>
      </figcaption>

      <Splitter defaultSize={[100, 0]} panels={[{ id: "1" }, { id: "2" }]}>
        <SplitterPanel
          id="1"
          key={count}
          style={{
            width: MEDIA_QUERY[mediaQuery] === "mobile" ? "100%" : "50%",
          }}
        >
          {children}
        </SplitterPanel>

        <SplitterResizeTrigger id="1:2" withHandle />
        <SplitterPanel
          className="relative z-10 flex h-full w-full after:absolute after:inset-0 after:right-3 after:z-0 after:bg-muted/50"
          id="2"
        />
      </Splitter>
    </figure>
  );
};
