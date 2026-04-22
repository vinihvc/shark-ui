import { SiteHeader } from "@/components/layout/header/header";

export const dynamic = "force-static";
export const revalidate = false;

const AppLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <>
      <SiteHeader />

      {children}
    </>
  );
};

export default AppLayout;
