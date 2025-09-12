import React, { useEffect, useMemo, useState } from "react";

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

// --- Mini Carousel (no deps) ----------------------------------------------
function useInterval(callback, delay) {
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
}

function Carousel({ images = [], autoMs = 5000, aspect = "aspect-[16/9]" }) {
  const [i, setI] = useState(0);
  const n = images.length;
  useInterval(() => setI((p) => (p + 1) % n), n > 1 ? autoMs : null);

  if (n === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${aspect}`}>
      {images.map((src, idx) => (
        <img
          key={src + idx}
          src={src}
          alt={`Slide ${idx + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1581094651168-6b1b7a2f3aa1?q=80&w=1600&auto=format&fit=crop";
          }}
        />
      ))}

      {/* dots */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === i ? "bg-white" : "bg-white/40"}`}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* arrows */}
      {n > 1 && (
        <>
          <button
            onClick={() => setI((p) => (p - 1 + n) % n)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 px-2 py-1 text-white hover:bg-black/50"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setI((p) => (p + 1) % n)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 px-2 py-1 text-white hover:bg-black/50"
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

export default function App() {
  const base = resolveBaseUrl();

  // --- Assets (place your 100 kW torch photos into /public or GH Pages root)
  // Example filenames; rename to your actual assets (kept robust to BASE_URL)
  const torchImages = useMemo(
    () => [
      `${base}sirius_100kw_01.jpg`,
      `${base}sirius_100kw_02.jpg`,
      `${base}sirius_100kw_03.jpg`,
    ],
    [base]
  );

  const tests = [
    { name: "root", pathname: "/", expected: "/" },
    { name: "gh-pages repo root", pathname: "/N2bio/", expected: "/N2bio/" },
    { name: "gh-pages file", pathname: "/N2bio/index.html", expected: "/N2bio/" },
    { name: "nested path", pathname: "/foo/bar", expected: "/foo/" },
    { name: "repo no trailing slash", pathname: "/N2bio", expected: "/N2bio/" },
    { name: "empty string", pathname: "", expected: "/" },
    { name: "null coerced", pathname: /** @type {any} */ (null), expected: "/" },
    { name: "double slashes", pathname: "//N2bio//index.html", expected: "/N2bio/" },
  ];
  const testResults = tests.map((t) => {
    const got = baseFromPathname(t.pathname);
    return { ...t, got, pass: got === t.expected };
  });

  // Telegram links
  const tgChannel = "https://t.me/plasma_torch"; // public channel
  const tgGroup = "https://t.me/+YOUR_GROUP_INVITE"; // TODO: replace with actual invite for “Plasma Nitrification and Plasma Gasification”

  return (
    <div className="min-h-screen w-full bg-[#5b57a3] text-white font-sans flex flex-col">
      {/* TOP STRIP CTA */}
      <div className="bg-orange-500/90 text-sm md:text-base">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-medium">Chat with a Radom plasma specialist — instant answers on Telegram.</span>
          <div className="flex gap-2">
            <a href={tgChannel} target="_blank" rel="noreferrer" className="rounded-lg bg-white text-[#5b57a3] px-3 py-1 font-semibold hover:bg-gray-100">Join Channel</a>
            <a href={tgGroup} target="_blank" rel="noreferrer" className="rounded-lg border border-white/60 px-3 py-1 font-semibold hover:bg-white/10">Ask in Group</a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-[#5b57a3] border-b border-white/20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8 text-sm">
            <a href="https://www.radomcorp.com/" className="hover:text-orange-400">Home</a>
            <a href="https://www.radomcorp.com/plasma-source-products" className="hover:text-orange-400">Plasma Source Products ▾</a>
            <a href="#telegram" className="text-orange-400 font-medium">Telegram</a>
            <a href="#gallery" className="hover:text-orange-400">Gallery</a>
            <a href="#video" className="hover:text-orange-400">Plasma Video</a>
          </nav>
          <a href="https://www.radomcorp.com/request-form" className="px-4 py-2 rounded-lg bg-white text-[#5b57a3] font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-grow">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Buy a Plasma Torch — Talk to Us Instantly</h1>
              <p className="mt-6 text-lg text-white/90 max-w-xl">
                Radom’s Plasma Torch Assistant connects you directly with our plasma specialists for instant answers. Get brochures, technical specs, and a tailored recommendation — all in minutes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={tgChannel} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-orange-500 font-semibold shadow hover:opacity-95">Join Telegram Channel</a>
                <a href={tgGroup} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-white/50 bg-white/5 font-semibold hover:bg-white/10">Ask in Telegram Group</a>
                <a href="https://www.radomcorp.com/request-form" className="px-5 py-3 rounded-xl bg-white text-[#5b57a3] font-semibold hover:bg-gray-100">Free Consultation</a>
              </div>
            </div>

            {/* Carousel (100 kW Torch) */}
            <div id="gallery" className="relative">
              <Carousel images={torchImages} aspect="aspect-[4/3]" />
              <p className="mt-3 text-sm text-white/80">Sirius 100 kW microwave plasma torch — gallery.</p>
            </div>
          </div>
        </section>

        {/* TELEGRAM SECTION */}
        <section id="telegram" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
          <h2 className="text-3xl md:text-4xl font-semibold">Join the Conversation on Telegram</h2>
          <p className="mt-4 text-lg text-white/90 max-w-3xl">
            Prefer instant chat? Our specialists are available in Telegram. Subscribe for product updates in the channel or ask technical questions in the group.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <a href={tgChannel} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/10 p-5 hover:bg-white/15">
              <div className="text-xl font-semibold">Telegram Channel</div>
              <div className="mt-1 text-white/80 text-sm">News, specs, brochures, and announcements.</div>
              <div className="mt-4 inline-block rounded-lg bg-white text-[#5b57a3] px-4 py-2 font-bold">t.me/plasma_torch →</div>
            </a>
            <a href={tgGroup} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/10 p-5 hover:bg-white/15">
              <div className="text-xl font-semibold">Telegram Group</div>
              <div className="mt-1 text-white/80 text-sm">“Plasma Nitrification and Plasma Gasification” — Q&A with our team.</div>
              <div className="mt-4 inline-block rounded-lg border border-white/70 px-4 py-2 font-bold">Join the group →</div>
            </a>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section id="video" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
          <h2 className="text-3xl md:text-4xl font-semibold">Watch the Plasma in Action</h2>
          <p className="mt-4 text-lg text-white/90 max-w-3xl">
            See our high-power microwave plasma torch operating at 100 kW. For more demos, visit our YouTube channel.
          </p>
          <div className="mt-6 aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10">
            {/* Replace VIDEO_ID with the specific YouTube ID you want to showcase */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Radom 100 kW Plasma Torch"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="mt-4 text-center">
            <a href="https://www.youtube.com/@RadomCorporation" target="_blank" rel="noreferrer" className="underline">More videos on YouTube</a>
          </div>
        </section>

        {/* DEV DIAGNOSTICS */}
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <details className="mt-4 text-xs text-white/80">
            <summary>Dev diagnostics: base URL + tests</summary>
            <div className="mt-2">Detected base: <code>{base}</code></div>
            <table className="mt-2 w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-1 pr-4">name</th>
                  <th className="py-1 pr-4">pathname</th>
                  <th className="py-1 pr-4">expected</th>
                  <th className="py-1 pr-4">got</th>
                  <th className="py-1 pr-4">pass</th>
                </tr>
              </thead>
              <tbody>
                {testResults.map((t) => (
                  <tr key={t.name} className="border-b border-white/10">
                    <td className="py-1 pr-4">{t.name}</td>
                    <td className="py-1 pr-4"><code>{String(t.pathname)}</code></td>
                    <td className="py-1 pr-4"><code>{t.expected}</code></td>
                    <td className="py-1 pr-4"><code>{t.got}</code></td>
                    <td className="py-1 pr-4">{t.pass ? "✅" : "❌"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
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
            {/* Social links */}
            <div className="mt-4 flex gap-4 text-xl">
              <a href="https://www.radomcorp.com/" target="_blank" rel="noopener noreferrer" aria-label="Website" title="Website — radomcorp.com">🌐</a>
              <a href="https://x.com/RadomCorpPlasma" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)">✖</a>
              <a href="https://www.linkedin.com/company/radom-corp-high-power" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">in</a>
              <a href="https://www.youtube.com/@RadomCorporation" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">▶</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Plasma Source Products</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="https://www.radomcorp.com/products/mira-altair">1.5 kW Altair &amp; Mira</a></li>
              <li><a href="https://www.radomcorp.com/products/polaris">10 kW Polaris</a></li>
              <li><a href="https://www.radomcorp.com/products/sirius">100 kW Sirius</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="#telegram">Telegram</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#video">Plasma Video</a></li>
              <li><a href="https://www.radomcorp.com/request-form">Free Consultation</a></li>
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
