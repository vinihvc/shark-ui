import { BotIcon } from "lucide-react";
import { ReactHookFormIcon } from "@/components/icons/react-hook-form";
import { TanstackFormIcon } from "@/components/icons/tanstack-form";
import { NavLink } from "@/components/nav-link";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const FormsList = () => (
  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {FORM_LIBRARIES.map((library) => (
      <Item asChild className="[--space:--spacing(4)]" key={library.name}>
        <NavLink
          className="w-full border-input transition-all"
          href={library.href}
        >
          <ItemMedia>{library.icon}</ItemMedia>
          <ItemContent>
            <ItemTitle>{library.name}</ItemTitle>
          </ItemContent>
        </NavLink>
      </Item>
    ))}
  </div>
);

const FORM_LIBRARIES = [
  {
    href: "/docs/forms/react-hook-form",
    icon: <ReactHookFormIcon className="size-8" />,
    name: "React Hook Form",
  },
  {
    href: "/docs/forms/tanstack-form",
    icon: <TanstackFormIcon className="size-8" />,
    name: "TanStack Form",
  },
  {
    href: "/docs/forms/formisch",
    icon: <BotIcon className="size-8 stroke-[1.5px]" />,
    name: "Formisch",
  },
];
