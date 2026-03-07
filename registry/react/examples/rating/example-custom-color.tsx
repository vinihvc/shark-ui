import { Rating } from "@/registry/react/components/rating";

const Example = () => (
  <div className="flex flex-wrap items-center gap-8">
    <Rating className="text-info" count={5} defaultValue={4} />
    <Rating className="text-success" count={5} defaultValue={4} />
  </div>
);

export default Example;
