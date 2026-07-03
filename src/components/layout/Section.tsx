import { cn } from "@/lib/utils";

import { ComponentProps } from "react";

type SectionProps = ComponentProps<"section">;

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn("py-24", className)} {...props} />;
}
