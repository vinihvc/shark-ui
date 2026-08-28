import assert from "node:assert/strict";
import { resolve } from "node:path";
import { describe, it } from "node:test";
import { resolveRegistrySourcePath } from "./registry-source-path";

describe("resolveRegistrySourcePath", () => {
  it("allows a component file under REGISTRY_PATH", () => {
    const resolved = resolveRegistrySourcePath("/hotkeys.tsx");
    assert.equal(
      resolved,
      resolve(process.cwd(), "registry/react/components/hotkeys.tsx")
    );
  });

  it("allows relative hooks paths", () => {
    const resolved = resolveRegistrySourcePath("../hooks/use-is-mobile.tsx");
    assert.equal(
      resolved,
      resolve(process.cwd(), "registry/react/hooks/use-is-mobile.tsx")
    );
  });

  it("allows relative examples paths", () => {
    const resolved = resolveRegistrySourcePath(
      "../examples/form/rhf/example-demo.tsx"
    );
    assert.equal(
      resolved,
      resolve(
        process.cwd(),
        "registry/react/examples/form/rhf/example-demo.tsx"
      )
    );
  });

  it("rejects paths that leave registry/react", () => {
    assert.throws(
      () => resolveRegistrySourcePath("../../../package.json"),
      /outside the registry/
    );
  });
});
