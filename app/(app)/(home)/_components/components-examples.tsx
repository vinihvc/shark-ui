"use client";

import { AvatarGroupEmptyExample } from "@/components/examples/avatar-group-empty-example";
import { BrowserShareExample } from "@/components/examples/browser-share-example";
import { ButtonExample } from "@/components/examples/button-example";
import { ButtonGroupInputGroupExample } from "@/components/examples/button-group-input-group-example";
import { CalendarRangeExample } from "@/components/examples/calendar-range-example";
import { CommerceTableExample } from "@/components/examples/commerce-table-example";
import { ComputeEnvironmentExample } from "@/components/examples/compute-environment-example";
import { ExerciseMinutesChartExample } from "@/components/examples/exercise-minutes-chart-example";
import { FieldSliderExample } from "@/components/examples/field-slider-example";
import { FormControlsExample } from "@/components/examples/form-controls-example";
import { IconsGridExample } from "@/components/examples/icons-grid-example";
import { InputOTPExample } from "@/components/examples/input-otp-example";
import { ItemExample } from "@/components/examples/item-example";
import { LoginFormExample } from "@/components/examples/login-form-example";
import { StyleOverviewExample } from "@/components/examples/style-overview-example";
import { TabsExample } from "@/components/examples/tabs-example";
import { cn } from "@/lib/utils";
import { HomeExamplesTabGuard } from "./home-examples-tab-guard";

export const ComponentsExamples = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <HomeExamplesTabGuard>
      <div className={cn("sm:p-6", className)} {...rest}>
        <div className="columns-2 gap-6 lg:columns-3">
          {[
            <InputOTPExample key="input-otp" />,
            <FormControlsExample key="form-controls" />,
            <ButtonExample key="button" />,
            <IconsGridExample key="icons" />,
            <ButtonGroupInputGroupExample key="button-group" />,
            <ExerciseMinutesChartExample key="exercise" />,
            <FieldSliderExample key="field-slider" />,
            <ItemExample key="item" />,
            <StyleOverviewExample key="style" />,
            <TabsExample key="tabs" />,
            <CalendarRangeExample key="calendar" />,
            <BrowserShareExample key="browser-share" />,
            <ComputeEnvironmentExample key="compute" />,
            <CommerceTableExample key="commerce" />,
            <LoginFormExample key="login" />,
            <AvatarGroupEmptyExample key="avatar-group" />,
          ].map((example) => (
            <div
              className="mb-6 break-inside-avoid *:[div]:w-full *:[div]:max-w-full lg:*:[div]:max-w-xs"
              key={example.key}
            >
              {example}
            </div>
          ))}
        </div>
      </div>
    </HomeExamplesTabGuard>
  );
};
