interface ShowProps {
  /**
   * Content to render when `when` is truthy.
   */
  children: React.ReactNode;
  /**
   * Content to render when `when` is falsy.
   */
  fallback?: React.ReactNode;
  /**
   * When truthy, renders children. When falsy, renders fallback.
   */
  when: boolean;
}

export const Show = (props: ShowProps) => {
  const { when, fallback, children } = props;

  if (when) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};
