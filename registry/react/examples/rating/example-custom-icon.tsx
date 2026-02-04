"use client";

import { Heart } from "lucide-react";
import { Rating } from "@/registry/react/components/rating";

const Example = () => (
  <Rating allowHalf className="text-destructive" icon={Heart} />
);

export default Example;
