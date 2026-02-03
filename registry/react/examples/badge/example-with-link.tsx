import { ArrowUpRight, CirclePlus } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/react/components/badge";

const Example = () => (
  <Badge asChild variant="info">
    <Link href="/">
      <CirclePlus />
      New components <ArrowUpRight />
    </Link>
  </Badge>
);

export default Example;
