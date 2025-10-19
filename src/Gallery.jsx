// src/Gallery.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// tiny fade helper
const Fade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// FULLY CUSTOM CAPTIONS — edit these as you like.
// Make sure the files exist in /public with the same names.
const images = [
  { src: "/gallery6.jpg", caption: "The Vista façade — natural stone architecture blending classical symmetry with mountain modern design" },
  { src: "/gallery7.jpg", caption: "The facade" },
  { src: "/gallery8.jpg", caption: "Parking Entry and Driveway" },
  { src: "/gallery9.jpg", caption: "Lounge" },
  { src: "/gallery10.jpg", caption: "Modern Kitchen" },
  { src: "/gallery11.jpg", caption: "Bedroom with a view" },
  { src: "/gallery12.jpg", caption: "The dining" },
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
  return (
    <section className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Fade>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Image Gallery</h1>
        </Fade>
        <Fade delay={0.05}>
          <p className="mb-10 text-slate-600">
            Click any image to view full size. Captions identify spaces and views.
          </p>
        </Fade>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <Fade key={img.src} delay={0.04 * i}>
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
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
