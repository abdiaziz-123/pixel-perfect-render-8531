import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import logo from "@/assets/ncco-logo.svg.asset.json";
import { launchLabel } from "@/lib/launch-schedule";
export function SiteFooter() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <img
            src={logo.url}
            alt="NCCO"
            width={682}
            height={682}
            className="h-28 w-28 rounded-md bg-background p-2 object-contain"
          />
          <p className="mt-4 max-w-64 text-sm leading-6 text-on-primary/75">
            Connecting People. Advancing Cancer Care. Saving Lives. Pre-launch — launching {launchLabel}.
          </p>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold">Explore NCCO</h3>
          <div className="flex flex-col gap-3 text-xs text-on-primary/75">
            <Link to="/about">About us</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/research">Research & data</Link>
            <Link to="/partners">Our partnerships</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold">Care & support</h3>
          <div className="flex flex-col gap-3 text-xs text-on-primary/75">
            <Link to="/cancer-care">Cancer information</Link>
            <Link to="/patient-navigation">Patient navigation</Link>
            <Link to="/cancerconnect">CancerConnect · Planned</Link>
            <Link to="/get-involved">Get involved</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold">Let’s connect</h3>
          <a
            href="mailto:info@northerncancercare.org"
            className="flex items-start gap-2 break-all text-xs text-on-primary/80"
          >
            <Mail size={15} className="shrink-0" />
            info@northerncancercare.org
          </a>
          <Link to="/contact" className="mt-6 flex items-center gap-2 text-xs">
            Contact NCCO <ArrowUpRight size={14} />
          </Link>
          <p className="mt-6 text-xs text-on-primary/65">Official social media channels: coming soon.</p>
        </div>
      </div>
      <div className="site-container border-t border-on-primary/20 py-6">
        <p className="max-w-4xl text-[11px] leading-5 text-on-primary/65">
          Information is for educational purposes only and is not a substitute for professional
          medical advice, diagnosis or treatment. For urgent medical concerns, contact a healthcare
          facility.
        </p>
        <div className="mt-5 flex flex-wrap justify-between gap-3 text-[11px] text-on-primary/65">
          <span>© 2026 Northern Cancer Care Organization.</span>
          <span className="flex gap-4">
            <Link to="/contact">Report incorrect information</Link>
            <Link to="/privacy">Privacy & patient information</Link>
            <Link to="/staff">Staff</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
