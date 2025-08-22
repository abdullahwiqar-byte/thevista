import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mountain,
  MapPin,
  Car,
  Trees,
  UtensilsCrossed,
  Waves,
  Building2,
  BadgeCheck,
  ParkingCircle,
  ShieldCheck,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";

// =============================================
// THE VISTA — One-page site (React + Tailwind)
// =============================================
const BRAND = {
  name: "The Vista",
  tagline: "Your private summer escape in Khairagali",
  primary: "from-sky-900 to-slate-800",
  accent: "bg-emerald-600",
  email: "info@thevista.pk",
  phone: "+92 321 488 2238",
  address: "Khairagali, Galiyat Region, Pakistan",
};

const Fade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section
        id="home"
        className={`relative bg-gradient-to-br ${BRAND.primary} text-white`}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <Fade>
            <h1 className="text-5xl font-black tracking-tight">
              The Vista — Khairagali
            </h1>
          </Fade>
          <Fade delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl">
              72 modern mountain apartments across 12 floors with underground
              parking, rooftop BBQ, and an in-building prayer room.
            </p>
          </Fade>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-slate-50 border-t border-slate-200 py-20"
      >
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold tracking-tight">Register Interest</h2>
          <form
            onSubmit={onSubmit}
            className="mt-6 rounded-2xl bg-white text-slate-900 p-6 space-y-4"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-2xl font-semibold">
                  Thanks. We’ll be in touch.
                </div>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-sm text-slate-600">Name</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    placeholder="Tell us your preferred unit type, budget, and timeline"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white ${BRAND.accent}`}
                >
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
