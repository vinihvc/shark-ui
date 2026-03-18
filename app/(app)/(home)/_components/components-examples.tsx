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
import { InputOtpExample } from "@/components/examples/input-otp-example";
import { ItemExample } from "@/components/examples/item-example";
import { LoginFormExample } from "@/components/examples/login-form-example";
import { StyleOverviewExample } from "@/components/examples/style-overview-example";
import { TabsExample } from "@/components/examples/tabs-example";
import { cn } from "@/lib/utils";

export const ComponentsExamples = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "grid gap-6 sm:p-6 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...rest}
    >
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full lg:*:[div]:max-w-xs">
        <InputOtpExample />
        <FormControlsExample />
        <ButtonExample />
        <IconsGridExample />
        <ButtonGroupInputGroupExample />
        <ExerciseMinutesChartExample />
        <FieldSliderExample />
        <ItemExample />
        <LoginFormExample className="flex lg:hidden" />
        <AvatarGroupEmptyExample className="flex lg:hidden" />
      </div>
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full lg:*:[div]:max-w-xs">
        <StyleOverviewExample />
        <TabsExample />
        <CalendarRangeExample />
        <BrowserShareExample />
        <ComputeEnvironmentExample className="flex lg:hidden" />
        <CommerceTableExample className="flex lg:hidden" />
      </div>
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full lg:*:[div]:max-w-xs">
        <ComputeEnvironmentExample className="hidden lg:flex" />
        <CommerceTableExample className="hidden lg:flex" />
        <LoginFormExample className="hidden lg:flex" />
        <AvatarGroupEmptyExample className="hidden lg:flex" />
      </div>
    </div>
  );
};
