import { Facebook, Instagram, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import logo from "@/assets/ssh-logo.png.asset.json";

const QUICK = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Destinations", "#destinations"],
  ["FAQs", "#faq"],
  ["Contact", "#contact"],
];

const SERVICES = ["Work Visa", "Tourist Visa", "Student Visa", "Health Visa", "Business Visa"];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div>
          <span className="flex h-16 w-16 items-center justify-center rounded-md bg-white p-1 shadow-sm">
            <img src={logo.url} alt="SSH ONEWORLD GROUP" className="h-full w-full object-contain" />
          </span>
          <p className="mt-5 font-display text-lg font-bold uppercase tracking-[0.12em]">
            SSH Oneworld Group
          </p>
          <p className="mt-2 text-sm text-navy-foreground/70">
            Professional Visa &amp; International Mobility Services
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: Music2, label: "TikTok", href: "#" },
              {
                Icon: MessageCircle,
                label: "WhatsApp",
                href: "https://wa.me/254726962188",
              },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy-foreground/15 text-navy-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-navy-foreground/75 transition-colors hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-navy-foreground/75 transition-colors hover:text-gold"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              Alamin Shopping Mall, Eastleigh, Nairobi, Kenya
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <a href="tel:+254726962188" className="hover:text-gold">
                +254 726 962 188
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <p className="text-xs leading-relaxed text-navy-foreground/55">
            Visa decisions are made by the relevant embassies, consulates, immigration authorities,
            or other competent authorities. SSH ONEWORLD GROUP provides consultancy and application
            assistance and does not guarantee visa approval.
          </p>
          <p className="mt-6 text-xs text-navy-foreground/45">
            © 2026 SSH ONEWORLD GROUP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
