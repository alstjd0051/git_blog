export default function TagChip({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-white/6 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/12 hover:text-white/80 hover:border-white/20">
      {label}
    </span>
  );
}
