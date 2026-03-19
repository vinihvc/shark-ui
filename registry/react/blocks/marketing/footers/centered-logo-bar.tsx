const CenteredLogoBar = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-muted/48 px-6 py-8 sm:flex-row">
      <span className="font-semibold text-foreground">Logo</span>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Company. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a className="text-muted-foreground hover:text-foreground" href="#">
          <span className="sr-only">Twitter</span>
          X
        </a>
        <a className="text-muted-foreground hover:text-foreground" href="#">
          <span className="sr-only">GitHub</span>
          GH
        </a>
      </div>
    </div>
  );
};

export default CenteredLogoBar;
