import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";
import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";

const FILES: Record<string, string> = {
  "package.json": `{
  "name": "my-app",
  "scripts": {
    "test": "vitest"
  }
}`,
  "src/app.tsx": `export function App() {
  return <form>Contact</form>;
}`,
  "src/utils/helpers.ts": `export function isValidEmail(email: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}`,
};

const TERMINAL_OUTPUT = [
  "\u001B[34mRunning tests...\u001B[0m",
  " \u001B[32m✓\u001B[0m validateForm › invalid email",
  " \u001B[32m✓\u001B[0m validateForm › valid input",
  "\u001B[32mAll tests passed!\u001B[0m",
].join("\n");

interface IdeWorkspaceProps {
  path: string;
}

export const IdeWorkspace = ({ path }: IdeWorkspaceProps) => {
  const code = FILES[path] ?? FILES["src/utils/helpers.ts"];

  return (
    <Resizable
      className="h-full min-h-0"
      defaultSize={[62, 38]}
      orientation="vertical"
      panels={[
        { id: "editor", minSize: 20 },
        { id: "terminal", minSize: 18 },
      ]}
    >
      <ResizablePanel className="min-h-0" id="editor">
        <CodeBlock className="h-full rounded-none border-0" code={code}>
          <CodeBlockHeader>
            <CodeBlockTitle>{path}</CodeBlockTitle>
            <CodeBlockCopy />
          </CodeBlockHeader>
          <CodeBlockContent className="max-h-none" showLineNumbers>
            {code}
          </CodeBlockContent>
        </CodeBlock>
      </ResizablePanel>
      <ResizableResizeTrigger id="editor:terminal" />
      <ResizablePanel className="min-h-0" id="terminal">
        <Terminal className="h-full rounded-none border-0 border-t">
          <TerminalHeader>zsh · pnpm test</TerminalHeader>
          <TerminalContent className="max-h-none" output={TERMINAL_OUTPUT} />
        </Terminal>
      </ResizablePanel>
    </Resizable>
  );
};
