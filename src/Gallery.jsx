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
// Make sure the files exist in /public with the same names
export default function Gallery() {
  const images = [
    { src: "/gallery6.jpg", caption: "The Vista façade — natural stone architecture blending classical symmetry with mountain modern design." },
    { src: "/gallery7.jpg", caption: "Open-plan dining and living — minimalist elegance with warm wooden tones." },
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
  { src: "/gallery39.jpg", caption: "Expansive terrace views meet warm indoor elegance through glass and light." }  ];

  const [index, setIndex] = useState(null);

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
  
  return (
    <>
      {/* Hero section with background image and overlay */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden"
      >
        <img
          src="/gallery-hero.jpg" // 👈 your chosen banner image (place in /public)
          alt=""
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            The Vista Experience
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow">
            A visual journey through <span className="font-semibold text-emerald-300">The Vista</span> —  
            where architecture meets mountain serenity.
          </p>
        </div>
      </section>

      {/* Actual Gallery Grid below */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {images.map((img, i) => (
  <Fade key={img.src} delay={0.04 * i}>
    <figure
      onClick={() => open(i)}
      className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm cursor-zoom-in"
    >
      <img
        src={img.src}
        alt={img.caption}
        loading="lazy"
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-[13px] tracking-wide font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
        {img.caption}
      </figcaption>
    </figure>
  </Fade>
))}
          </div>
        </div>
      </section>
    </>
  );
}
