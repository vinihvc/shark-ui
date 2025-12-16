"use client";

import { ChevronDown } from "lucide-react";
import { PRIMARY_COLORS } from "@/lib/themes";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import { useConfig } from "@/store/config";

export const ThemeCopy = (props: React.ComponentProps<typeof ButtonGroup>) => {
  const [config] = useConfig();

  const colorLabel =
    PRIMARY_COLORS.find((item) => item.value === config.primaryColor)?.label ??
    config.primaryColor;

  return (
    <ButtonGroup {...props}>
      <Clipboard value="a">
        <ClipboardTrigger asChild>
          <Button
            className="rounded-r-none rounded-l-md"
            size="icon-sm"
            variant="outline"
          >
            <ClipboardIndicator />

            <span className="sr-only">Copy</span>
          </Button>
        </ClipboardTrigger>
      </Clipboard>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="outline">
            Open theme <ChevronDown className="opacity-50" />
          </Button>
        </DialogTrigger>

        <DialogContent size="2xl">
          <DialogHeader
            description="Copy the CSS variables for this theme to use in your project."
            title={`${colorLabel} Color CSS`}
          />

          <DialogBody>
            {/* <DynamicCodeBlock code={colorCSS[color]} lang="css" /> */}
          </DialogBody>
        </DialogContent>
      </Dialog>
    </ButtonGroup>
  );
};
