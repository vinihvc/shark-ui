import { Prose } from "@/registry/react/components/prose";

const Example = () => (
  <Prose>
    <figure>
      <img
        alt="Placeholder"
        height={200}
        src="/images/placeholder.svg"
        width={200}
      />

      <figcaption>A description of the image.</figcaption>
    </figure>
  </Prose>
);

export default Example;
