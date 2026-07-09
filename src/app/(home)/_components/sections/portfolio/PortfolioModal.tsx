"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

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
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
          >
            <div
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
              onClick={onClose}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-screen w-full max-w-5xl rounded-3xl border border-border bg-background overflow-auto"
              >
                <button
                  onClick={onClose}
                  className="absolute right-5 top-5 z-10 rounded-full bg-background p-2 hover:bg-muted"
                >
                  <X size={20} />
                </button>

                <div className="aspect-video border-b border-border">
                  <iframe
                    src={video}
                    title={title}
                    allowFullScreen
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="h-full w-full"
                  />
                </div>

                {/* <div className="flex items-center gap-3">
                  <span className=" rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
                    Projeto
                  </span>
                </div> */}

                <div className="p-2">
                  <h3 className="text-xl md:text-2xl font-bold">{title}</h3>

                  <p className="mt-1 text-muted-foreground">{description}</p>

                  <a
                    href={video}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition hover:scale-105"
                  >
                    Ver Projeto
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
