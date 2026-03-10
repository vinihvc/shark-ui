import { Card, CardContent } from "@/registry/react/components/card";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/registry/react/components/marquee";

const items = Array.from({ length: 2 });

const Example = () => (
  <Marquee autoFill speed={100}>
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
);

export default Example;
