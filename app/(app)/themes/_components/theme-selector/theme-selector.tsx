import { ClipboardIcon } from "lucide-react";
import { CopyThemeCodeDialog } from "@/components/dialog/copy-theme";
import { ButtonVariantsExample } from "@/components/examples/button-variants-example";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import { ThemeSelectorGray } from "./theme-selector.gray";
import { ThemeSelectorPrimary } from "./theme-selector.primary";
import { ThemeSelectorRadius } from "./theme-selector.radius";

export const ThemeSelector = (props: React.ComponentProps<typeof Card>) => {
  const { children, ...rest } = props;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card {...rest}>
        <CardHeader
          description="Select a theme to preview"
          title="Theme Selector"
        >
          <CardAction>
            <CopyThemeCodeDialog>
              <Button size="sm" variant="outline">
                <ClipboardIcon />
                Copy theme
              </Button>
            </CopyThemeCodeDialog>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <ThemeSelectorGray />
            <ThemeSelectorPrimary />
            <ThemeSelectorRadius />
          </div>
        </CardContent>
      </Card>

      <ButtonVariantsExample />
    </div>
  );
};
