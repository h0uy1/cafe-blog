"use client";

import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const menuItems = [
  {
    name: "Signature Latte",
    price: "$6",
    description: "Single-origin espresso, silky milk, and a hint of Madagascar vanilla.",
  },
  {
    name: "Velvet Mocha",
    price: "$7",
    description: "Dark chocolate, espresso, and cloud-soft foam finished with cocoa.",
  },
  {
    name: "Pistachio Croissant",
    price: "$5",
    description: "Buttery layers filled with roasted pistachio cream and sea salt.",
  },
  {
    name: "Brunch Toast",
    price: "$8",
    description: "Sourdough, whipped ricotta, avocado, herbs, and citrus oil.",
  },
];

const highlights = [
  "Artisan coffee roasted in small batches",
  "Calm lounge seating for meetings and slow mornings",
  "Fresh pastries baked daily with seasonal ingredients",
];

const visitNotes = [
  "Weekdays: 8:00 AM - 8:00 PM",
  "Weekends: 9:00 AM - 7:00 PM",
  "Private tasting nights every Friday at 7:30 PM",
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!name.trim()) validationErrors.name = "Please enter your name.";

    if (!email.trim()) {
      validationErrors.email = "Please enter your email.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Please use a valid email address.";
    }

    if (!message.trim()) validationErrors.message = "Please tell us how we can help.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      Swal.fire({
        title: "Reservation Request Received",
        text: "Our team will get back to you shortly.",
        icon: "success",
        confirmButtonColor: "#7b5a43",
      });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_rgba(212,186,147,0.18),_transparent_36%),linear-gradient(135deg,_rgba(23,15,10,0.84),_rgba(23,15,10,0.5))]" />
        <Image
          src="/home.jpg"
          alt="Luxury cafe interior"
          fill
          priority
          className="-z-10 object-cover object-center pointer-events-none scale-[1.02] opacity-55"
        />
        <div className="relative z-20 mx-auto flex min-h-[92vh] max-w-7xl flex-col px-6 pb-12 pt-6 sm:px-10">
          <header className="glass-panel relative z-20 flex items-center justify-between rounded-full px-5 py-3 text-[0.95rem] text-white/88">
            <div>
              <p className="font-serif text-xl tracking-[0.24em] uppercase">Cozy Cafe</p>
            </div>
            <nav className="hidden gap-6 md:flex">
              <a href="#story" className="transition hover:text-[var(--color-gold)]">
                Story
              </a>
              <a href="#menu" className="transition hover:text-[var(--color-gold)]">
                Menu
              </a>
              <a href="#visit" className="transition hover:text-[var(--color-gold)]">
                Visit
              </a>
            </nav>
          </header>

          <div className="relative z-20 grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.32em] text-[var(--color-gold-soft)]">
                Warm hospitality, elevated coffee
              </p>
              <h1 className="max-w-2xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
                A calmer, richer cafe experience from the first sip.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 sm:text-xl">
                Discover handcrafted drinks, elegant brunch plates, and a space designed
                for relaxed mornings, thoughtful meetings, and lingering evenings.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#menu" className="btn-primary">
                  Explore Menu
                </a>
                <a href="#contact" className="btn-secondary">
                  Reserve a Table
                </a>
              </div>
            </div>

            <div className="glass-panel ml-auto max-w-md rounded-[2rem] p-6 text-white shadow-[0_24px_90px_rgba(17,11,8,0.28)] sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                Guest Favorites
              </p>
              <div className="mt-6 space-y-5">
                {menuItems.slice(0, 3).map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-white/12 pb-5 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-serif text-2xl">{item.name}</h2>
                        <p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="grid gap-4 rounded-[2rem] bg-[var(--color-sand)] p-6 shadow-[0_20px_80px_rgba(54,35,22,0.1)] md:grid-cols-3 md:p-8">
          {highlights.map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white/70 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Why guests return
              </p>
              <p className="mt-3 text-lg leading-7 text-[var(--color-ink)]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="story"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
      >
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
          <Image
            src="/coffe.jpg"
            alt="Barista preparing artisan coffee"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="section-label">Our Story</p>
          <h2 className="section-title mt-4">
            Designed to feel welcoming at first glance and memorable after every visit.
          </h2>
          <p className="section-copy mt-6">
            Since 2015, Cozy Cafe has focused on small details that make guests feel at
            ease: warm service, thoughtful plating, soft lighting, and a menu built for
            both comfort and indulgence.
          </p>
          <p className="section-copy mt-4">
            The refreshed experience balances luxury with friendliness, so the space feels
            polished without becoming formal. It invites people to stay longer, browse
            more confidently, and find what they want faster.
          </p>
        </div>
      </section>

      <section id="menu" className="bg-[var(--color-espresso)] px-6 py-24 text-white sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-label text-[var(--color-gold-soft)]">Curated Menu</p>
              <h2 className="section-title mt-4 text-white">
                Signature drinks and all-day favorites presented with more clarity.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/72">
              Cleaner grouping, stronger hierarchy, and elevated card styling help guests
              scan the menu quickly while still feeling premium.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {menuItems.map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl">{item.name}</h3>
                    <p className="mt-3 max-w-md text-base leading-7 text-white/72">
                      {item.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--color-gold)]/40 px-4 py-2 text-sm text-[var(--color-gold-soft)]">
                    {item.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="visit"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="rounded-[2rem] bg-white p-4 shadow-[0_18px_70px_rgba(62,39,25,0.08)] sm:p-5">
          <iframe
            className="h-[360px] w-full rounded-[1.5rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59867.44423382608!2d-122.47879950884267!3d37.757760688702206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e1!3m2!1sen!2smy!4v1745823805166!5m2!1sen!2smy"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="section-label">Visit Us</p>
          <h2 className="section-title mt-4">
            Easy to plan, relaxing to visit, and polished from arrival to dessert.
          </h2>
          <div className="mt-8 rounded-[2rem] bg-[var(--color-sand)] p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Opening Hours
            </p>
            <ul className="mt-4 space-y-3 text-lg leading-7 text-[var(--color-ink)]">
              {visitNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-7 text-[var(--color-muted)]">
              123 Cozy Street, San Francisco, CA
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto mb-12 grid max-w-6xl gap-10 px-6 pb-10 sm:px-10 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="rounded-[2rem] bg-[var(--color-espresso)] p-8 text-white">
          <p className="section-label text-[var(--color-gold-soft)]">Get in Touch</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight">
            Reserve a table or ask about private events.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/72">
            The layout below is simpler, warmer, and easier to complete. Guests can scan
            the fields quickly and submit without friction.
          </p>
          <div className="mt-8 space-y-3 text-sm uppercase tracking-[0.18em] text-white/58">
            <p>Concierge line: +1 (415) 555-0123</p>
            <p>Email: hello@cozycafe.com</p>
          </div>
        </div>

        <form
          className="rounded-[2rem] bg-white p-8 shadow-[0_18px_70px_rgba(62,39,25,0.08)]"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6">
            <label className="space-y-2">
              <span className="form-label">Your Name</span>
              <input
                type="text"
                placeholder="Jane Smith"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </label>

            <label className="space-y-2">
              <span className="form-label">Email Address</span>
              <input
                type="email"
                placeholder="jane@email.com"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </label>

            <label className="space-y-2">
              <span className="form-label">Message</span>
              <textarea
                placeholder="I’d like to reserve a quiet table for four this Friday evening."
                className="form-input min-h-36 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <p className="form-error">{errors.message}</p>}
            </label>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[var(--color-muted)]">
              We typically reply within one business day.
            </p>
            <button type="submit" className="btn-primary">
              Send Request
            </button>
          </div>
        </form>
      </section>

      <footer className="border-t border-[rgba(123,90,67,0.12)] px-6 py-8 text-center text-sm text-[var(--color-muted)] sm:px-10">
        <p>&copy; 2026 Cozy Cafe. Crafted for slow mornings and elegant evenings.</p>
      </footer>
    </main>
  );
}
