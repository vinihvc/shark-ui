"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { useCallback, useState } from "react";
import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationAction,
  ConfirmationActions,
  ConfirmationRejected,
  ConfirmationRequest,
  type ConfirmationState,
  ConfirmationTitle,
} from "@/registry/react/components/confirmation";

const Example = () => {
  const [state, setState] = useState<ConfirmationState>("request");
  const handleReject = useCallback(() => setState("rejected"), []);
  const handleApprove = useCallback(() => setState("accepted"), []);

  return (
    <Confirmation className="max-w-lg" state={state}>
      <ConfirmationRequest>
        <ConfirmationTitle>
          Allow write to src/utils/helpers.ts?
        </ConfirmationTitle>
        <p className="text-muted-foreground">
          The agent wants to update the email validator. Reject to skip this
          edit.
        </p>
      </ConfirmationRequest>
      <ConfirmationAccepted>
        <CheckIcon aria-hidden="true" className="size-4" />
        You approved this tool
      </ConfirmationAccepted>
      <ConfirmationRejected>
        <XIcon aria-hidden="true" className="size-4" />
        You rejected this tool
      </ConfirmationRejected>
      <ConfirmationActions>
        <ConfirmationAction onClick={handleReject} variant="outline">
          Reject
        </ConfirmationAction>
        <ConfirmationAction onClick={handleApprove}>Approve</ConfirmationAction>
      </ConfirmationActions>
    </Confirmation>
  );
};

export default Example;
