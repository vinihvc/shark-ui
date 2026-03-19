import {
  Avatar,
  AvatarFallback,
} from "@/registry/react/components/avatar";

const GradientPanel = () => {
  return (
    <div className="rounded-xl border bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
      <Avatar className="mx-auto size-16" size="lg">
        <AvatarFallback>SJ</AvatarFallback>
      </Avatar>
      <blockquote className="mt-4 font-medium italic text-foreground">
        &ldquo;This platform has completely transformed how we work. The results
        speak for themselves.&rdquo;
      </blockquote>
      <p className="mt-2 font-medium text-foreground">Sarah Johnson</p>
      <p className="text-muted-foreground text-sm">CEO at Acme Inc</p>
      <div className="mt-4 flex justify-center gap-1">
        {[true, false, false].map((active, i) => (
          <div
            key={i}
            className={`size-2 rounded-full ${active ? "bg-primary" : "bg-muted-foreground/32"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GradientPanel;
