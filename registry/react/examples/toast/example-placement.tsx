"use client";

import { createToaster } from "@ark-ui/react/toast";
import { Button } from "@/registry/react/components/button";
import { Toaster } from "@/registry/react/components/toast";

const topStartToaster = createToaster({
  placement: "top-start",
  overlap: true,
});

const topToaster = createToaster({
  placement: "top",
  overlap: true,
});

const topEndToaster = createToaster({
  placement: "top-end",
  overlap: true,
});

const bottomStartToaster = createToaster({
  placement: "bottom-start",
  overlap: true,
});

const bottomToaster = createToaster({
  placement: "bottom",
  overlap: true,
});

const bottomEndToaster = createToaster({
  placement: "bottom-end",
  overlap: true,
});

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
              title: "Top start",
              description: "placement: top-start",
            })
          }
          variant="outline"
        >
          Top start
        </Button>
        <Button
          onClick={() =>
            topToaster.create({
              title: "Top end",
              description: "placement: top-end",
            })
          }
          variant="outline"
        >
          Top center
        </Button>
        <Button
          onClick={() =>
            topEndToaster.create({
              title: "Top end",
              description: "placement: top-end",
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
              title: "Bottom start",
              description: "placement: bottom-start",
            })
          }
          variant="outline"
        >
          Bottom start
        </Button>
        <Button
          onClick={() =>
            bottomToaster.create({
              title: "Bottom end",
              description: "placement: bottom-end",
            })
          }
          variant="outline"
        >
          Bottom center
        </Button>
        <Button
          onClick={() =>
            bottomEndToaster.create({
              title: "Bottom end",
              description: "placement: bottom-end",
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

export default Example;
