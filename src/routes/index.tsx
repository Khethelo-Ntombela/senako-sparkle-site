import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Senako Consulting Services | HR, Trucking & Farming" },
      { name: "description", content: "Senako Consulting Services delivers HR consulting, trucking logistics and farming solutions with integrity and grit." },
      { property: "og:title", content: "Senako Consulting Services" },
      { property: "og:description", content: "HR consulting, trucking and farming — built on integrity and hard work." },
    ],
  }),
  component: Index,
});

type FormState = "idle" | "sending" | "sent";

function Index() {
  const [status, setStatus] = useState<FormState>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "General");
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) return;

    const body = `Hi Senako team,%0D%0A%0D%0AName: ${encodeURIComponent(name)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AService: ${encodeURIComponent(service)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    setStatus("sending");
    window.location.href = `mailto:info@senako.co.za?subject=${encodeURIComponent("New enquiry from " + name)}&body=${body}`;
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 600);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Owners />
      <Contact onSubmit={onSubmit} status={status} />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <Logo />
          <span className="truncate font-display text-base font-semibold tracking-tight sm:text-lg">
            Senako<span className="text-gold">.</span>
          </span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#owners" className="hover:text-gold transition-colors">Founders</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex shrink-0 items-center rounded-md bg-gold px-3 py-2 text-xs font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03] sm:px-4 sm:text-sm">
          Get a quote
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative h-9 w-9 shrink-0">
      <div className="absolute inset-0 rounded-full bg-gold animate-spin-slow opacity-80" style={{ maskImage: "radial-gradient(closest-side, transparent 55%, #000 56%)", WebkitMaskImage: "radial-gradient(closest-side, transparent 55%, #000 56%)" }} />
      <div className="absolute inset-1.5 rounded-full bg-background flex items-center justify-center">
        <span className="font-display text-sm font-bold text-gold">S</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }} />

      {/* animated truck silhouette band */}
      <div className="pointer-events-none absolute bottom-10 left-0 right-0 h-12 overflow-hidden opacity-30">
        <svg className="animate-truck h-12 w-40 text-gold" viewBox="0 0 200 60" fill="currentColor" aria-hidden>
          <rect x="10" y="15" width="100" height="30" rx="3" />
          <rect x="110" y="22" width="55" height="23" rx="3" />
          <circle cx="40" cy="50" r="8" />
          <circle cx="140" cy="50" r="8" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-28 md:py-36">
        <p className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow" />
          Senako Consulting Services
        </p>
        <h1 className="animate-rise font-display text-4xl font-bold leading-[1.1] sm:text-5xl md:text-7xl" style={{ animationDelay: "0.1s" }}>
          People. Logistics. <br />
          <span className="shimmer-text">Land.</span>
        </h1>
        <p className="animate-rise mt-5 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl" style={{ animationDelay: "0.2s" }}>
          We help South African businesses grow through sharp HR consulting,
          reliable trucking, and modern farming solutions — all under one trusted roof.
        </p>
        <div className="animate-rise mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4" style={{ animationDelay: "0.3s" }}>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-center font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]">
            Start a conversation →
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 text-center font-semibold text-foreground hover:border-gold/50 transition-colors">
            Explore services
          </a>
        </div>

        <div className="animate-rise mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 text-sm sm:mt-16 sm:grid-cols-3 sm:gap-6 md:max-w-xl" style={{ animationDelay: "0.4s" }}>
          <Stat value="3" label="Service lines" />
          <Stat value="100%" label="SA-owned" />
          <Stat value="24/7" label="Client support" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="font-display text-3xl font-bold text-gold sm:text-4xl">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider sm:text-sm">{label}</div>
    </div>
  );
}

function Services() {
  const items = [
    {
      title: "HR Consulting",
      desc: "Recruitment, payroll structuring, labour law compliance and workplace training tailored to your team.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
          <circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="10" r="2.5" />
          <path d="M3 19c0-3 3-5 6-5s6 2 6 5" /><path d="M15 18c0-2 2-3.5 4-3.5s2 .5 2 .5" />
        </svg>
      ),
    },
    {
      title: "Trucking & Logistics",
      desc: "Reliable cargo and bulk transport across the country — on time, every time, with full tracking.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
          <rect x="2" y="7" width="12" height="9" rx="1" /><path d="M14 10h5l3 3v3h-8z" />
          <circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
        </svg>
      ),
    },
    {
      title: "Farming Solutions",
      desc: "From land preparation to harvest support — sustainable farming services for commercial growers.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
          <path d="M12 22V8" /><path d="M12 12c-3 0-5-2-5-5 3 0 5 2 5 5z" />
          <path d="M12 12c3 0 5-2 5-5-3 0-5 2-5 5z" /><path d="M4 22h16" />
        </svg>
      ),
    },
  ];
  return (
    <section id="services" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-
