import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ssh-logo.png.asset.json";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-navy/95 backdrop-blur border-b border-gold/20"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white p-1 shadow-sm">
            <img src={logo.url} alt="SSH ONEWORLD GROUP" className="h-full w-full object-contain" />
          </span>
          <span className="hidden font-display text-sm font-extrabold uppercase leading-tight tracking-[0.14em] text-navy-foreground sm:block">
            SSH Oneworld
            <span className="block text-[0.65rem] font-semibold tracking-[0.3em] text-gold">
              Group
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold-soft sm:inline-flex"
          >
            Start Application
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-gold/30 text-navy-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gold/15 bg-navy px-5 pb-6 pt-2 xl:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy-foreground/10 py-4 text-base font-medium text-navy-foreground/90"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-md bg-gold px-5 py-4 text-center text-base font-semibold text-gold-foreground"
          >
            Start Application
          </a>
        </nav>
      )}
    </header>
  );
}
