import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";

const Example = () => (
  <CodeBlock className="max-w-lg" code={CODE}>
    <CodeBlockHeader>
      <CodeBlockTitle>src/utils/helpers.ts</CodeBlockTitle>
      <CodeBlockCopy />
    </CodeBlockHeader>
    <CodeBlockContent showLineNumbers>{CODE}</CodeBlockContent>
  </CodeBlock>
);

const CODE = `export function isValidEmail(email: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}`;

export default Example;
