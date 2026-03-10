"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { Swap, SwapIndicator } from "@/registry/react/components/swap";

const SwapDemo = () => {
  const [swap, setSwap] = React.useState(false);

  return (
    <Button onClick={() => setSwap(!swap)} size="icon-lg" variant="outline">
      <Swap swap={swap} variant="fade">
        <SwapIndicator type="on">
          <MoonIcon />
        </SwapIndicator>
        <SwapIndicator type="off">
          <SunIcon />
        </SwapIndicator>
      </Swap>
    </Button>
  );
};

export default SwapDemo;
