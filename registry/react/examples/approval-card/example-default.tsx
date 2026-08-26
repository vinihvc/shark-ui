"use client";

import type React from "react";
import { useCallback, useState } from "react";
import {
  ApprovalCard,
  type ApprovalVariant,
} from "@/registry/react/components/approval-card";
import { Button } from "@/registry/react/components/button";

const noop = () => undefined;

const VARIANTS = ["plan", "questions", "command"] as const;

const Example = () => {
  const [variant, setVariant] = useState<ApprovalVariant>("plan");

  const handleVariantClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const next = event.currentTarget.dataset.variant as
        | ApprovalVariant
        | undefined;
      if (next) {
        setVariant(next);
      }
    },
    []
  );

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {VARIANTS.map((next) => (
          <Button
            data-variant={next}
            key={next}
            onClick={handleVariantClick}
            size="sm"
            type="button"
            variant={variant === next ? "default" : "outline"}
          >
            {next}
          </Button>
        ))}
      </div>
      <ApprovalCard
        command="pnpm db:migrate && pnpm build"
        cwd="~/shark-ui"
        key={variant}
        onApprove={noop}
        onReject={noop}
        plan={[
          { id: "1", title: "Add sessions migration" },
          { id: "2", title: "Wire auth middleware" },
          { id: "3", title: "Update login flow" },
          { id: "4", title: "Write rollout notes" },
        ]}
        planSummary="Ship cookie-based sessions with middleware and tests."
        planTitle="Session auth migration"
        questions={[
          {
            id: "q1",
            options: ["Session cookies", "JWT bearer", "OAuth only"],
            prompt: "Which auth approach should we use?",
          },
          {
            id: "q2",
            options: [".env.local", "Vault", "CI only"],
            prompt: "Where should secrets live?",
          },
        ]}
        variant={variant}
      />
    </div>
  );
};

export default Example;
