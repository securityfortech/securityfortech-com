import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

const operatingLines = [
  { label: "Board & leadership", value: "Clear decisions" },
  { label: "Product & engineering", value: "Practical direction" },
  { label: "Trust & compliance", value: "Audit ready" },
];

const Hero = () => {
  const scrollToServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-48">
      <div className="site-shell">
        <div className="grid items-center gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div className="min-w-0">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-cyber-success" aria-hidden="true" />
              <p className="section-kicker">Virtual CISO services for tech companies</p>
            </div>

            <h1 className="max-w-4xl text-balance font-orbitron text-[clamp(2.8rem,7.3vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">
              Your security leader.
              <span className="mt-2 block text-white/42">Part of the team.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-balance text-lg leading-8 text-white/62 sm:text-xl">
              Senior security leadership that turns risk, compliance pressure, and customer demands into a program your business can run—without adding a full-time executive.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://cal.com/SecurityforTech/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Talk to a vCISO
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#services" onClick={scrollToServices} className="secondary-button">
                Explore the service
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/45">
              {["Executive-level ownership", "Flexible specialist bench", "No full-time hire"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-cyber-success" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside
            className="relative mx-auto min-w-0 w-full max-w-[31rem] lg:mx-0 lg:justify-self-end"
            aria-label="Embedded security leadership operating model"
          >
            <div className="absolute -inset-8 rounded-full bg-cyber-primary/10 blur-3xl" aria-hidden="true" />
            <div className="surface relative overflow-hidden rounded-[1.75rem] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.42)] sm:p-7">
              <div className="flex items-start justify-between border-b border-white/[0.08] pb-6">
                <div>
                  <p className="font-code text-[0.64rem] uppercase tracking-[0.2em] text-white/38">Security leadership</p>
                  <p className="mt-2 font-orbitron text-xl font-medium text-white">Operating view</p>
                </div>
                <span className="flex items-center gap-2 rounded-full border border-cyber-success/20 bg-cyber-success/[0.08] px-3 py-1.5 font-code text-[0.62rem] uppercase tracking-wider text-cyber-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-success shadow-[0_0_12px_#8CE7C5]" />
                  Embedded
                </span>
              </div>

              <div className="relative my-7 grid min-h-[15rem] place-items-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090d15]">
                <div className="absolute h-52 w-52 rounded-full border border-white/[0.07]" />
                <div className="absolute h-36 w-36 rounded-full border border-cyber-primary/25" />
                <div className="absolute h-20 w-20 rounded-full border border-cyber-success/30 bg-cyber-success/[0.04]" />
                <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="relative z-10 text-center">
                  <p className="font-code text-[0.6rem] uppercase tracking-[0.2em] text-white/35">Accountability</p>
                  <p className="mt-2 font-orbitron text-2xl font-medium text-white">One roadmap</p>
                  <p className="mt-1 text-xs text-cyber-success">Owned end to end</p>
                </div>
                <span className="absolute left-[24%] top-[25%] h-2 w-2 rounded-full bg-cyber-primary shadow-[0_0_18px_#8B5CF6]" />
                <span className="absolute bottom-[24%] right-[22%] h-2 w-2 rounded-full bg-cyber-success shadow-[0_0_18px_#8CE7C5]" />
              </div>

              <div className="space-y-1">
                {operatingLines.map((line, index) => (
                  <div key={line.label} className="flex min-w-0 items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/[0.035]">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="font-code text-[0.62rem] text-white/55">0{index + 1}</span>
                      <span className="min-w-0 text-sm text-white/68">{line.label}</span>
                    </div>
                    <span className="ml-3 shrink-0 text-right text-[0.68rem] font-medium text-white sm:text-xs">{line.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20 grid border-y border-white/[0.08] sm:grid-cols-[1.35fr_1fr] lg:mt-24">
          <p className="py-6 pr-6 font-orbitron text-lg leading-relaxed text-white/72 sm:border-r sm:border-white/[0.08] sm:py-8 sm:pr-10 lg:text-xl">
            Security becomes easier to run when one experienced leader owns the whole picture.
          </p>
          <div className="grid grid-cols-2 gap-3 border-t border-white/[0.08] py-6 sm:border-t-0 sm:py-8 sm:pl-10">
            <p className="font-code text-[0.62rem] uppercase leading-5 tracking-[0.15em] text-white/38">Strategy<br /><span className="text-white/70">to execution</span></p>
            <p className="font-code text-[0.62rem] uppercase leading-5 tracking-[0.15em] text-white/38">Board<br /><span className="text-white/70">to engineering</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
