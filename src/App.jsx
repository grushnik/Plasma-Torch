import React from "react";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#5b57a3] text-white font-sans flex flex-col">
      {/* HEADER */}
      <header className="bg-[#5b57a3] border-b border-white/20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-orange-400">Home</a>
            <button className="hover:text-orange-400">Plasma Source Products ▾</button>
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

            {/* Cows + Chickens collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/10">
                  <img
                    src="https://loremflickr.com/800/600/cow,farm"
                    alt="Cattle on a farm — cows on pasture"
                    className="w-full h-80 object-cover brightness-110 saturate-110"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/10">
                  <img
                    src="https://loremflickr.com/800/600/chicken,farm"
                    alt="Chickens on a farm — poultry houses"
                    className="w-full h-80 object-cover brightness-110 saturate-110"
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-white/80">
                Integration with poultry <em>and</em> cattle operations:
                localized ammonia for fertilizer loops and water treatment.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <ol className="mt-6 grid md:grid-cols-2 gap-6 list-decimal list-inside text-sm text-white/90">
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

        {/* BENEFITS */}
        <section id="applications" className="border-t border-b border-white/10 py-20 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold">Benefits</h2>
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                <h3 className="font-semibold">Reduced Emissions & Costs</h3>
                <p className="mt-2 text-sm text-white/80">
                  Reduced emissions, transportation costs, and fertilizer price fluctuations.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                <h3 className="font-semibold">Water Reuse & Lower Emissions</h3>
                <p className="mt-2 text-sm text-white/80">
                  Water is reused and ammonia greenhouse emissions are eliminated.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                <h3 className="font-semibold">Organic Fertilizer Revenue</h3>
                <p className="mt-2 text-sm text-white/80">
                  Organic nitrogen-rich fertilizer becomes a source of revenue.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                <h3 className="font-semibold">Anaerobic Digesters Enabled</h3>
                <p className="mt-2 text-sm text-white/80">
                  Makes anaerobic digesters in poultry farms possible and economical.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PITCH */}
        <section id="pitch" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold">Startup Pitch</h2>
          <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vEa7KJBTRAw"
              title="N2Bio pitch"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        {/* DEMO VIDEO */}
        <section id="demo" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold">Demo of Pilot Plant</h2>
          <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4OhJHVxUD5k"
              title="Pilot Plant Demo"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#5b57a3] border-t border-white/20 py-16 px-6 text-sm">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-12">
          <div>
            <div className="mt-4 text-white/90 space-y-2 text-sm">
              <p>
                <strong>Address:</strong>
                <br />
                N27W23676 Paul Rd, Pewaukee, WI 53072, USA
              </p>
              <p>
                <strong>Contact:</strong>
                <br />
                1-855-PLASMA-0 (1-855-752-7620)
                <br />
                inquiries@radomcorp.com
              </p>
            </div>
            <div className="mt-4 flex gap-4 text-xl">
              <a href="#" aria-label="Website">🌐</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="X (Twitter)">✖</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Plasma Source Products</h3>
            <ul className="space-y-2 text-white/90">
              <li>1.5 kW Altair &amp; Mira</li>
              <li>10 kW Polaris</li>
              <li>100 kW Sirius</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="#applications">Applications</a></li>
              <li><a href="#instruments">Radom Instruments</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-xs text-white/70">
          <p>© {new Date().getFullYear()} Radom Corp. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
