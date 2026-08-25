
import { motion } from 'framer-motion';

const CodeScroller = () => {
  const codeLines = [
    'const securityLeader = hire("vCISO");',
    'strategy.alignWith(businessGoals);',
    'risk.focusOn("what-matters");',
    'roadmap.assignOwners();',
    'controls.fit(realOperations);',
    'evidence.prepareFor(customerTrust);',
    'engineering.removeSecurityFriction();',
    'incidentPlan.practiceBeforeCrisis();',
    'specialists.coordinate({ when: "needed" });',
    'leadership.report(clearDecisions);',
    'securityProgram.keepMoving();',
    'console.log("Leadership: IN PLACE");'
  ];

  return (
    <div className="absolute right-0 top-0 h-full overflow-hidden w-48 md:w-64 lg:w-96 opacity-40">
      <motion.div
        className="font-code text-xs md:text-sm text-cyber-primary/80 whitespace-nowrap"
        animate={{ y: [0, -500] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {[...codeLines, ...codeLines, ...codeLines, ...codeLines].map((line, index) => (
          <div key={index} className="mb-2 pl-4 border-l border-cyber-primary/30">
            {line}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CodeScroller;
