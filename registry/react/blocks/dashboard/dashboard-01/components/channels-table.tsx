import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

interface Channel {
  channel: string;
  conversion: string;
  trend: string;
  visitors: number;
}

interface ChannelsTableProps {
  data: Channel[];
}

export const ChannelsTable = ({ data }: ChannelsTableProps) => (
  <Card>
    <CardHeader>
      <CardTitle>Top channels</CardTitle>
      <CardDescription>Acquisition performance by source</CardDescription>
    </CardHeader>
    <CardContent className="px-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="ps-6">Channel</TableHead>
            <TableHead>Visitors</TableHead>
            <TableHead className="pe-6 text-end">Trend</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((channel) => (
            <TableRow key={channel.channel}>
              <TableCell className="ps-6">
                <span className="block font-medium">{channel.channel}</span>
                <span className="text-muted-foreground text-xs">
                  {channel.conversion} conversion
                </span>
              </TableCell>
              <TableCell className="tabular-nums">
                {channel.visitors.toLocaleString("en-US")}
              </TableCell>
              <TableCell className="pe-6 text-end">
                <Badge
                  variant={
                    channel.trend.startsWith("+") ? "secondary" : "outline"
                  }
                >
                  {channel.trend}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);
