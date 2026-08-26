import type { BlockDefinition } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

export const authenticationBlocks = [
  {
    category: "authentication",
    dependencies: ["lucide-react"],
    description:
      "A focused sign-in page with email, password, and SSO actions.",
    files: [
      {
        path: "blocks/login-01/page.tsx",
        source: "page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-01/components/login-form.tsx",
        source: "components/login-form.tsx",
        target: "@components/login-form.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      featured: true,
      order: 1,
      previewHeight: 720,
    },
    name: "login-01",
    preview: () => import("./login-01/page"),
    registryDependencies: [
      absoluteUrl("/r/button.json"),
      absoluteUrl("/r/card.json"),
      absoluteUrl("/r/field.json"),
      absoluteUrl("/r/input.json"),
      absoluteUrl("/r/separator.json"),
    ],
    title: "Login",
    type: "registry:block",
  },
] as const satisfies readonly BlockDefinition[];
