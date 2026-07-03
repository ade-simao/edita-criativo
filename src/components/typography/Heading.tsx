import { ComponentProps, ElementType } from "react";
import { cn } from "@/lib/utils";

type HeadingProps<T extends ElementType> = {
  as?: T;
} & ComponentProps<T>;

export function Heading<T extends ElementType = "h2">({
  as,
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h2";

  return (
    <Component
      className={cn("font-bold tracking-tight", className)}
      {...props}
    />
  );
}
