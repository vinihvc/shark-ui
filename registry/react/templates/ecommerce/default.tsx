import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Ecommerce Template",
  description:
    "Online store with product grid, cart, checkout, and product detail pages.",
  url: "/templates/ecommerce",
});

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardMedia,
} from "@/registry/react/components/card";
import { Input } from "@/registry/react/components/input";
import { Separator } from "@/registry/react/components/separator";

const PRODUCTS = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "$99",
    image: "/images/placeholder.svg",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: "$249",
    image: "/images/placeholder.svg",
  },
  {
    id: "3",
    name: "Portable Speaker",
    price: "$79",
    image: "/images/placeholder.svg",
  },
  {
    id: "4",
    name: "USB-C Hub",
    price: "$45",
    image: "/images/placeholder.svg",
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    price: "$149",
    image: "/images/placeholder.svg",
  },
  {
    id: "6",
    name: "Ergonomic Mouse",
    price: "$59",
    image: "/images/placeholder.svg",
  },
];

const EcommerceTemplate = () => (
  <div className="flex min-h-svh flex-col">
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex h-16 items-center gap-6">
        <Link className="font-semibold" href="#">
          Store
        </Link>
        <div className="relative max-w-sm flex-1">
          <SearchIcon
            aria-hidden
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            className="pl-9"
            placeholder="Search products..."
            type="search"
          />
        </div>
        <Button asChild size="icon-md" variant="ghost">
          <Link aria-label="Shopping cart" href="#">
            <ShoppingCartIcon aria-hidden className="size-5" />
          </Link>
        </Button>
      </div>
    </header>

    <main className="container flex flex-1 flex-col gap-8 py-8">
      <div>
        <h1 className="font-bold text-2xl tracking-tight">Products</h1>
        <p className="mt-1 text-muted-foreground">
          Browse our collection of premium products.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <Card key={product.id}>
            <CardMedia variant="image">
              <div className="relative aspect-square">
                <Image
                  alt={product.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={product.image}
                />
              </div>
            </CardMedia>
            <CardContent className="flex flex-col gap-2 pt-4">
              <h3 className="font-semibold">{product.name}</h3>
              <span className="font-medium text-primary">{product.price}</span>
            </CardContent>
            <CardFooter className="pt-0">
              <Button asChild className="w-full">
                <Link href="#">Add to cart</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>

    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between">
        <span className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Store. All rights reserved.
        </span>
      </div>
    </footer>
  </div>
);

export default EcommerceTemplate;
