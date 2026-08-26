export const MediaQuery = () => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "var(--foreground)",
        borderRadius: "var(--radius-md)",
        bottom: "calc(var(--spacing) * 1.5)",
        color: "var(--background)",
        display: "flex",
        fontSize: "10px",
        fontWeight: "bold",
        height: "calc(var(--spacing) * 4)",
        justifyContent: "center",
        left: "calc(var(--spacing) * 1.5)",
        position: "fixed",
        width: "calc(var(--spacing) * 5)",
        zIndex: 50,
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
