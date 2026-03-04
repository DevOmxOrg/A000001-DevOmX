import { useState } from "react";
import { motion } from "framer-motion";

const FooterCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sanitizeMessage = (value: string) =>
    value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const netlifyData = new FormData(form);
    const payload = new URLSearchParams();

    netlifyData.forEach((value, key) => {
      payload.append(key, String(value));
    });

    payload.set("message", sanitizeMessage(formData.message));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground" style={{ fontSize: "110%" }}>
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold"
        >
          Need a website that looks good and performs?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base opacity-70 max-w-lg mx-auto"
        >
          We design and build websites that help service businesses present clearly, build trust, and generate enquiries.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-secondary/20 backdrop-blur-md rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-display font-bold italic text-accent mb-6">Get In Touch</h3>
            {submitted ? (
              <div className="rounded-xl border border-accent/40 bg-accent/10 p-6 text-center">
                <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Submission Received</p>
                <h4 className="mt-3 text-2xl font-display font-bold text-primary-foreground">Thank you for reaching out.</h4>
                <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
                  Your message has been sent successfully. Our team will review your request and get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/40 border border-white/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/40 border border-white/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    minLength={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/40 border border-white/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    minLength={7}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/40 border border-white/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={20}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-accent/30 border border-accent/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-3 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <div className="container relative mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-display font-bold tracking-tight">
          Dev<span className="text-accent">Om</span>X
        </p>
        <div className="flex gap-6 md:absolute md:left-1/2 md:-translate-x-1/2">
          {["About", "Services", "Work", "Pricing"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-xs opacity-60 hover:opacity-100 transition-opacity">
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs opacity-40">© 2026 DevOmX. All rights reserved.</p>
      </div>
    </section>
  );
};

export default FooterCTA;
