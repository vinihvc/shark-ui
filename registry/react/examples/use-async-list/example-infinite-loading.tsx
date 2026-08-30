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

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const UseAsyncListDemo = () => {
  const list = useAsyncList<Post, number>({
    autoReload: true,
    async load({ cursor, signal }) {
      const page = cursor ?? 1;
      const start = (page - 1) * LIMIT;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${LIMIT}`,
        { signal }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const posts: Post[] = await response.json();
      return {
        cursor: posts.length === LIMIT ? page + 1 : undefined,
        items: posts,
      };
    },
  });

  const handleLoadMore = () => {
    if (list.hasMore) {
      list.loadMore();
    } else {
      list.reload();
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <output className="text-muted-foreground text-sm">
          Loaded {list.items.length} posts
        </output>
        {!!(list.hasMore || list.error) && (
          <Button
            disabled={list.loading}
            onClick={handleLoadMore}
            size="sm"
            type="button"
            variant="outline"
          >
            {!!list.loading && <Spinner />}
            {list.error ? "Retry" : "Load more"}
          </Button>
        )}
      </div>
      {!!list.error && (
        <Alert role="alert" variant="destructive">
          <AlertDescription>{list.error.message}</AlertDescription>
        </Alert>
      )}
      {!!list.loading && (
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Spinner /> Loading
        </div>
      )}
      <ItemGroup className="max-h-80 gap-2 overflow-y-auto">
        {list.items.map((post) => (
          <Item key={post.id} role="listitem" variant="outline">
            <ItemContent>
              <ItemTitle className="line-clamp-none">{post.title}</ItemTitle>
              <ItemDescription className="line-clamp-none">
                {post.body}
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
      {!(list.loading || list.error) && !!list.empty && (
        <p className="text-muted-foreground text-sm">No results found.</p>
      )}
      {!(list.loading || list.error || list.empty || list.hasMore) && (
        <p className="text-muted-foreground text-xs">All posts loaded.</p>
      )}
    </div>
  );
};

const LIMIT = 4;

export default UseAsyncListDemo;
