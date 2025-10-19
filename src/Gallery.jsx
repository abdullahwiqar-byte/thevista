import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Fade helper (you already use this pattern in App.jsx)
const Fade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// Put your actual file names here.
// Tip: store images in /public/gallery/... and use leading slashes.
const IMAGES = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  // Add more as needed
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const openAt = useCallback((i) => { setIndex(i); setOpen(true); }, []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % IMAGES.length), []);

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <section className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Fade>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Image Gallery</h1>
        </Fade>
        <Fade delay={0.05}>
          <p className="mb-10 text-slate-600">
            Click any image to view full size. Use ← → or Esc to navigate/close.
          </p>
        </Fade>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {IMAGES.map((src, i) => (
            <Fade key={src} delay={0.04 * i}>
              <button
                type="button"
                onClick={() => openAt(i)}
                className="block w-full h-64 rounded-2xl overflow-hidden border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                title="Open image"
              >
                <img
                  src={src}
                  alt={`The Vista view ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </button>
            </Fade>
          ))}
        </div>

        {/* Back */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={IMAGES[index]}
              alt={`The Vista full ${index + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />

            {/* Controls */}
            <button
              type="button"
              onClick={close}
              className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-white/90 text-slate-900 text-sm hover:bg-white"
              aria-label="Close"
              title="Close (Esc)"
            >
              Close ✕
            </button>
            {IMAGES.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 hover:bg-white"
                  aria-label="Previous"
                  title="Previous (←)"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 hover:bg-white"
                  aria-label="Next"
                  title="Next (→)"
                >
                  ›
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/80">
                  {index + 1} / {IMAGES.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
