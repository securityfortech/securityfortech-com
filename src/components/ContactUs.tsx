import { ArrowUpRight, CalendarDays, Github, Linkedin, Mail, MapPin } from "lucide-react";

const ContactUs = () => (
  <section id="get-in-touch" className="relative pb-24 pt-8 sm:pb-28 lg:pb-36">
    <div className="site-shell">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101521] shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full border border-cyber-primary/20" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-28 h-[24rem] w-[24rem] rounded-full border border-cyber-success/10" aria-hidden="true" />

        <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-7 sm:p-10 lg:p-14 xl:p-16">
            <p className="section-kicker">Start a conversation</p>
            <h2 className="mt-6 max-w-3xl text-balance font-orbitron text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Bring us your next security decision.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
              Bring us your next audit, customer request, incident concern, or difficult security decision. We will help you find the first priorities and a practical way forward.
            </p>

            <a
              href="https://cal.com/SecurityforTech/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button mt-10"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Schedule an intro call
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="border-t border-white/[0.08] bg-black/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12 xl:p-14">
            <p className="font-code text-[0.66rem] uppercase tracking-[0.18em] text-white/60">Direct contact</p>
            <div className="mt-7 space-y-7">
              <a href="mailto:contact@securityfortech.com" className="group flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyber-success">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-white/60">Email</span>
                  <span className="mt-1 block break-all text-sm font-medium text-white transition group-hover:text-cyber-success sm:text-base">contact@securityfortech.com</span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyber-success">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-white/60">Where we work</span>
                  <span className="mt-1 block max-w-xs text-sm font-medium leading-6 text-white sm:text-base">Europe, the Middle East, and North Africa</span>
                </span>
              </div>
            </div>

            <div className="mt-10 border-t border-white/[0.08] pt-7">
              <p className="text-xs text-white/60">Follow the work</p>
              <div className="mt-4 flex gap-3">
                <a href="https://www.linkedin.com/company/securityfortech/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-white/25 hover:text-white" aria-label="SecurityforTech on LinkedIn">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="https://github.com/securityfortech" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-white/25 hover:text-white" aria-label="SecurityforTech on GitHub">
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
