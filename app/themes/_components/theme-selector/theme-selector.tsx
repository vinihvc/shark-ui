import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import { CardsButtons } from "../cards/cards.buttons";
import { ThemeCopy } from "./theme-selector.copy";
import { ThemeSelectorGray } from "./theme-selector.gray";
import { ThemeSelectorPrimary } from "./theme-selector.primary";
import { ThemeSelectorRadius } from "./theme-selector.radius";

export const ThemeSelector = (props: React.ComponentProps<typeof Card>) => (
  <div className="grid gap-4 lg:grid-cols-2">
    <Card {...props}>
      <CardHeader
        description="Select a theme to preview"
        title="Theme Selector"
      >
        <CardAction>
          <ThemeCopy />
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

    <CardsButtons />
  </div>
);
