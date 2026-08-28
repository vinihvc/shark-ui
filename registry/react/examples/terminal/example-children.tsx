import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";

const Example = () => (
  <Terminal className="max-w-lg">
    <TerminalHeader>zsh · vercel --prod</TerminalHeader>
    <TerminalContent>
      <span className="text-muted-foreground">{"$ vercel --prod\n\n"}</span>
      {"Production: "}
      <a
        className="text-info-foreground underline underline-offset-2"
        href="https://shark.vini.one"
        rel="noreferrer"
        target="_blank"
      >
        https://shark.vini.one
      </a>
      {"\n\n"}
      <span className="text-success">✓</span>
      {" Ready"}
    </TerminalContent>
  </Terminal>
);

export default Example;
