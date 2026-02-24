import { SendIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  return (
    <Button disabled>
      Send <SendIcon />
    </Button>
  );
};

export default Example;
