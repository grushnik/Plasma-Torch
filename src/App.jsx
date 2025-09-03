import React from "react";

// --- Robust asset base resolver -------------------------------------------
function ensureSlash(s) {
  return s.endsWith("/") ? s : s + "/";
}

function resolveBaseUrl() {
  try {
    if (typeof import.meta !== "undefined" && import.meta && import.meta.env) {
      const b = import.meta.env.BASE_URL;
      if (typeof b === "string" && b.length > 0) return ensureSlash(b);
    }
  } catch (_) {}

  if (typeof window !== "undefined" && window.location) {
    const path = window.location.pathname || "/";
    const parts = path.split("/").filter(Boolean);
    if (parts.length > 0) return `/${parts[0]}/`;
  }

  return "/";
}

function baseFromPathname(pathname) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  return parts.length > 0 ? `/${parts[0]}/` : "/";
}

export default function App() {
  const base = resolveBaseUrl();
  const chickenSrc = `${base}chicken.jpg`;

  const tests = [
    { name: "root", pathname: "/", expected: "/" },
    { name: "gh-pages repo root", pathname: "/Website/", expected: "/Website/" },
    { name: "gh-pages file", pathname: "/Website/index.html", expected: "/Website/" },
    { name: "nested path", pathname: "/foo/bar", expected: "/foo/" },
    { name: "repo no trailing slash", pathname: "/Website", expected: "/Website/" },
    { name: "empty string", pathname: "", expected: "/" },
    { name: "null coerced", pathname: /** @type {any} */(null), expected: "/" },
    { name: "double slashes", pathname: "//Website//index.html", expected: "/Website/" }
  ];
  const testResults = tests.map((t) => {
    const got = baseFromPathname(t.pathname);
    return { ...t, got, pass: got === t.expected };
  });

  return (
    <div className="min-h-screen w-full bg-[#5b57a3] text-white font-sans flex flex-col">
      {/* HEADER */}
      <header className="bg-[#5b57a3] border-b border-white/20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-orange-400">Home</a>
            <button type="button" className="hover:text-orange-400">Plasma Source Products ▾</button>
            <a href="#applications" className="text-orange-400 font-medium">Applications</a>
            <a href="#instruments" className="hover:text-orange-400">Radom Instruments</a>
          </nav>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-white text-[#5b57a3] font-semibold hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-grow">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Nitrogen Fixation
              </h1>
              <p className="mt-6 text-lg text-white/90 max-w-xl">
                Plasma-driven nitrogen fixation for decarbonized fertilizer
                production. Modular, electrified systems enabling distributed
                ammonia generation for poultry and crop farms.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#pitch"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-orange-500 font-semibold shadow hover:opacity-95"
                >
                  Watch Pitch
                </a>
              </div>
            </div>

            {/* Single Chicken Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/10">
                <img
                  src={chickenSrc}
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1526662092594-e98c1e356d6b?q=80&w=1600&auto=format&fit=crop"; }}
                  alt="Free-range chickens on a farm"
                  className="w-full h-96 object-cover brightness-110 saturate-110"
                />
              </div>
              <p className="mt-3 text-sm text-white/80">
                Integration with poultry operations: localized ammonia for
                fertilizer loops and water treatment.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-semibold">Technology</h2>
          <p className="mt-6 text-lg text-white/90">
            Our nitrogen fixation technology is built on Cerawave™ microwave plasma torches, which replace 
            conventional copper inductors with high-purity ceramic rings to achieve exceptional efficiency 
            and durability. Operating at 915 MHz with 100 kW magnetrons, the torches generate stable, 
            near-atmospheric plasma inside a quartz chamber, enabling the direct conversion of nitrogen 
            and oxygen into nitric oxide and ultimately nitric acid. This closed-loop system consumes 
            only air, water, a small amount of argon, and electricity—eliminating the need for high-pressure, 
            catalyst-driven methods like Haber-Bosch and Ostwald. By coupling high plasma efficiency with 
            integrated heat recovery, the platform not only produces nitric acid for fertilizer applications 
            but also supplies usable process heat, creating a scalable, sustainable alternative to conventional 
            fertilizer production.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-semibold">How it works</h2>
          <ol className="mt-6 grid md:grid-cols-2 gap-6 list-decimal list-inside text-lg text-white/90">
            <li className="rounded-xl border border-white/10 bg-white/10 p-4">
              Radom plasma makes <strong>Nitric Acid</strong> from air, water, and electricity on the farm.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/10 p-4">
              Heat from the plasma torch is recycled to release <strong>ammonia</strong> from digester water.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/10 p-4">
              <strong>Nitric Acid</strong> and <strong>Ammonia</strong> are combined to make fertilizer.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/10 p-4">
              Clean water is recycled back to the digester.
            </li>
          </ol>
        </section>

        {/* BENEFITS, PITCH, DEMO, etc. remain unchanged */}
        ...
      </main>

      {/* FOOTER remains unchanged */}
    </div>
  );
}
