import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { NavLink } from "@/components/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/registry/react/components/button";

const NotFoundPage = () => {
  return (
    <>
      <SiteHeader />

      <main className="items-center justify-center">
        <div className="container flex flex-col items-center gap-4 text-center">
          <span className="font-bold text-6xl text-muted-foreground sm:text-8xl">
            404
          </span>

          <h1 className="font-semibold text-2xl sm:text-3xl">Page Not Found</h1>

          <p className="max-w-sm text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          <div className="flex flex-row-reverse items-center gap-4">
            <Button asChild>
              <NavLink href="/">Back to Home</NavLink>
            </Button>

            <span className="text-muted-foreground">or</span>

            <Button asChild variant="outline">
              <NavLink href={`${SITE_CONFIG.repoUrl}/issues`}>
                Report Issue
              </NavLink>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFoundPage;
