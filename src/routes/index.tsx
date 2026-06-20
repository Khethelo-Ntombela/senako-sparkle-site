import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import ownersTruck from "@/assets/owners-truck.jpg.asset.json";
import sheepImg from "@/assets/sheep.jpg.asset.json";

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
    <div className="min-h-screen bg-background text-foreground">
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
    <div className="relative h-9 w-9">
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

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-36">
        <p className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow" />
          Senako Consulting Services
        </p>
        <h1 className="animate-rise font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-7xl" style={{ animationDelay: "0.1s" }}>
          People. Logistics. <br />
          <span className="shimmer-text">Land.</span>
        </h1>
        <p className="animate-rise mt-5 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl" style={{ animationDelay: "0.2s" }}>
          We help South African businesses grow through sharp HR consulting,
          reliable trucking, and modern farming solutions — all under one trusted roof.
        </p>
        <div className="animate-rise mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4" style={{ animationDelay: "0.3s" }}>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]">
            Start a conversation →
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 font-semibold text-foreground hover:border-gold/50 transition-colors">
            Explore services
          </a>
        </div>

        <div className="animate-rise mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 text-sm sm:mt-16 sm:gap-6 md:max-w-xl" style={{ animationDelay: "0.4s" }}>
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
      <div className="font-display text-2xl font-bold text-gold sm:text-3xl">{value}</div>
      <div className="text-xs text-muted-foreground sm:text-sm">{label}</div>
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
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Three businesses. One standard.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold transition-transform group-hover:scale-110">
                  {it.icon}
                </div>
                <h3 className="font-display text-xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative border-y border-border bg-card/40 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">About Senako</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Built on integrity, driven by results.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Senako Consulting Services is a proudly South African company combining
            people-first HR practices, dependable trucking, and modern farming under
            one banner. We believe in straight talk, honest pricing, and the kind
            of delivery that earns repeat business.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Transparent pricing", "Local expertise", "Hands-on leadership", "Long-term partnerships"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-primary-foreground text-xs font-bold">✓</span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-card to-background p-1 shadow-gold">
            <div className="h-full w-full rounded-xl bg-background/60 p-8 flex flex-col justify-between min-h-[420px]">
              <div className="animate-float">
                <div className="font-display text-7xl font-bold text-gold/80 leading-none">S.</div>
                <div className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">Senako</div>
              </div>

              {/* Scrollable image strip */}
              <div className="mt-6">
                <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Gallery</p>
                <div
                  className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "oklch(0.32 0.008 60) transparent" }}
                >
                  {[
                    { n: 1, src: null as string | null },
                    { n: 2, src: ownersTruck.url },
                    { n: 3, src: sheepImg.url },
                  ].map(({ n, src }) => (
                    <div
                      key={n}
                      className="snap-center shrink-0 w-[180px] h-[120px] rounded-lg border border-dashed border-gold/30 bg-gold/5 flex flex-col items-center justify-center gap-2 text-gold/60 text-xs overflow-hidden"
                    >
                      {src ? (
                        <img src={src} alt={`Senako gallery ${n}`} className="h-full w-full object-cover" loading="lazy" />
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 opacity-60">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </svg>
                          <span>Image {n}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-wider text-muted-foreground">
                <div className="rounded-lg border border-border py-3">HR</div>
                <div className="rounded-lg border border-gold/40 py-3 text-gold">Trucking</div>
                <div className="rounded-lg border border-border py-3">Farming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Owners() {
  const owners = [
    { name: "Hetisani Mbanyele", role: "Co-Founder & Director", phone: "0829047800" },
    { name: "Simphiwe Ntombela", role: "Co-Founder & Director", phone: "0833216757" },
  ];
  return (
    <section id="owners" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">The founders</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">The people behind Senako.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {owners.map((o) => (
            <div key={o.name} className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-gold/40">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold font-display text-2xl font-bold text-primary-foreground">
                  {o.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">{o.name}</h3>
                  <p className="text-sm text-muted-foreground">{o.role}</p>
                  <a href={`tel:${o.phone}`} className="mt-4 inline-flex items-center gap-2 text-gold hover:underline">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {o.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ onSubmit, status }: { onSubmit: (e: FormEvent<HTMLFormElement>) => void; status: FormState }) {
  return (
    <section id="contact" className="relative border-t border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Get in touch</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Let's talk about your project.</h2>
          <p className="mt-5 text-muted-foreground">
            Whether you need HR support, transport, or farming services — drop us a
            message and we'll be in touch within one business day.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href="mailto:hetisani@senakoconsult.com" className="flex items-center gap-3 text-foreground hover:text-gold break-all">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold">H</span>
              hetisani@senakoconsult.com
            </a>
            <a href="mailto:simphiwe@senakoconsult.com" className="flex items-center gap-3 text-foreground hover:text-gold break-all">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold">S</span>
              simphiwe@senakoconsult.com
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 rounded-2xl border border-border bg-background/60 p-6 md:p-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required placeholder="Jane Dube" />
            <Field label="Email" name="email" type="email" required placeholder="you@email.com" />
            <Field label="Phone" name="phone" type="tel" placeholder="082 000 0000" />
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Service</label>
              <select name="service" defaultValue="HR Consulting" className="rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30">
                <option>HR Consulting</option>
                <option>Trucking & Logistics</option>
                <option>Farming Solutions</option>
                <option>General enquiry</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea name="message" required rows={5} maxLength={1000} placeholder="Tell us about your project..." className="rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30" />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {status === "sending" ? "Opening your mail app..." : status === "sent" ? "Message ready ✓" : "Send message"}
          </button>
          <p className="text-xs text-muted-foreground">
            By submitting, you agree to be contacted regarding your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-6xl px-6 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo />
            <span>© {new Date().getFullYear()} Senako Consulting Services</span>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-gold">Services</a>
            <a href="#owners" className="hover:text-gold">Founders</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs opacity-60">
          Maintained by Litha Ntombela Enterprises Pty Ltd
        </p>
      </div>
    </footer>
  );
}
