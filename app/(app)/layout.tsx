import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header/header";

const AppLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <>
      <SiteHeader />

      {children}

      <Footer />
    </>
  );
};

export default AppLayout;
