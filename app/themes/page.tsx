import { ThemePreview } from "./_components/theme-preview";
import { ThemeSelector } from "./_components/theme-selector/theme-selector";

export const dynamic = "force-static";
export const revalidate = false;

const ThemesPage = () => (
	<div className="container grid gap-4">
		<div className="grid gap-2 pt-8 pb-4">
			<h1 className="font-semibold text-4xl tracking-tight sm:text-3xl">
				Pick a Color. Make it yours.
			</h1>

			<p className="text-lg text-muted-foreground">
				Try our hand-picked themes. Copy and paste them into your project.
			</p>
		</div>

		<ThemeSelector />

		<div className="rounded-lg border bg-card p-6">
			<ThemePreview />
		</div>
	</div>
);

export default ThemesPage;
