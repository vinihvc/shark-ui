import { NavLink } from "@/components/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/registry/react/components/button";

const NotFoundPage = () => {
  return (
    <main className="items-center justify-center">
      <div className="container flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-6xl text-muted-foreground sm:text-8xl">
            404
          </span>

          <h1 className="font-semibold text-2xl">Page Not Found</h1>

          <p className="max-w-xs text-pretty text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

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
  );
};

export default NotFoundPage;
