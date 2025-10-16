import { HomeLayout as HomeLayoutComponent } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout";

const HomeLayout = ({ children }: LayoutProps<"/">) => (
  <HomeLayoutComponent {...baseOptions()}>{children}</HomeLayoutComponent>
);

export default HomeLayout;
