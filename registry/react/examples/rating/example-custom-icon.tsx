import { HeartIcon } from "lucide-react";
import { Rating } from "@/registry/react/components/rating";

const Example = () => (
  <Rating allowHalf className="text-destructive" icon={HeartIcon} />
);

export default Example;
