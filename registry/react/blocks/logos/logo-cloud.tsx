const logos = ["Acme", "TechCorp", "StartupXYZ", "InnovateCo", "NextGen"];

const LogoCloud = () => {
  return (
    <div className="rounded-xl border bg-card p-8">
      <h2 className="mb-6 text-center font-semibold text-foreground">
        Trusted by leading companies
      </h2>
      <p className="mb-8 text-center text-muted-foreground text-sm">
        Join thousands of teams who use our platform every day.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex h-12 items-center justify-center rounded-lg bg-muted px-6 font-medium text-muted-foreground"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
