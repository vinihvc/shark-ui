import { ActivityGoalExample } from "@/components/examples/activity-goal-example";
import { CalendarRangeCardExample } from "@/components/examples/calendar-range-card-example";
import { ChatCardExample } from "@/components/examples/chat-card-example";
import { CookieSettingsExample } from "@/components/examples/cookie-settings-example";
import { CreateAccountFormExample } from "@/components/examples/create-account-form-example";
import { ExerciseMinutesChartExample } from "@/components/examples/exercise-minutes-chart-example";
import { PaymentsTableExample } from "@/components/examples/payments-table-example";
import { SubscriptionUpgradeExample } from "@/components/examples/subscription-upgrade-example";
import { TeamMembersCardExample } from "@/components/examples/team-members-card-example";
import { cn } from "@/lib/utils";

export const CardsDemo = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "md:grids-col-2 grid **:data-[slot=card]:shadow-none md:gap-4 lg:grid-cols-10 xl:grid-cols-11",
        className
      )}
      {...rest}
    >
      <div className="grid gap-4 lg:col-span-4 xl:col-span-6">
        <div className="grid gap-1 sm:grid-cols-[auto_1fr] md:hidden">
          <div className="hidden sm:flex">
            <CalendarRangeCardExample />
          </div>
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-4">
            <ActivityGoalExample />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SubscriptionUpgradeExample />
            <TeamMembersCardExample />
          </div>
          <div className="flex flex-col gap-4">
            <CreateAccountFormExample />
            <ChatCardExample />
            <div className="hidden xl:block">
              <CookieSettingsExample />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-6 xl:col-span-5">
        <div className="hidden gap-1 sm:grid-cols-[auto_1fr] md:grid">
          <CalendarRangeCardExample />
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-3">
            <ActivityGoalExample />
          </div>
        </div>
        <div className="hidden md:block">
          <PaymentsTableExample />
        </div>

        <div className="hidden md:block">
          <ExerciseMinutesChartExample />
        </div>

        <div className="xl:hidden">
          <CookieSettingsExample />
        </div>
      </div>
    </div>
  );
};
