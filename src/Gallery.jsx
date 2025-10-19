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
const images = [
  { src: "/gallery1.jpg", caption: "Elevation Concept — Front Facade" },
  { src: "/gallery2.jpg", caption: "Main Lobby and Reception" },
  { src: "/gallery3.jpg", caption: "Lift Lobby — Level 1" },
  { src: "/gallery4.jpg", caption: "Rooftop Lounge and BBQ Deck" },
  { src: "/gallery5.jpg", caption: "View from Upper Balcony" },
  { src: "/gallery6.jpg", caption: "Outdoor Terrace — South Wing" },
  { src: "/gallery7.jpg", caption: "Evening Façade Illumination" },
  { src: "/gallery8.jpg", caption: "Parking Entry and Driveway" },
  { src: "/gallery9.jpg", caption: "Mountain-side Elevation" },
  { src: "/gallery10.jpg", caption: "Reception Lounge — Interior" },
  { src: "/gallery11.jpg", caption: "Corridor and Access Lobby" },
  { src: "/gallery12.jpg", caption: "Apartment Interior — Studio Layout" },
  { src: "/gallery13.jpg", caption: "One-Bedroom Living Space" },
  { src: "/gallery14.jpg", caption: "Two-Bedroom Living Area" },
  { src: "/gallery15.jpg", caption: "Three-Bedroom Family Suite" },
  { src: "/gallery16.jpg", caption: "Kitchen Finish — Semi-Furnished Option" },
  { src: "/gallery17.jpg", caption: "Bathroom Fittings — Modern Finish" },
  { src: "/gallery18.jpg", caption: "View from Rooftop Edge" },
  { src: "/gallery19.jpg", caption: "Building Rear Access" },
  { src: "/gallery20.jpg", caption: "Lobby Lighting Details" },
  { src: "/gallery21.jpg", caption: "Terrace Sitting Area" },
  { src: "/gallery22.jpg", caption: "Evening Skyline — North View" },
  { src: "/gallery23.jpg", caption: "Structural Progress Shot" },
  { src: "/gallery24.jpg", caption: "Sunset View — Western Wing" },
  { src: "/gallery25.jpg", caption: "CCTV and Access Control" },
  { src: "/gallery26.jpg", caption: "Rooftop Prayer Area" },
  { src: "/gallery27.jpg", caption: "Panoramic Valley View" },
  { src: "/gallery28.jpg", caption: "South Elevation — Completed" },
  { src: "/gallery29.jpg", caption: "Landscaped Approach Road" },
  { src: "/gallery30.jpg", caption: "Main Gate and Driveway" },
  { src: "/gallery31.jpg", caption: "Interior Rendering — Kitchen" },
  { src: "/gallery32.jpg", caption: "Interior Rendering — Bedroom" },
  { src: "/gallery33.jpg", caption: "Interior Rendering — Living Room" },
  { src: "/gallery34.jpg", caption: "Rooftop Edge — Safety Parapets" },
  { src: "/gallery35.jpg", caption: "Prayer Room Entrance" },
  { src: "/gallery36.jpg", caption: "Corridor Lighting Fixtures" },
  { src: "/gallery37.jpg", caption: "Lift Area — Daylight Glazing" },
  { src: "/gallery38.jpg", caption: "BBQ Zone — Seating Area" },
  { src: "/gallery39.jpg", caption: "The Vista — Aerial View" },
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
