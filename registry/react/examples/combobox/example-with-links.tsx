"use client";

import { useRouter } from "next/navigation";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

interface DocItem {
  label: string;
  value: string;
  href: string;
}

const items: DocItem[] = [
  { label: "Getting Started", value: "getting-started", href: "/docs" },
  { label: "Components", value: "components", href: "/docs/components" },
  { label: "Theming", value: "theming", href: "/docs/theming" },
  { label: "Accessibility", value: "accessibility", href: "/docs/a11y" },
];

const ComboboxWithLinksDemo = () => {
  const router = useRouter();

  return (
    <Combobox
      className="w-64"
      items={items}
      itemToString={(item) => item.label}
      itemToValue={(item) => item.value}
      onSelect={({ itemValue }) => {
        const item = items.find((i) => i.value === itemValue);
        if (item) {
          router.push(item.href);
        }
      }}
    >
      <ComboboxInput placeholder="Search documentation..." />
      <ComboboxContent>
        <ComboboxList>
          {(item) => (
            <ComboboxItem item={item} key={item.value}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default ComboboxWithLinksDemo;
