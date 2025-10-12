import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
  ];

  return (
    <section className="bg-slate-50 min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Fade>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-10">
            Image Gallery
          </h1>
        </Fade>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <Fade key={i} delay={0.05 * i}>
              <img
                src={src}
                alt={`The Vista view ${i + 1}`}
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover w-full h-64"
              />
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

