"use client";

import { createToaster } from "@ark-ui/react/toast";
import { Button } from "@/registry/react/components/button";
import { Toaster } from "@/registry/react/components/toast";

const Example = () => (
  <>
    <Toaster toaster={topStartToaster} />
    <Toaster toaster={topToaster} />
    <Toaster toaster={topEndToaster} />
    <Toaster toaster={bottomStartToaster} />
    <Toaster toaster={bottomToaster} />
    <Toaster toaster={bottomEndToaster} />

    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            topStartToaster.create({
              description: "placement: top-start",
              title: "Top start",
            })
          }
          variant="outline"
        >
          Top start
        </Button>
        <Button
          onClick={() =>
            topToaster.create({
              description: "placement: top-end",
              title: "Top end",
            })
          }
          variant="outline"
        >
          Top center
        </Button>
        <Button
          onClick={() =>
            topEndToaster.create({
              description: "placement: top-end",
              title: "Top end",
            })
          }
          variant="outline"
        >
          Top end
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            bottomStartToaster.create({
              description: "placement: bottom-start",
              title: "Bottom start",
            })
          }
          variant="outline"
        >
          Bottom start
        </Button>
        <Button
          onClick={() =>
            bottomToaster.create({
              description: "placement: bottom-center",
              title: "Bottom center",
            })
          }
          variant="outline"
        >
          Bottom center
        </Button>
        <Button
          onClick={() =>
            bottomEndToaster.create({
              description: "placement: bottom-end",
              title: "Bottom end",
            })
          }
          variant="outline"
        >
          Bottom end
        </Button>
      </div>
    </div>
  </>
);

const topStartToaster = createToaster({
  overlap: true,
  placement: "top-start",
});

const topToaster = createToaster({
  overlap: true,
  placement: "top",
});

const topEndToaster = createToaster({
  overlap: true,
  placement: "top-end",
});

const bottomStartToaster = createToaster({
  overlap: true,
  placement: "bottom-start",
});

const bottomToaster = createToaster({
  overlap: true,
  placement: "bottom",
});

const bottomEndToaster = createToaster({
  overlap: true,
  placement: "bottom-end",
});

export default Example;
