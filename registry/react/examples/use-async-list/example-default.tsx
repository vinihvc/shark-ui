"use client";

import { Alert, AlertDescription } from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/registry/react/components/item";
import { Spinner } from "@/registry/react/components/spinner";
import { useAsyncList } from "@/registry/react/hooks/use-async-list";

interface Quote {
  author: string;
  id: number;
  quote: string;
}

const UseAsyncListDemo = () => {
  const list = useAsyncList<Quote>({
    autoReload: true,
    async load({ signal }) {
      const skip = Math.floor(Math.random() * 50);
      const response = await fetch(
        `https://dummyjson.com/quotes?limit=4&skip=${skip}`,
        { signal }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }
      const data: { quotes: Quote[] } = await response.json();
      return { items: data.quotes };
    },
  });

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Button
        className="self-start"
        disabled={list.loading}
        onClick={list.reload}
        type="button"
        variant="outline"
      >
        {!!list.loading && <Spinner />}
        {list.loading ? "Loading" : "Reload quotes"}
      </Button>
      {!!list.error && (
        <Alert role="alert" variant="destructive">
          <AlertDescription>{list.error.message}</AlertDescription>
        </Alert>
      )}
      <ItemGroup className="gap-2">
        {list.items.map((quote) => (
          <Item key={quote.id} role="listitem" variant="outline">
            <ItemContent>
              <ItemDescription className="line-clamp-none">
                “{quote.quote}”
              </ItemDescription>
              <ItemTitle>— {quote.author}</ItemTitle>
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
