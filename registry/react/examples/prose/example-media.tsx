import { Prose } from "@/registry/react/components/prose";

const Example = () => (
  <Prose>
    <figure>
      <img
        alt="Green mesh gradient"
        height={200}
        src="/images/gradients/green-dark.svg"
        width={200}
      />
      <figcaption>A description of the image.</figcaption>
    </figure>
  </Prose>
);

export default Example;
