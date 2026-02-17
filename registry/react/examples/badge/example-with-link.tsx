import { ArrowUpRightIcon, CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/react/components/badge";

const Example = () => (
  <Badge asChild variant="info">
    <Link href="/">
      <CirclePlusIcon />
      New components <ArrowUpRightIcon />
    </Link>
  </Badge>
);

export default Example;
