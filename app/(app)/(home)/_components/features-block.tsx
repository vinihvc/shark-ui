import {
  FocusIcon,
  KeyboardIcon,
  MonitorIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import { CodeBlock } from "@/components/code-block";

const accessibilityCode = `import { AccordionRoot, AccordionItem } from "@/registry/react/components/accordion"

<AccordionRoot>
  {/* css */}
  <AccordionItem className="AccordionItem" />
  {/* tailwind */}
  <AccordionItem className="bg-white px-4 py-2" />
</AccordionRoot>`;

export const FeaturesBlock = () => {
  return (
    <section className="container w-full px-4 py-12 md:px-6 md:py-24">
      <div className="grid grid-cols-1 gap-y-4 md:h-144 lg:h-96 lg:grid-cols-5 lg:gap-4">
        <div className="relative col-span-3 flex flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-sm/5 md:p-10">
          <div className="font-bold text-lg">Accessibility out of the box.</div>
          <div className="text-muted-foreground">
            Supports assistive technology
          </div>
          <Image
            alt=""
            className="absolute -bottom-40 -left-40 w-[1000px] max-w-none -scale-y-100"
            height={400}
            src="/bg.svg"
            width={1000}
          />
          <div className="relative mt-6 flex h-full w-full flex-col items-start justify-center gap-2 md:mt-0 md:items-center">
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-5 py-2.5 font-medium text-muted-foreground text-sm backdrop-blur-lg md:absolute md:-translate-x-40 md:translate-y-0">
              <ShieldCheckIcon
                aria-hidden
                className="size-5 shrink-0 text-primary text-xl"
              />
              <span>WAI-ARIA compliant</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-5 py-2.5 font-medium text-muted-foreground text-sm backdrop-blur-lg md:absolute md:translate-x-28 md:-translate-y-16">
              <KeyboardIcon
                aria-hidden
                className="size-5 shrink-0 text-primary text-xl"
              />
              <span>Keyboard navigation</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-5 py-2.5 font-medium text-muted-foreground text-sm backdrop-blur-lg md:absolute md:-translate-x-20 md:translate-y-16">
              <FocusIcon
                aria-hidden
                className="size-5 shrink-0 text-primary text-xl"
              />
              <span>Focus management</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-5 py-2.5 font-medium text-muted-foreground text-sm backdrop-blur-lg md:absolute md:translate-x-44 md:translate-y-4">
              <MonitorIcon
                aria-hidden
                className="size-5 shrink-0 text-primary text-xl"
              />
              <span>Screen reader support</span>
            </div>
          </div>
          <div />
        </div>
        <div className="relative col-span-2 h-88 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm/5 md:h-auto md:p-10">
          <div>
            <div className="font-bold text-lg">Save time. Ship faster.</div>
            <div className="text-muted-foreground">
              40+ Primitive Components
            </div>
          </div>
          <div className="absolute top-12 left-1/2 flex w-full -translate-x-1/2 flex-col items-center justify-center">
            <Image
              alt=""
              className="w-[300px]"
              draggable={false}
              height={120}
              src="/lightning.svg"
              width={300}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-y-4 md:h-144 lg:h-96 lg:grid-cols-5 lg:gap-4">
        <div className="relative col-span-2 h-96 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm/5 md:h-auto md:p-10">
          <div className="absolute flex w-full flex-col">
            <div className="z-10 font-bold text-lg">
              Developer Experience First.
            </div>
            <div className="text-muted-foreground">
              Unstyled, Customizable, Familiar API
            </div>
            <div className="relative mt-8 h-full w-full **:data-rehype-pretty-code-figure:mt-0!">
              <CodeBlock
                code={accessibilityCode}
                copyButton={false}
                lang="tsx"
              />
            </div>
          </div>
        </div>
        <div className="relative col-span-3 h-80 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm/5 md:h-auto md:p-10">
          <div className="absolute z-10">
            <div className="font-bold text-white text-xl">
              Ready for an international audience
            </div>
            <div className="text-muted-foreground">
              RTL support, Locale, Numbering System
            </div>
          </div>
          <Image
            alt=""
            className="absolute bottom-0 hue-rotate-220 saturate-[1.2] md:top-0 md:left-48 md:scale-[1.75] dark:mix-blend-lighten"
            draggable={false}
            height={400}
            src="/globe.svg"
            width={600}
          />
        </div>
      </div>
    </section>
  );
};
