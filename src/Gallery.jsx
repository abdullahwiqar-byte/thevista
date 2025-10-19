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
  { src: "/gallery1.jpg", caption: "The Khairagali view" },
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
