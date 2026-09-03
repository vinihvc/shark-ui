import { WavesIcon } from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";
import { LoginForm } from "./components/login-form";

const LoginPage = () => (
  <main className="grid min-h-svh bg-muted/35 lg:grid-cols-[minmax(0,1.05fr)_minmax(28rem,0.95fr)]">
    <section className="relative hidden overflow-hidden border-e bg-foreground text-background lg:flex lg:flex-col lg:justify-between lg:p-12">
      <div className="flex items-center gap-2 font-semibold">
        <IconTile
          aria-hidden="true"
          className="size-9 border-transparent bg-background text-foreground shadow-none"
          size="sm"
        >
          <WavesIcon aria-hidden="true" className="size-5" />
        </IconTile>
        Northstar
      </div>
      <div className="max-w-xl">
        <p className="text-balance font-medium text-3xl leading-tight tracking-[-0.025em] xl:text-4xl">
          Bring your team, priorities, and progress into one clear view.
        </p>
        <p className="mt-4 max-w-lg text-background/70">
          Make better decisions with a workspace that stays useful from the
          first task to the quarterly review.
        </p>
      </div>
      <p className="text-background/60 text-sm">
        Trusted by product teams at Northstar, Helix, and Cove.
      </p>
    </section>

    <section className="flex min-h-svh items-center justify-center px-5 py-10 sm:px-8">
      <div className="w-full max-w-md">
        <a
          className="mb-8 flex items-center gap-2 font-semibold lg:hidden"
          href="#"
        >
          <IconTile
            aria-hidden="true"
            className="border-transparent shadow-none"
            size="sm"
            variant="primary"
          >
            <WavesIcon aria-hidden="true" className="size-4" />
          </IconTile>
          Northstar
        </a>
        <LoginForm />
      </div>
    </section>
  </main>
);

export default LoginPage;
