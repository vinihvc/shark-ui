import { AvatarGroupEmptyExample } from "@/components/examples/avatar-group-empty-example";
import { ButtonExample } from "@/components/examples/button-example";
import { ButtonGroupInputGroupExample } from "@/components/examples/button-group-input-group-example";
import { CalendarRangeExample } from "@/components/examples/calendar-range-example";
import { ComputeEnvironmentExample } from "@/components/examples/compute-environment-example";
import { ExerciseMinutesChartExample } from "@/components/examples/exercise-minutes-chart-example";
import { FieldSliderExample } from "@/components/examples/field-slider-example";
import { FormControlsExample } from "@/components/examples/form-controls-example";
import { InputOtpExample } from "@/components/examples/input-otp-example";
import { ItemExample } from "@/components/examples/item-example";
import { LoginFormExample } from "@/components/examples/login-form-example";
import { TabsExample } from "@/components/examples/tabs-example";
import { cn } from "@/lib/utils";

export const ComponentsExamples = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 sm:p-6 lg:grid-cols-3",
        className
      )}
      {...rest}
    >
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
        <InputOtpExample />
        <FormControlsExample />
        <ButtonExample />
        <ButtonGroupInputGroupExample />
        <ExerciseMinutesChartExample />
      </div>
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
        <CalendarRangeExample />
        <TabsExample />
        <ItemExample />
        <AvatarGroupEmptyExample />
        <FieldSliderExample />
      </div>
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
        <ComputeEnvironmentExample />
        <LoginFormExample />
      </div>
    </div>
  );
};
