export const FRAMEWORKS = ["react", "vue", "solid", "svelte"] as const;

export type RegistryFramework = (typeof FRAMEWORKS)[number];
export type AdapterStatus = "unsupported" | "preview" | "stable";
export type ComponentStrategy = "structural" | "ark" | "custom";

export interface AdapterContract {
  bindings: Record<string, string>;
  evidence: Record<string, readonly string[]>;
  packageVersion: string;
  sources: readonly string[];
  status: AdapterStatus;
}

export interface PartContract {
  element?: string;
  name: string;
  parent?: string;
  primitive?: string;
  slot: string;
}

export interface PropContract {
  defaultValue?: boolean | number | string;
  description: string;
  type: string;
  values?: readonly string[];
}

export interface RecipeContract {
  base: readonly string[];
  defaultVariants?: Record<string, boolean | number | string>;
  name: string;
  variants?: Record<string, Record<string, readonly string[] | string | null>>;
}

export interface ScenarioContract {
  assertions: readonly string[];
  name: string;
}

export interface RegistryComponentDefinition {
  adapters: Record<RegistryFramework, AdapterContract>;
  dependencies: {
    common: readonly string[];
    frameworks: Record<RegistryFramework, readonly string[]>;
    registry: Record<RegistryFramework, readonly string[]>;
  };
  description: string;
  name: string;
  parts: readonly PartContract[];
  props: Record<string, PropContract>;
  recipes: readonly RecipeContract[];
  scenarios: readonly ScenarioContract[];
  strategy: ComponentStrategy;
}

const assertUnique = (label: string, values: readonly string[]) => {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`[registry definition] duplicate ${label}: ${value}`);
    }
    seen.add(value);
  }
};

export const defineRegistryComponent = <
  const Definition extends RegistryComponentDefinition,
>(
  definition: Definition
) => {
  assertUnique(
    `${definition.name} part`,
    definition.parts.map(({ name }) => name)
  );
  assertUnique(
    `${definition.name} slot`,
    definition.parts.map(({ slot }) => slot)
  );
  assertUnique(
    `${definition.name} recipe`,
    definition.recipes.map(({ name }) => name)
  );
  assertUnique(
    `${definition.name} scenario`,
    definition.scenarios.map(({ name }) => name)
  );

  const partNames = new Set(definition.parts.map(({ name }) => name));
  for (const part of definition.parts) {
    if (part.parent && !partNames.has(part.parent)) {
      throw new Error(
        `[registry definition] ${definition.name}.${part.name} has unknown parent ${part.parent}`
      );
    }
  }

  for (const framework of FRAMEWORKS) {
    const adapter = definition.adapters[framework];
    if (adapter.status !== "unsupported" && adapter.sources.length === 0) {
      throw new Error(
        `[registry definition] ${definition.name}.${framework} requires at least one source`
      );
    }
    assertUnique(`${definition.name}.${framework} source`, adapter.sources);
    const scenarioNames = definition.scenarios.map(({ name }) => name);
    const evidenceNames = Object.keys(adapter.evidence);
    if (
      adapter.status !== "unsupported" &&
      scenarioNames.some((name) => !evidenceNames.includes(name))
    ) {
      throw new Error(
        `[registry definition] ${definition.name}.${framework} requires evidence for every scenario`
      );
    }
  }

  for (const [propName, prop] of Object.entries(definition.props)) {
    if (
      prop.values &&
      prop.defaultValue !== undefined &&
      !prop.values.includes(String(prop.defaultValue))
    ) {
      throw new Error(
        `[registry definition] ${definition.name}.${propName} has a default outside its values`
      );
    }
  }

  return definition;
};
