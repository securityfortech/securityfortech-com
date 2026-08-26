import { motion, useReducedMotion } from "framer-motion";

const codeLines = [
  'security.lead("with-context");',
  "risk.prioritize();",
  "roadmap.assignOwners();",
  "controls.fit(operations);",
  "evidence.buildTrust();",
  "engineering.shipSecurely();",
  "incidentPlan.practice();",
  "leadership.decide();",
];

const CodeScroller = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-y-24 right-0 hidden w-72 overflow-hidden opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] sm:block lg:w-96"
      aria-hidden="true"
    >
      <motion.div
        className="whitespace-nowrap border-l border-cyber-primary/25 pl-5 font-code text-xs leading-9 text-cyber-secondary/60"
        animate={reduceMotion ? undefined : { y: [0, -288] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {[...codeLines, ...codeLines, ...codeLines].map((line, index) => (
          <div key={`${line}-${index}`}>{line}</div>
        ))}
      </motion.div>
    </div>
  );
};

export default CodeScroller;
