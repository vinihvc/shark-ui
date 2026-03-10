import { EnvironmentSettings } from "@/components/examples/appearance-settings-demo";
import { ButtonDemo } from "@/components/examples/button-demo";
import { ButtonGroupInputGroup } from "@/components/examples/button-group-input-group-demo";
import { CalendarDemo } from "@/components/examples/calendar-demo";
import { ControlsDemo } from "@/components/examples/controls-demo";
import { EmptyAvatarGroup } from "@/components/examples/empty-avatar-group-demo";
import { FieldCheckbox } from "@/components/examples/field-checkbox-demo";
import { FieldSlider } from "@/components/examples/field-slider-demo";
import { InputOtpDemo } from "@/components/examples/input-otp-demo";
import { ItemDemo } from "@/components/examples/item-demo";
import { LoginDemo } from "@/components/examples/login-demo";
import { TabsDemo } from "@/components/examples/tabs-demo";
import { cn } from "@/lib/utils";

export const ComponentsExamples = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("grid grid-cols-3 gap-6 p-6", className)}
      inert
      {...rest}
    >
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
        <InputOtpDemo />
        <ControlsDemo />
        <ButtonDemo />
        <ButtonGroupInputGroup />
        <LoginDemo />
      </div>
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
        <CalendarDemo />
        <TabsDemo />
        <ItemDemo />
        <EmptyAvatarGroup />
        <FieldCheckbox />
      </div>
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
        <EnvironmentSettings />
        <FieldSlider />
      </div>
    </div>
  );
};
