import {
  Avatar,
  AvatarFallback,
} from "@/registry/react/components/avatar";

const team = [
  { name: "Leslie Alexander", role: "Co-Founder", image: "" },
  { name: "Michael Foster", role: "Design Lead", image: "" },
  { name: "Dries Vincent", role: "Developer", image: "" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n.at(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);

const TeamGridBackground = () => {
  return (
    <div className="rounded-xl border bg-card p-8">
      <div
        aria-hidden
        className="mb-8 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50"
      />
      <h2 className="mb-6 text-center font-bold text-2xl tracking-tight text-foreground">
        Our team
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center gap-2 text-center"
          >
            <Avatar className="size-16" size="lg">
              <AvatarFallback>{initials(member.name)}</AvatarFallback>
            </Avatar>
            <p className="font-medium text-foreground">{member.name}</p>
            <p className="text-muted-foreground text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGridBackground;
