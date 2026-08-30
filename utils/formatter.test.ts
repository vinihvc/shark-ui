import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  replaceContentForCopy,
  replaceRegistryImportsForCopy,
} from "./formatter";

describe("registry imports for consumers", () => {
  const source = [
    'import { Button } from "@/registry/react/components/button";',
    'import { useAsyncList } from "@/registry/react/hooks/use-async-list";',
    'import { useListSelection } from "@/registry/react/hooks/use-list-selection";',
    'import { createListCollection } from "@ark-ui/react/collection";',
  ].join("\n");
  const expected = [
    'import { Button } from "@/components/ui/button";',
    'import { useAsyncList } from "@/hooks/use-async-list";',
    'import { useListSelection } from "@/hooks/use-list-selection";',
    'import { createListCollection } from "@ark-ui/react/collection";',
  ].join("\n");

  it("rewrites mixed component and hook imports without changing Ark imports", () => {
    assert.equal(replaceRegistryImportsForCopy(source), expected);
  });

  it("uses the same import mapping when copying an example", () => {
    assert.equal(
      replaceContentForCopy(`${source}\nexport default Demo;`),
      expected
    );
  });
});
