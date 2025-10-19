// src/Gallery.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ---- Error Boundary to catch render-time crashes ----
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("Gallery crashed:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "100vh", padding: 24, background: "#111827", color: "#F9FAFB" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Gallery error</h1>
          <p>Something in <code>Gallery.jsx</code> blew up. Details:</p>
          <pre style={{ marginTop: 12, whiteSpace: "pre-wrap" }}>
            {String(this.state.error)}
          </pre>
          <a href="/" style={{ display: "inline-block", marginTop: 24, padding: "10px 16px", background: "#059669", color: "#fff", borderRadius: 12, textDecoration: "none" }}>
            ← Back to Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

// Simple fade wrapper using framer-motion
const Fade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

function GalleryContent() {
  // 1) Minimal block that will ALWAYS be visible even if Tailwind is broken
  //    If you don't see this box, your route/import is wrong.
  const minimal = (
    <div style={{ padding: 16, background: "#E5E7EB", borderRadius: 12, border: "1px solid #CBD5E1", marginBottom: 20 }}>
      <div style={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>Gallery route works</div>
      <div style={{ color: "#334155", marginTop: 6 }}>
        If you can read this, <code>/gallery</code> is rendering. Scroll down for the styled grid.
      </div>
    </div>
  );

  // 2) Your actual gallery list. Put images in /public and keep paths as below or adjust.
  const IMAGES = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
  ];

  return (
    <section className="min-h-screen bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {minimal}

        <Fade>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Image Gallery</h1>
        </Fade>
        <Fade delay={0.05}>
          <p className="mb-10 text-slate-600">
            If this text is visible, Tailwind classes are being applied on this page.
          </p>
        </Fade>

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

export default function Gallery() {
  return (
    <ErrorBoundary>
      <GalleryContent />
    </ErrorBoundary>
  );
}
