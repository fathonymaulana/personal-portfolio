import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className="container flex w-full justify-center">
      <div className={cn("w-full relative border-x border-border", className)}>
        {children}
      </div>
    </div>
  );
}
