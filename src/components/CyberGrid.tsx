const CyberGrid = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_88%_38%,rgba(116,220,193,0.08),transparent_28%),linear-gradient(180deg,#080B12_0%,#080B12_52%,#0A0E17_100%)]" />
    <div className="noise-mask absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />
    <div className="absolute left-1/2 top-[-22rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-cyber-primary/10" />
    <div className="absolute left-1/2 top-[-16rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-white/[0.04]" />
  </div>
);

export default CyberGrid;
