"use client";

import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";
import { FormatNumber } from "@/registry/react/components/format";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import { Spinner } from "@/registry/react/components/spinner";
import { useAsyncList } from "@/registry/react/hooks/use-async-list";

interface Product {
  id: number;
  image: string;
  price: number;
  title: string;
}

const UseAsyncListDemo = () => {
  const list = useAsyncList<Product>({
    autoReload: true,
    initialSortDescriptor: { column: "id", direction: "ascending" },
    async load({ sortDescriptor, signal }) {
      const url = new URL("https://fakestoreapi.com/products");
      url.searchParams.set("limit", "5");
      url.searchParams.set(
        "sort",
        sortDescriptor?.direction === "descending" ? "desc" : "asc"
      );
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const items: Product[] = await response.json();
      return { items };
    },
  });
  const descending = list.sortDescriptor?.direction === "descending";
  const handleSort = () =>
    list.sort({
      column: "id",
      direction: descending ? "ascending" : "descending",
    });

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Button
        className="self-start"
        disabled={list.loading}
        onClick={handleSort}
        type="button"
        variant="outline"
      >
        Sort products
        {descending ? (
          <ArrowDownIcon aria-hidden="true" className="size-4" />
        ) : (
          <ArrowUpIcon aria-hidden="true" className="size-4" />
        )}
      </Button>
      <output className="text-muted-foreground text-sm">
        Order: {descending ? "Descending" : "Ascending"}
      </output>
      {!!list.loading && (
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Spinner /> Loading
        </div>
      )}
      {!!list.error && (
        <Alert role="alert" variant="destructive">
          <AlertDescription>{list.error.message}</AlertDescription>
        </Alert>
      )}
      <ItemGroup className="gap-2">
        {list.items.map((product) => (
          <Item key={product.id} role="listitem" variant="outline">
            <ItemMedia variant="image">
              <img
                alt={product.title}
                className="object-contain!"
                height={40}
                loading="lazy"
                src={product.image}
                width={40}
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-2">{product.title}</ItemTitle>
              <ItemDescription>
                <FormatNumber
                  currency="USD"
                  style="currency"
                  value={product.price}
                />
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
      {!(list.loading || list.error) && !!list.empty && (
        <p className="text-muted-foreground text-sm">No results found.</p>
      )}
    </div>
  );
};

export default UseAsyncListDemo;
