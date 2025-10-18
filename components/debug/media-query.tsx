export const MediaQuery = () => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "calc(var(--spacing) * 1)",
        left: "calc(var(--spacing) * 1)",
        zIndex: 50,
        height: "calc(var(--spacing) * 4)",
        width: "calc(var(--spacing) * 5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-md)",
        fontSize: "8px",
        fontWeight: "bold",
        color: "var(--muted)",
        backgroundColor: "var(--foreground)",
      }}
    >
      <div className="block sm:hidden">XS</div>
      <div className="hidden sm:block md:hidden">SM</div>
      <div className="hidden md:block lg:hidden">MD</div>
      <div className="hidden lg:block xl:hidden">LG</div>
      <div className="hidden xl:block 2xl:hidden">XL</div>
      <div className="hidden 2xl:block">2XL</div>
    </div>
  );
};
