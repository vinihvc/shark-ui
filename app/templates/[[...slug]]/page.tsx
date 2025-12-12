import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplatesPageImage, templatesSource } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export const generateStaticParams = () => templatesSource.generateParams();

export const generateMetadata = async (
  props: PageProps<"/templates/[[...slug]]">
): Promise<Metadata> => {
  const params = await props.params;

  const page = templatesSource.getPage(params.slug);

  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getTemplatesPageImage(page).url,
    },
  };
};

const TemplatesPage = async (props: PageProps<"/templates/[[...slug]]">) => {
  const params = await props.params;
  const page = templatesSource.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <div className="container px-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="scroll-m-20 font-semibold text-4xl tracking-tight sm:text-3xl xl:text-4xl">
            {page.data.title}
          </h1>

          {page.data.description && (
            <p className="text-muted-foreground">{page.data.description}</p>
          )}
        </div>
      </div>
      <div className="prose w-full flex-1 *:data-[part=alert]:first:mt-0">
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(templatesSource, page),
          })}
        />
      </div>
    </div>
  );
};

export default TemplatesPage;
