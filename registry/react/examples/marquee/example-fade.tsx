import { Card, CardContent } from "@/registry/react/components/card";
import { Marquee, MarqueeItem } from "@/registry/react/components/marquee";

const items = Array.from({ length: 10 });

const Example = () => (
  <div className="flex flex-col gap-6 overflow-hidden">
    <Marquee pauseOnInteraction showEdges={false}>
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

    <Marquee pauseOnInteraction reverse>
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
  </div>
);

export default Example;
