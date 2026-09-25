import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Briefcase,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  GraduationCap,
  HeartPulse,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImage from "@/assets/hero-istanbul.jpg";
import aboutImage from "@/assets/about-consultation.jpg";
import turkiyeImage from "@/assets/work-turkiye.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SSH ONEWORLD GROUP | Visa & International Mobility Consultancy" },
      {
        name: "description",
        content:
          "Professional visa consultancy and international mobility assistance from Nairobi, Kenya — Türkiye, Albania, Schengen, Serbia and the UAE.",
      },
      { property: "og:title", content: "SSH ONEWORLD GROUP | Visa & Mobility Consultancy" },
      {
        property: "og:description",
        content:
          "Work, student, tourist, health and business visa assistance from Kenya to destinations around the world.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/254726962188";

const SERVICES = [
  {
    icon: Briefcase,
    title: "Work Visa",
    text: "Assistance for clients seeking international employment and work-related visa opportunities.",
  },
  {
    icon: Plane,
    title: "Tourist Visa",
    text: "Guidance for travelers planning international holidays, visits, and tourism.",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    text: "Application guidance for students pursuing education abroad.",
  },
  {
    icon: HeartPulse,
    title: "Health Visa",
    text: "Assistance with documentation and visa processes related to medical travel.",
  },
  {
    icon: Users,
    title: "Business Visa",
    text: "Support for business travelers, meetings, conferences, and international business activities.",
  },
  {
    icon: Globe2,
    title: "Other Visa Services",
    text: "Additional visa and international travel assistance based on destination and eligibility.",
  },
];

const WHY_CARDS = [
  { title: "Professional Guidance", text: "A structured, experienced approach to every application." },
  { title: "Personalized Assistance", text: "Support shaped around your circumstances and destination." },
  { title: "Clear Documentation Support", text: "Help identifying and preparing required documents." },
  { title: "International Destinations", text: "Assistance covering a range of selected destinations." },
  { title: "Client-Focused Service", text: "Direct communication and follow-up at every stage." },
];

const DESTINATIONS = [
  { name: "Türkiye", text: "Visa and international mobility assistance." },
  { name: "Albania", text: "Visa assistance and travel documentation." },
  { name: "Schengen", text: "Assistance for selected Schengen destinations." },
  { name: "Serbia", text: "Visa and travel assistance." },
  { name: "United Arab Emirates", text: "Visa and travel assistance." },
];

const STEPS = [
  { n: "01", title: "Consultation", text: "Tell us about your travel, work, study, or business plans." },
  {
    n: "02",
    title: "Document Review",
    text: "We help identify the required documentation and application requirements.",
  },
  {
    n: "03",
    title: "Application Preparation",
    text: "We assist with preparing your application and supporting documents.",
  },
  {
    n: "04",
    title: "Submission & Follow-up",
    text: "We guide you through the next stages of the process.",
  },
];

const PILLARS = [
  { title: "Professional", text: "A structured approach to visa and international mobility assistance." },
  { title: "Transparent", text: "Clear information about requirements, processes, and responsibilities." },
  { title: "Personalized", text: "Guidance based on each client's circumstances and destination." },
  { title: "International", text: "Access to assistance covering multiple destinations." },
];

const FAQS = [
  {
    q: "What visa services do you offer?",
    a: "We assist with work, tourist, student, health and business visa applications, as well as other travel documentation depending on your destination and eligibility.",
  },
  {
    q: "Which countries do you assist with?",
    a: "Our main focus is Türkiye, alongside Albania, selected Schengen countries, Serbia and the United Arab Emirates.",
  },
  {
    q: "How long does a visa application take?",
    a: "Processing times vary by destination, visa category and the relevant authority's workload. We share the expected timelines for your specific case during consultation.",
  },
  {
    q: "What documents do I need?",
    a: "Requirements differ by destination and visa type. After an initial consultation we provide a documentation checklist tailored to your application.",
  },
  {
    q: "Can you guarantee visa approval?",
    a: "No. Final decisions are made solely by the relevant embassy, consulate, immigration authority or other competent authority. We provide consultancy and application assistance only.",
  },
  {
    q: "Do you assist with work visas?",
    a: "Yes. We guide clients through work visa requirements and application preparation. Employment opportunities remain subject to employer requirements and immigration regulations.",
  },
  {
    q: "Do you assist with student visas?",
    a: "Yes. We support students with documentation and application preparation for study abroad.",
  },
  {
    q: "How can I start my application?",
    a: "Send us your details through the contact form below, call us, or message us on WhatsApp at +254 726 962 188.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <Turkiye />
        <HowItWorks />
        <WhySection />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-elevate transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Istanbul skyline at dusk"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/15" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 lg:px-8">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">Visa & International Mobility Consultancy</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-6xl lg:text-7xl">
            Your Journey.
            <span className="block text-gold">Our Expertise.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            Professional visa and international mobility assistance from Kenya to destinations
            around the world.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-4 text-base font-semibold text-gold-foreground transition-colors hover:bg-gold-soft"
            >
              Start Your Application
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-navy-foreground/30 px-8 py-4 text-base font-semibold text-navy-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Explore Our Services
            </a>
          </div>
          <p className="mt-12 border-t border-navy-foreground/15 pt-6 text-xs uppercase tracking-[0.2em] text-navy-foreground/60 sm:text-sm">
            Professional Guidance • Transparent Process • International Destinations
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 rule-gold font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-navy-foreground" : "text-navy"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={aboutImage}
            alt="Consultants reviewing travel documentation with a client"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-lg object-cover shadow-elevate"
          />
          <div className="absolute -bottom-5 -right-3 hidden rounded-md bg-gold px-6 py-5 text-gold-foreground shadow-card sm:block">
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
              Nairobi, Kenya
            </p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="About Us" title="Your Global Journey Starts Here" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              SSH ONEWORLD GROUP provides professional visa consultancy and international mobility
              assistance to individuals, students, professionals, families, and businesses.
            </p>
            <p>
              We help clients understand application requirements, prepare documentation, and
              navigate the visa application process for selected international destinations.
            </p>
            <p>
              Our approach is built around professionalism, transparency, careful documentation, and
              personalized client support.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 lg:px-8">
        <h3 className="font-display text-xl font-bold uppercase tracking-[0.14em] text-navy">
          Why Choose SSH ONEWORLD GROUP
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-border bg-card p-7 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <CheckCircle2 className="h-6 w-6 text-gold" />
              <h4 className="mt-5 font-display text-lg font-bold text-navy">{card.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Our Services" title="Visa & Mobility Assistance" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group flex flex-col rounded-lg border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-[0.06em] text-navy">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-gold"
              >
                Learn More
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Destinations" title="Where We Assist" light />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <div
              key={d.name}
              className="rounded-lg border border-navy-foreground/12 bg-navy-soft/40 p-8 transition-colors hover:border-gold/60"
            >
              <MapPin className="h-6 w-6 text-gold" />
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-[0.08em]">
                {d.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{d.text}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-lg border border-gold/40 p-8">
            <p className="text-sm leading-relaxed text-navy-foreground/75">
              Not sure which destination fits your plans? We will walk you through the options and
              requirements.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold-soft"
            >
              Find Your Destination
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Turkiye() {
  return (
    <section id="turkiye" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading eyebrow="Featured Market" title="Work in Türkiye" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Explore international employment opportunities and receive professional guidance
            throughout the application process.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Employment opportunity information",
              "Documentation guidance",
              "Work visa assistance",
              "Application preparation",
              "Client support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy">
                <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-navy px-8 py-4 text-base font-semibold text-navy-foreground transition-colors hover:bg-navy-soft"
          >
            Explore Türkiye Opportunities
          </a>
          <p className="mt-8 border-l-2 border-gold pl-5 text-xs leading-relaxed text-muted-foreground">
            Employment opportunities and visa approval are subject to employer requirements,
            immigration regulations, and the relevant authorities' decisions.
          </p>
        </div>
        <img
          src={turkiyeImage}
          alt="Workers and engineers on a project site in Türkiye"
          loading="lazy"
          width={1280}
          height={960}
          className="w-full rounded-lg object-cover shadow-elevate"
        />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="A Clear, Guided Process" />
        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="relative border-l-2 border-gold/30 pl-6 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-8">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gold lg:left-0 lg:-top-[9px]" />
              <p className="font-display text-sm font-bold tracking-[0.2em] text-gold">{step.n}</p>
              <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Why SSH Oneworld Group" title="Built On Trust And Clarity" light />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-navy-foreground/10 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-navy p-10 transition-colors hover:bg-navy-soft/40">
              <ShieldCheck className="h-6 w-6 text-gold" />
              <h3 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-base font-bold text-navy">
                {item.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      "New enquiry — SSH ONEWORLD GROUP",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      `Destination: ${data.get("destination")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  };

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3.5 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

  return (
    <section id="contact" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading eyebrow="Contact Us" title="Start Your Application" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Share a few details about your plans and our team will get back to you with the next
            steps.
          </p>
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm text-navy">
                Alamin Shopping Mall, Eastleigh, Nairobi, Kenya
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <a href="tel:+254726962188" className="text-sm text-navy hover:text-gold">
                +254 726 962 188
              </a>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <a
                href="mailto:sshbusinessconsultant@gmail.com"
                className="break-all text-sm text-navy hover:text-gold"
              >
                sshbusinessconsultant@gmail.com
              </a>
            </li>
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-md bg-navy px-7 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-soft"
          >
            <MessageCircle className="h-5 w-5 text-gold" />
            Chat on WhatsApp
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-border bg-card p-7 shadow-card sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input name="name" required placeholder="Full name" className={field} />
            <input name="phone" required placeholder="Phone number" className={field} />
            <input name="email" type="email" placeholder="Email address" className={field} />
            <select name="service" required defaultValue="" className={field}>
              <option value="" disabled>
                Service required
              </option>
              {SERVICES.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            <select name="destination" required defaultValue="" className={`${field} sm:col-span-2`}>
              <option value="" disabled>
                Destination
              </option>
              {DESTINATIONS.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name}
                </option>
              ))}
              <option value="Other / Not sure">Other / Not sure</option>
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your plans"
              className={`${field} sm:col-span-2`}
            />
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-gold-foreground transition-colors hover:bg-gold-soft"
          >
            <Send className="h-5 w-5" />
            Start Your Application
          </button>
          {sent && (
            <p className="mt-4 text-sm text-navy">
              Thank you — your details have been prepared in WhatsApp. You can also call us directly.
            </p>
          )}
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Submitting this form does not create a visa application. Final decisions rest with the
            relevant authorities.
          </p>
        </form>
      </div>
    </section>
  );
}
