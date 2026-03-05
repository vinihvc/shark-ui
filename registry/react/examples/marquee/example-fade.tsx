import { Card, CardContent } from "@/registry/react/components/card";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/registry/react/components/marquee";

const items = Array.from({ length: 10 });

const Example = () => (
  <div className="flex flex-col gap-6 overflow-hidden">
    <Marquee pauseOnInteraction showEdges={false}>
      <MarqueeContent>
        {items.map((_, index) => (
          <MarqueeItem key={index}>
            <Card>
              <CardContent>
                <p>Sponsor {index + 1}</p>
              </CardContent>
            </Card>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>

    <Marquee pauseOnInteraction reverse>
      <MarqueeContent>
        {items.map((_, index) => (
          <MarqueeItem key={index}>
            <Card className="shadow-none">
              <CardContent>
                <p>Sponsor {index + 1}</p>
              </CardContent>
            </Card>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default Example;
