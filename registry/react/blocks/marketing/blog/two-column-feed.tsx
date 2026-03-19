import { Badge } from "@/registry/react/components/badge";
import { Card, CardContent, CardMedia } from "@/registry/react/components/card";

const posts = [
  { title: "Getting started with our platform", tag: "Guide", image: true },
  { title: "Building scalable applications", tag: "Tutorial", image: true },
];

const TwoColumnFeed = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posts.map((post) => (
        <Card key={post.title}>
          <CardMedia className="aspect-video" variant="image">
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-muted-foreground text-sm">Image</span>
            </div>
          </CardMedia>
          <CardContent className="pt-4">
            <Badge className="mb-2" variant="secondary">
              {post.tag}
            </Badge>
            <h3 className="font-semibold text-foreground">{post.title}</h3>
            <p className="mt-1 text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TwoColumnFeed;
