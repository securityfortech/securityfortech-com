import {
  Activity,
  Bug,
  Cloud,
  Database,
  GraduationCap,
  Search,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";

const services = [
  {
    icon: UserCog,
    title: "vCISO & Management",
    description: "Put an experienced security leader beside your executives and technical teams. We own the roadmap, guide investment, report progress, and keep the program accountable.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk",
    description: "Set a risk strategy that supports the business. We lead control design, evidence readiness, and the path toward SOC 2, ISO 27001, GDPR, or the frameworks that matter to you.",
  },
  {
    icon: Cloud,
    title: "AppSec & CloudSec",
    description: "Build security into engineering and cloud operations. We establish practical standards, focus teams on material risk, and guide improvements that fit your delivery pace.",
  },
  {
    icon: Bug,
    title: "Pentest & Bug Bounty",
    description: "Plan the right security tests, select specialist partners, and turn every valid finding into owned remediation work with clear priorities.",
  },
  {
    icon: Users,
    title: "IAM & IT Management",
    description: "Bring structure to identity, access, devices, and core IT controls. We define ownership and oversight so access stays intentional as teams change.",
  },
  {
    icon: Activity,
    title: "SOC & DFIR",
    description: "Prepare the business to detect, escalate, and respond. We define the operating model, test incident plans, and coordinate response specialists when needed.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Know what sensitive data you hold, why you hold it, and how it must be protected. We lead classification, handling, retention, and third-party data decisions.",
  },
  {
    icon: Search,
    title: "Threat Intelligence",
    description: "Cut through the noise around new threats. We identify what is relevant to your technology and business, then translate it into decisions your teams can act on.",
    wide: true,
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Give people training that connects to their work. We shape role-based programs around the risks faced by leadership, engineering, operations, and the wider team.",
    wide: true,
  },
];

const Services = () => (
  <section id="services" className="relative py-24 sm:py-28 lg:py-36">
    <div className="site-shell">
      <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
        <div>
          <p className="section-kicker">What your vCISO leads</p>
          <h2 className="section-title mt-5 text-balance">One leader. Your whole security program.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-white/55 lg:justify-self-end">
          Your vCISO owns the direction across security, risk, and compliance. We lead the program, bring in specialists where needed, and turn scattered security work into a plan the business can follow.
        </p>
      </div>

      <div className="grid items-stretch gap-3 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 ${
                service.featured
                  ? "border-cyber-primary/30 bg-gradient-to-br from-cyber-primary/[0.16] via-white/[0.05] to-cyber-success/[0.06] p-7 md:col-span-2 lg:p-9"
                  : `border-white/[0.08] bg-white/[0.025] p-6 hover:border-white/[0.16] hover:bg-white/[0.045] ${service.wide ? "lg:col-span-2" : ""}`
              }`}
            >
              <div className={`${service.featured ? "mb-12" : "mb-8"} flex items-start justify-between`}>
                <span className={`grid rounded-xl border ${service.featured ? "h-12 w-12 place-items-center border-cyber-primary/30 bg-cyber-primary/10 text-cyber-secondary" : "h-10 w-10 place-items-center border-white/10 bg-white/[0.04] text-white/65"}`}>
                  <Icon className={service.featured ? "h-6 w-6" : "h-5 w-5"} aria-hidden="true" />
                </span>
                <span className="font-code text-[0.62rem] text-white/22">0{index + 1}</span>
              </div>

              {service.featured && (
                <p className="mb-4 font-code text-[0.65rem] uppercase tracking-[0.18em] text-cyber-success">The leadership layer</p>
              )}
              <h3 className={`font-orbitron font-medium tracking-[-0.035em] text-white ${service.featured ? "max-w-md text-3xl sm:text-4xl" : "text-xl"}`}>
                {service.title}
              </h3>
              <p className={`mt-4 leading-7 text-white/52 ${service.featured ? "max-w-xl text-base sm:text-lg" : "text-sm"}`}>
                {service.description}
              </p>

              {service.featured && (
                <div className="mt-10 grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
                  {["Prioritize", "Coordinate", "Report"].map((step) => (
                    <span key={step} className="font-code text-[0.6rem] uppercase tracking-wider text-white/45">{step}</span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
