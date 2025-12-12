import { Marquee, MarqueeItem } from "@/registry/react/components/marquee";

const MarqueeDemo = () => {
  const items = Array.from({ length: 10 }, (_, index) => `Item ${index}`);
  return (
    <Marquee pauseOnInteraction spacing={12}>
      {items.map((item) => (
        <MarqueeItem key={item}>{item}</MarqueeItem>
      ))}
    </Marquee>
  );
};

export default MarqueeDemo;
