export default function PostLoading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Back button skeleton */}
      <div className="mb-8 h-5 w-36 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

      {/* Header skeleton */}
      <header className="mb-10">
        <div className="mb-4 flex gap-2">
          <div className="h-6 w-16 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="h-10 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-3 h-6 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-4 h-4 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      </header>

      {/* Divider */}
      <hr className="mb-10 border-zinc-200 dark:border-zinc-800" />

      {/* Content skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800"
            style={{ width: `${75 + Math.random() * 25}%` }}
          />
        ))}
        <div className="h-4" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`p2-${i}`}
            className="h-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800"
            style={{ width: `${65 + Math.random() * 35}%` }}
          />
        ))}
      </div>
    </div>
  );
}
