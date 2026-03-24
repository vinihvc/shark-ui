import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { Prose } from "@/registry/react/components/prose";
import { Separator } from "@/registry/react/components/separator";

export const metadata: Metadata = createMetadata({
  title: "Blog Template",
  description:
    "MDX-powered blog with responsive design, SEO metadata, and dynamic Open Graph images.",
  url: "/templates/blog",
});

const POSTS = [
  {
    slug: "getting-started",
    title: "Getting started with the design system",
    excerpt: "Learn the fundamentals and set up your first project in minutes.",
    date: "2025-03-01",
  },
  {
    slug: "component-patterns",
    title: "Component patterns and best practices",
    excerpt: "Explore common patterns for building consistent interfaces.",
    date: "2025-03-05",
  },
  {
    slug: "theming",
    title: "Theming and customization",
    excerpt: "Customize colors, typography, and spacing to match your brand.",
    date: "2025-03-10",
  },
];

const BlogTemplatePage = () => {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="container flex h-16 items-center justify-between">
        <Link className="font-semibold" href="#">
          Blog
        </Link>
        <nav className="flex gap-4">
          <Link
            className="text-muted-foreground text-sm hover:text-foreground"
            href="#"
          >
            All posts
          </Link>
        </nav>
      </header>

      <main className="container flex flex-1 flex-col gap-12 py-12">
        <div>
          <h1 className="font-bold text-3xl tracking-tight">Latest posts</h1>
          <p className="mt-2 text-muted-foreground">
            Insights and updates from the team.
          </p>
        </div>

        <Separator />

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-8">
            {POSTS.map((post) => (
              <Card key={post.slug}>
                <CardHeader>
                  <CardTitle>
                    <Link className="hover:underline" href={`#${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                  <p className="text-muted-foreground text-xs">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <Button asChild size="sm" variant="ghost">
                    <Link href={`#${post.slug}`}>Read more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <aside className="hidden lg:block">
            <Card>
              <CardHeader>
                <CardTitle className="font-medium text-base">About</CardTitle>
                <CardDescription>
                  A blog template built with accessible components. Perfect for
                  documentation, changelogs, and updates.
                </CardDescription>
              </CardHeader>
            </Card>
          </aside>
        </div>

        <Separator />

        <Prose className="max-w-none">
          <h2 id="getting-started">Getting started with the design system</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <h3>Installation</h3>
          <p>
            Add the package to your project using your preferred package
            manager. Configure your theme and start building.
          </p>
          <h3>Next steps</h3>
          <p>
            Explore the component library, customize tokens, and integrate with
            your existing design system.
          </p>
        </Prose>
      </main>

      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between">
          <span className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Blog. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default BlogTemplatePage;
