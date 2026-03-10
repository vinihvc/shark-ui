import { cn } from "@/lib/utils";
import { CardsExerciseMinutes } from "./card.exercise-minutes";
import { CardsPayments } from "./card.payments";
import { CardsActivityGoal } from "./cards.activity";
import { CardsCalendar } from "./cards.calendar";
import { CardsChat } from "./cards.chat";
import { CardsCookie } from "./cards.cookie";
import { CardsCreateAccount } from "./cards.create-account";
import { CardsForms } from "./cards.forms";
import { CardsTeamMembers } from "./cards.members";

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
            <CardsCalendar />
          </div>
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-4">
            <CardsActivityGoal />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <CardsForms />
            <CardsTeamMembers />
          </div>
          <div className="flex flex-col gap-4">
            <CardsCreateAccount />
            <CardsChat />
            <div className="hidden xl:block">
              <CardsCookie />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-6 xl:col-span-5">
        <div className="hidden gap-1 sm:grid-cols-[auto_1fr] md:grid">
          <CardsCalendar />
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-3">
            <CardsActivityGoal />
          </div>
        </div>
        <div className="hidden md:block">
          <CardsPayments />
        </div>

        <div className="hidden md:block">
          <CardsExerciseMinutes />
        </div>

        <div className="xl:hidden">
          <CardsCookie />
        </div>
      </div>
    </div>
  );
};
