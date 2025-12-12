
import { motion } from 'framer-motion';

const CodeScroller = () => {
  const codeLines = [
    'import { SecurityProtocol } from "@SecurityforTech/core";',
    'const firewall = new SecurityProtocol();',
    'await firewall.scanNetwork("192.168.1.1/24");',
    'const vulnerabilities = await firewall.detectVulnerabilities();',
    'firewall.patchSystem(vulnerabilities);',
    'console.log("Security status: PROTECTED");',
    'const encryptionLevel = "AES-256";',
    'await firewall.deployEncryption(encryptionLevel);',
    'monitorTraffic({ alerts: true });',
    'initIntrusionDetection({',
    '  sensitivity: "high",',
    '  responseTime: "instant"',
    '});',
    'blockchain.secure(userData);'
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