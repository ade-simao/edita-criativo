import { cn } from "@/lib/utils";

import { ComponentProps } from "react";

type TextProps = ComponentProps<"p">;

export function Text({ className, ...props }: TextProps) {
  return (
    <p
      className={cn("text-muted-foreground leading-7", className)}
      {...props}
    />
  );
}
