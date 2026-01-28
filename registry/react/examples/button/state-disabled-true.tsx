import { Send } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  return (
    <Button disabled>
      Send <Send />
    </Button>
  );
};

export default Example;
