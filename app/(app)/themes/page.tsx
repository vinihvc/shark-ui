import { Footer } from "@/components/layout/footer";
import { CardsDemo } from "./_components/cards/cards";
import { ThemeSelector } from "./_components/theme-selector/theme-selector";

export const dynamic = "force-static";
export const revalidate = false;

const ThemesPage = () => {
  return (
    <>
      <main className="container flex flex-col gap-4">
        <div className="grid gap-2 pt-8 pb-4">
          <h1 className="font-extrabold text-3xl">
            Pick a Color. Make it yours.
          </h1>

          <p className="text-lg text-muted-foreground">
            Try our hand-picked themes. Copy and paste them into your project.
          </p>
        </div>

        <ThemeSelector />

        <CardsDemo className="pb-8" />
      </main>

      <Footer />
    </>
  );
};

export default ThemesPage;
