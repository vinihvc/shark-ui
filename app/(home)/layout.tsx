import { HomeLayout as HomeLayoutComponent } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout";

const HomeLayout = (props: LayoutProps<"/">) => (
  <HomeLayoutComponent {...baseOptions()} {...props} />
);

export default HomeLayout;
