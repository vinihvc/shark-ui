"use client";

import React from "react";
import { Rating } from "@/registry/react/components/rating";

const Example = () => {
  const [value, setValue] = React.useState(0);

  const isCorrectRating = value === 5;

  return (
    <div className="flex w-full max-w-40 flex-col gap-4 text-center text-sm">
      <p>Select the rating 5</p>
      <Rating
        onValueChange={(details) => setValue(details.value ?? 0)}
        value={value}
      />
      <p className="text-center">{isCorrectRating ? "✅" : "❌"}</p>
    </div>
  );
};

export default Example;
