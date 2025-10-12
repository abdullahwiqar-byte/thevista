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
  Star,
} from "lucide-react";

// ==============================
// THE VISTA — Full one-page site
// ==============================
const BRAND = {
  name: "The Vista",
  tagline: "Own your peace, in the peaks - Khairagali",
  primary: "from-[#2C5530] to-[#618264]",
  accent: "bg-emerald-600",
  email: "info@thevista.pk",
  phone: "+92 321 488 2238",
  address: "Khairagali, Galiyat Region, Pakistan",
};

const NAV = [
  { label: "Overview", href: "#home" },
  { label: "Location", href: "#location" },
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { label: "Apartments", value: "72" },
  { label: "Floors", value: "12" },
  { label: "Parking", value: "Underground" },
  { label: "Security", value: "24/7" },
];

const HIGHLIGHTS = [
  { title: "Prayer Room in-building", icon: BadgeCheck },
  { title: "Rooftop BBQ Terrace", icon: UtensilsCrossed },
  { title: "Dedicated Staff Quarters", icon: ShieldCheck },
  { title: "Secure Elevators", icon: Building2 },
  { title: "Underground Parking", icon: ParkingCircle },
  { title: "Scenic Mountain Views", icon: Mountain },
];

const RESIDENCE_TYPES = [
  {
    name: "Studio",
    size: "480–880 sq ft",
    blurb: "Compact, elegant layouts designed for efficiency and style.",
    bullets: [
      "Scenic mountain views from thoughtfully positioned windows.",
      "Premium finishes with modern fixtures throughout."
    ],
  },
  {
    name: "1 Bedroom",
    size: "770–1,120 sq ft",
    blurb: "Smart, open-plan designs with defined living zones.",
    bullets: [
      "Expansive windows framing valley and forest views.",
      "Crafted interiors using durable, high-quality materials."
    ],
  },
  {
    name: "2 Bedroom",
    size: "930–1,950 sq ft",
    blurb: "Ideal for families or long-term retreats.",
    bullets: [
      "Dual-aspect views and spacious balconies in select units.",
      "Superior finishing and sound insulation for quiet comfort."
    ],
  },
  {
    name: "3 Bedroom",
    size: "1,590–2,100+ sq ft",
    blurb: "Expansive homes designed for privacy and togetherness.",
    bullets: [
      "Generous living areas opening to panoramic vistas.",
      "Refined detailing with high-end fittings and fixtures."
    ],
  },
  {
    name: "4 Bedroom",
    size: "1,600–3,100+ sq ft",
    blurb: "Large family residences built for luxury and entertaining.",
    bullets: [
      "Terrace and corner layouts offering the best views in the building.",
      "Premium construction, top-grade finishes, and enduring craftsmanship."
    ],
  },
];


const GALLERY = [
  { title: "Elevation Concept", points: ["Modern mountain façade", "Wide rooftop", "Wind-rated parapets"] },
  { title: "Lobby & Lifts", points: ["Access control", "CCTV coverage", "Concierge desk"] },
  { title: "Rooftop Life", points: ["BBQ stations", "Prayer area access", "Panoramic seating"] },
];

const Fade = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="The Vista logo" className="h-10 w-auto" />
            <div>
              <div className="font-semibold tracking-tight">{BRAND.name}</div>
              <div className="text-xs text-slate-500 -mt-0.5">{BRAND.tagline}</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map(n => <a key={n.href} href={n.href} className="text-slate-600 hover:text-slate-900">{n.label}</a>)}
          </nav>
          <a href="#contact" className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white ${BRAND.accent} shadow-sm hover:opacity-90`}>
            <ArrowRight className="h-4 w-4" /> Register Interest
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className={`relative bg-gradient-to-br ${BRAND.primary} text-white`}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <img
            src="/logo.png"
            alt="The Vista logo"
            className="h-56 w-auto absolute top-12 right-8 drop-shadow-lg"            
            />
          <Fade><h1 className="text-5xl md:text-6xl font-black tracking-tight">The Vista — Khairagali</h1></Fade>
          <Fade delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl">
              72 modern mountain apartments across 12 floors with underground parking, expansive rooftop, and an in-building prayer room.
            </p>
          </Fade>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((k, i) => (
            <Fade key={k.label} delay={i * 0.05}>
              <div>
                <div className="text-3xl font-extrabold">{k.value}</div>
                <div className="text-slate-600 text-sm mt-1">{k.label}</div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="location" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <Fade>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Location</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Off the main road for peace and privacy, yet central enough to be your base camp for Galiyat.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" /> ~30 minutes from Murree</li>
              <li className="flex items-center gap-3"><Trees className="h-5 w-5" /> ~60 minutes from Nathia Gali</li>
              <li className="flex items-center gap-3"><Car className="h-5 w-5" /> ~1.5 hours from Islamabad</li>
              <li className="flex items-center gap-3"><Waves className="h-5 w-5" /> Close to walking trails and viewpoints</li>
            </ul>
          </div>
        </Fade>
        <Fade delay={0.1}>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="font-semibold">Mountain Orientation</div>
            <p className="text-sm text-slate-600 mt-2">
              South-west facing massing for long evening light and wind protection. Access road graded for standard sedans in fair weather.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Altitude", value: "~7,700 ft" },
                { label: "Road", value: "Paved + grade" },
                { label: "Snow", value: "Seasonal" },
              ].map((x, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-3">
                  <div className="text-lg font-bold">{x.value}</div>
                  <div className="text-xs text-slate-500">{x.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>

     {/* Residences */}
<section id="residences" className="bg-slate-50 border-y border-slate-200">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    {/* Residences Heading */}
    <Fade>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Residences</h2>
    </Fade>

    {/* Residences Grid */}
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      {RESIDENCE_TYPES.map((r, i) => (
        <Fade key={r.name} delay={0.1 + i * 0.06}>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="font-semibold">{r.name}</div>
            <div className="mt-1 text-sm text-emerald-700">{r.size}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>{r.blurb}</li>
              {r.bullets?.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </Fade>
      ))}
    </div> {/* closes residences grid */}

    {/* Building Features */}
    <Fade>
      <h3 className="mt-16 text-2xl font-semibold tracking-tight">Building Features</h3>
    </Fade>

    {/* Features Grid */}
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      {GALLERY.map((g, i) => (
        <Fade key={g.title} delay={0.1 + i * 0.06}>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="font-semibold">{g.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
              {g.points.map((p, j) => (<li key={j}>{p}</li>))}
            </ul>
          </div>
        </Fade>
      ))}
    </div> {/* closes features grid */}
  </div> {/* closes max-width container */}
</section> {/* closes entire residences section */}

       {/* Amenities */}
      <section id="amenities" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Fade><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Amenities</h2></Fade>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <Fade key={h.title} delay={0.1 + i * 0.05}>
              <div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition-shadow bg-white">
                <h.icon className="h-6 w-6" />
                <div className="mt-4 font-semibold">{h.title}</div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Fade>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing</h2>
            <p className="mt-3 text-slate-300">From <span className="font-semibold">Rs. 20,000 / sq. ft.</span> Final prices vary by floor, exposure, and plan.</p>
          </Fade>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {["Shell & Core", "Semi-Furnished", "Penthouse"].map((tier, i) => (
              <Fade key={tier} delay={0.1 + i * 0.06}>
                <div className="rounded-2xl border border-white/15 p-6 bg-white/5">
                  <div className="font-semibold">{tier}</div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" /> Mountain-oriented layouts</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" /> Elevator & parking access</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" /> Developer finishing options</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-xl text-slate-900 bg-white hover:opacity-90">
                    Request inventory <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-start">
          <Fade>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Register your interest</h2>
              <p className="mt-3 text-slate-600">Sales & information</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <div className="flex items-center gap-3"><Mail className="h-5 w-5" /> {BRAND.email}</div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5" /> {BRAND.phone} (Abdullah Waqar)</div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /> {BRAND.address}</div>
              </div>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-2xl bg-white text-slate-900 p-6 space-y-4">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-2xl font-semibold">Thanks. We’ll be in touch.</div>
                  <div className="mt-2 text-slate-600 text-sm">Our team will contact you with inventory and site details.</div>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-sm text-slate-600">Name</label>
                    <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-600">Email</label>
                      <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" required />
                    </div>
                    <div>
                      <label className="text-sm text-slate-600">Phone</label>
                      <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="+92…" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Message</label>
                    <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Unit type, budget, timeline" required />
                  </div>
                  <button type="submit" className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white ${BRAND.accent} hover:opacity-90`}>
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="text-xs text-slate-500">Demo form only. Connect to your backend or a form service when live.</div>
                </>
              )}
            </form>
          </Fade>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#location" className="hover:text-slate-900">Location</a>
            <a href="#residences" className="hover:text-slate-900">Residences</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

















