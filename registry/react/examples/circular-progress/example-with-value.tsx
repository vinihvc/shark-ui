import {
  CircularProgress,
  CircularProgressValue,
} from "@/registry/react/components/circular-progress";

const Example = () => (
  <CircularProgress size={66} thickness={5} value={66}>
    <CircularProgressValue className="absolute" />
  </CircularProgress>
);

export default Example;
