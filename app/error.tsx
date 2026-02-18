"use client";

import React from "react";
import { NavLink } from "@/components/nav-link";
import { Button } from "@/registry/react/components/button";

interface ErrorPageProps extends React.PropsWithChildren {
  /**
   * The error object
   */
  error: Error & { digest?: string };
  /**
   * The function to reset the error
   */
  reset: () => void;
}

const ErrorPage = (props: ErrorPageProps) => {
  const { error, reset } = props;

  const isDev = process.env.NODE_ENV === "development";

  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="items-center justify-center">
      <div className="container flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1
            aria-label="Error"
            className="font-bold text-6xl text-muted-foreground sm:text-8xl"
          >
            <span aria-hidden="true">500</span>
          </h1>

          <p className="max-w-xs text-lg text-muted-foreground">
            Something went wrong.
          </p>

          {isDev && (
            <pre className="max-w-xs text-lg text-muted-foreground">
              {error.message}
            </pre>
          )}
        </div>

        <div className="flex flex-row-reverse items-center gap-4">
          <Button onClick={() => reset()}>Try again</Button>

          <span className="text-muted-foreground">or</span>

          <Button asChild variant="outline">
            <NavLink href="/">Back home</NavLink>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
