// Fixed bottom-right maker's mark — "powered by LEGGERA LABS".
export function Signature() {
  return (
    <a
      href="https://patrykpiecyk.pl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="powered by LEGGERA LABS"
      className="glass fixed bottom-3 right-3 z-40 select-none rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide opacity-70 transition-opacity hover:opacity-100"
    >
      <span className="text-muted">powered by </span>
      <span className="leggera-gradient font-semibold">LEGGERA LABS</span>
    </a>
  );
}
