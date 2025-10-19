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
  { src: "/gallery13.jpg", caption: "Textured stone, soft light, and muted tones — a bedroom made for effortless calm." },
  { src: "/gallery14.jpg", caption: "Soft greens, warm woods, and morning light — a bedroom that feels like quiet renewal." },
  { src: "/gallery15.jpg", caption: "A living room made for quiet indulgence" },
  { src: "/gallery16.jpg", caption: "An open living and dining space bathed in soft natural light" },
  { src: "/gallery17.jpg", caption: "A refined corridor of calm" },
  { src: "/gallery18.jpg", caption: "Open dining and kitchen space in soothing teal and natural light." },
  { src: "/gallery19.jpg", caption: "Warm tones and modern art blend into a serene, inviting bedroom" },
  { src: "/gallery20.jpg", caption: "Muted teal walls and wood tones frame a cozy transition into the bedroom." },
  { src: "/gallery21.jpg", caption: "Modern kitchen in wood and marble tones, perfectly aligned with open living." },
  { src: "/gallery22.jpg", caption: "A warm entryway opening into soft light and mountain views beyond." },
  { src: "/gallery23.jpg", caption: "Open-concept living flows through warm wood and teal accents, framed by mountain light." },
  { src: "/gallery24.jpg", caption: "A bedroom that feels both calm and alive" },
  { src: "/gallery25.jpg", caption: "Soft lighting and rich textures define this bedroom of understated luxury." },
  { src: "/gallery26.jpg", caption: "Curved sofas, modern art, and mountain views — a living room built for both style and serenity." },
  { src: "/gallery27.jpg", caption: "Soft greens, textured art, and warm tones create a bedroom of quiet elegance." },
  { src: "/gallery28.jpg", caption: "A sleek kitchen framed in warm wood and minimalist whites" },
  { src: "/gallery29.jpg", caption: "Soft lighting, crafted shelving, and curated art create a refined living space." },
  { src: "/gallery30.jpg", caption: "A serene bedroom framed by wood and texture" },
  { src: "/gallery31.jpg", caption: "“Warm neutrals and dark contrasts give this bedroom a calm, grounded feel.”" },
  { src: "/gallery32.jpg", caption: "Stone walls, soft lighting, and panoramic views — a bedroom that balances warmth and sophistication." },
  { src: "/gallery33.jpg", caption: "Intimate lounge with bold contrasts, mountain views, and cinematic calm." },
  { src: "/gallery34.jpg", caption: "A modern kitchen wrapped in warm oak tones and sleek marble finishes." },
  { src: "/gallery35.jpg", caption: "A cozy retreat framed by textured stone and soft greys" },
  { src: "/gallery37.jpg", caption: "An open layout blending stone, wood, and glass — elegant yet grounded." },
  { src: "/gallery38.jpg", caption: "A restful bedroom framed by deep tones and mountain views" },
  { src: "/gallery39.jpg", caption: "Expansive terrace views meet warm indoor elegance through glass and light." }
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
      <figure
        className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm cursor-zoom-in"
        onClick={() => open(i)} // 👈 This triggers the lightbox
      >
        <img
          src={img.src}
          alt={img.caption}
          loading="lazy"
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white text-[13px] tracking-wide font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
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
