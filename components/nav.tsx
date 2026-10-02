"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#market", label: "Market" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
];

// Sister business (cleaning, gardening, landscaping) — styled in its own green so it reads as a separate site.
const cleaningUrl = "https://cleaning.bitutam.co.ke";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#0f1417]/95 backdrop-blur-md shadow-lg shadow-black/25"
          : "bg-gradient-to-b from-black/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[#e9a13b] font-display text-xl font-bold text-[#0f1417]">
            B
          </span>
          <span className="leading-none text-white">
            <span className="block font-display text-lg font-bold uppercase tracking-wider">Bitutam</span>
            <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-white/60">
              International
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <a
            href={cleaningUrl}
            className="flex items-center gap-2 rounded-full border border-[#7bc144] bg-[#7bc144]/15 px-4 py-1.5 font-display text-sm font-semibold uppercase tracking-wider text-[#a5dc78] transition-colors hover:bg-[#7bc144] hover:text-[#062615]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Cleaning
          </a>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-display text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#e9a13b] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#e9a13b] px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-[#0f1417] transition-colors hover:bg-[#f5b841]"
          >
            Request a Quote
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center text-white lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 lg:hidden">
          <div className="mx-auto max-w-7xl px-5 pb-6 pt-2 sm:px-8">
            <a
              href={cleaningUrl}
              onClick={() => setOpen(false)}
              className="mt-3 mb-1 flex items-center justify-center gap-2 rounded-full border border-[#7bc144] bg-[#7bc144]/15 py-3 font-display font-semibold uppercase tracking-wider text-[#a5dc78]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Cleaning &amp; Landscaping
            </a>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3.5 font-display text-lg uppercase tracking-wide text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 block bg-[#e9a13b] py-3 text-center font-display font-semibold uppercase tracking-wider text-[#0f1417]"
            >
              Request a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
