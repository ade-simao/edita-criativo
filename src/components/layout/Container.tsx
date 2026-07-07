import { cn } from "@/lib/utils";

import { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 lg:px-8", className)}
      {...props}
    />
  );
}
