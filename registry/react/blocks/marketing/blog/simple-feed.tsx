import { Badge } from "@/registry/react/components/badge";
import { Card, CardContent } from "@/registry/react/components/card";

const posts = [
  { title: "Getting started with our platform", tag: "Guide", date: "Mar 15" },
  { title: "Building scalable applications", tag: "Tutorial", date: "Mar 12" },
  { title: "Understanding the core concepts", tag: "Guide", date: "Mar 8" },
];

const SimpleFeed = () => {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Card key={post.title}>
          <CardContent className="flex flex-col gap-2 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{post.tag}</Badge>
              <span className="text-muted-foreground text-sm">{post.date}</span>
            </div>
            <h3 className="font-semibold text-foreground">{post.title}</h3>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SimpleFeed;
