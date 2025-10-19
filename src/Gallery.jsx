import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Simple fade wrapper using framer-motion (already in your project)
const Fade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// 1) Put your images in /public (e.g. /public/gallery1.jpg)
// 2) List them here with leading slashes
const IMAGES = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
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
            Photos from The Vista site and design concept. Click any image to view full size.
          </p>
        </Fade>

        {IMAGES.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-slate-600">
              No images found. Add JPGs to the <code className="text-slate-800">/public</code> folder and list them in <code className="text-slate-800">IMAGES</code>.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {IMAGES.map((src, i) => (
              <Fade key={src} delay={0.04 * i}>
                <a href={src} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt={`The Vista view ${i + 1}`}
                    loading="lazy"
                    className="rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 object-cover w-full h-64 border border-slate-200 bg-white"
                  />
                </a>
              </Fade>
            ))}
          </div>
        )}

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
