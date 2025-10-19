// src/Gallery.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Fade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// your images + captions (sample)
// FULLY CUSTOM CAPTIONS — edit these as you like.
// Make sure the files exist in /public with the same names.
const images = [
  { src: "/gallery6.jpg", caption: "The Vista façade — natural stone architecture blending classical symmetry with mountain modern design" },
  { src: "/gallery7.jpg", caption: "Stone and sunlight meet in quiet symmetry" },
  { src: "/gallery8.jpg", caption: "Parking Entry and Driveway" },
  { src: "/gallery9.jpg", caption: "Warm light, quiet evenings, and the mountain skyline beyond your window — comfort with a view" },
  { src: "/gallery10.jpg", caption: "Clean lines, soft tones, and quiet efficiency — a kitchen made for calm mornings and slow evenings." },
  { src: "/gallery11.jpg", caption: "Mountain lights outside, quiet comfort within." },
  { src: "/gallery12.jpg", caption: "Modern elegance meets natural warmth — a space designed for calm and connection." },
  { src: "/gallery13.jpg", caption: "The 2nd bedroom" },
  { src: "/gallery14.jpg", caption: "Your private haven" },
  { src: "/gallery15.jpg", caption: "Two-Bedroom Living space" },
  { src: "/gallery16.jpg", caption: "A hallway" },
  { src: "/gallery17.jpg", caption: "2 bed-room apartment" },
  { src: "/gallery18.jpg", caption: "Bedroom" },
  { src: "/gallery19.jpg", caption: "Entrance and bedroom" },
  { src: "/gallery20.jpg", caption: "Modern kitchen" },
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
  { src: "/gallery39.jpg", caption: "The Vista — Aerial View" }
];

export default function Gallery() {
  const [index, setIndex] = useState(null); // null = closed, number = open on that image

  const open = (i) => setIndex(i);
  const close = () => setIndex(null);
  const prev = (e) => {
    e?.stopPropagation();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e) => {
    e?.stopPropagation();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  // keyboard: Esc/←/→
  useEffect(() => {
    const onKey = (e) => {
      if (index === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <section className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Fade><h1 className="text-4xl font-bold tracking-tight mb-3">Image Gallery</h1></Fade>
        <Fade delay={0.05}><p className="mb-10 text-slate-600">Click any image to view full size.</p></Fade>

        {/* Grid */}
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {images.map((img, i) => (
    <Fade key={i} delay={0.05 * i}>
      <figure className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <img
          src={img.src}
          alt={img.caption}
          loading="lazy"
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {img.caption}
        </figcaption>
      </figure>
    </Fade>
  ))}
</div>


        <div className="mt-12 text-center">
          <Link to="/" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {index !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl"
            aria-label="Next"
          >
            ›
          </button>

          {/* Image + caption */}
          <div className="max-w-6xl w-[92vw]">
            <img
              src={images[index].src}
              alt={images[index].caption}
              className="w-full max-h-[80vh] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center text-slate-200 text-sm">
              {images[index].caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
