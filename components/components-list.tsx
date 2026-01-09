import Link from "fumadocs-core/link";
import React from "react";
import { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";

interface ComponentsListProps extends React.ComponentProps<"div"> {}

export const ComponentsList = (props: ComponentsListProps) => {
  const { className, ...rest } = props;

  const pageTree = source.pageTree;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20",
        className
      )}
      {...rest}
    >
      {pageTree.children.map((group) => (
        <React.Fragment key={group.$id}>
          {group.type === "folder" &&
            group.children.map((item) => {
              if (item.type === "page") {
                return (
                  <Link href={item.url} key={item.url}>
                    {item.name}
                  </Link>
                );
              }

              return null;
            })}
        </React.Fragment>
      ))}
    </div>
  );
};
