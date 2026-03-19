const links = {
  product: ["Features", "Pricing", "Docs"],
  company: ["About", "Blog", "Careers"],
  legal: ["Privacy", "Terms"],
};

const MinimalGreyWithLinks = () => {
  return (
    <div className="rounded-xl border bg-muted/48 px-6 py-12">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <span className="font-semibold text-foreground">Logo</span>
        <div className="flex gap-12">
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="mb-2 font-medium capitalize text-foreground">
                {title}
              </p>
              <ul className="flex flex-col gap-1">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      className="text-muted-foreground text-sm hover:text-foreground"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between border-t pt-8">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MinimalGreyWithLinks;
