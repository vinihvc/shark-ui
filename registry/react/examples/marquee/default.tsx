import { Card, CardContent } from "@/registry/react/components/card";
import { Marquee, MarqueeItem } from "@/registry/react/components/marquee";

const items = Array.from({ length: 10 });

const MarqueeDemo = () => {
  return (
    <Marquee>
      {items.map((_, index) => (
        <MarqueeItem key={index}>
          <Card>
            <CardContent>
              <p>Sponsor {index + 1}</p>
            </CardContent>
          </Card>
        </MarqueeItem>
      ))}
    </Marquee>
  );
};

export default MarqueeDemo;
