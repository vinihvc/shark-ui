import Link from "next/link";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <Button asChild>
    <Link href="#">Login </Link>
  </Button>
);

export default Example;
