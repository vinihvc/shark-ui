import { Marquee, MarqueeItem } from "../components/marquee";

const MarqueeDemo = () => {
  const items = Array.from({ length: 10 }, (_, index) => `Item ${index}`);
  return (
    <Marquee spacing={12}>
      {items.map((item) => (
        <MarqueeItem key={item}>{item}</MarqueeItem>
      ))}
    </Marquee>
  );
};

export default MarqueeDemo;
