import { Card, CardContent } from "@/registry/react/components/card";
import { Marquee, MarqueeItem } from "@/registry/react/components/marquee";

const items = Array.from({ length: 10 });

const Example = () => (
  <Marquee className="max-h-[300px] w-full max-w-40" orientation="vertical">
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

export default Example;
