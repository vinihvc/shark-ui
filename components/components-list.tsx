import Link from "fumadocs-core/link";

const COMPONENTS_LIST = [
  {
    name: "Avatar",
    href: "/avatar",
  },
  {
    name: "Tooltip",
    href: "/tooltip",
  },
];

export const ComponentsList = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
    {COMPONENTS_LIST.map((item) => (
      <Link
        className="inline-flex items-center gap-2 font-medium text-lg underline-offset-4 hover:underline md:text-base"
        href={`/docs/components/${item.href}`}
        key={item.name}
      >
        {item.name}
      </Link>
    ))}
  </div>
);
