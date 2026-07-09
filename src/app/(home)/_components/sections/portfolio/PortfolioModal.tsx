"use client";

import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  video: string;
  description: string;
};

export function PortfolioModal({
  open,
  onClose,
  title,
  video,
  description,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl rounded-3xl border border-border bg-background overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 rounded-full bg-background p-2 hover:bg-muted"
        >
          <X size={20} />
        </button>

        <div className="aspect-video">
          <iframe
            src={video}
            title={title}
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold">{title}</h3>

          <p className="mt-4 text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
