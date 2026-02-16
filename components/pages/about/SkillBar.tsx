interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white/90">
          {name}
        </span>
        <span className="text-xs tabular-nums text-white/40">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-linear-to-r from-blue-500/80 to-purple-500/80 transition-all duration-700 ease-out group-hover:from-blue-400 group-hover:to-purple-400"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
