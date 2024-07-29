export default function Container({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="container relative">
        {children}
      </div>
    );
  }