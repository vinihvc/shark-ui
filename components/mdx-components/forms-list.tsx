import { ReactHookFormIcon } from "@/components/icons/react-hook-form";
import { TanstackFormIcon } from "@/components/icons/tanstack-form";
import { NavLink } from "@/components/nav-link";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const FormsList = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {FORM_LIBRARIES.map((library) => (
        <Item asChild key={library.name}>
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
};

const FORM_LIBRARIES = [
  {
    name: "React Hook Form",
    href: "/docs/forms/react-hook-form",
    icon: <ReactHookFormIcon className="size-10" />,
  },
  {
    name: "TanStack Form",
    href: "/docs/forms/tanstack-form",
    icon: <TanstackFormIcon className="size-10" />,
  },
];
