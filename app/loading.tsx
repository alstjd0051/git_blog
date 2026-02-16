export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero skeleton */}
      <section className="py-20 sm:py-28">
        <div className="mb-3 h-5 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-12 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-4 h-6 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-2 h-6 w-1/2 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-8 flex gap-4">
          <div className="h-12 w-32 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-12 w-24 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </section>

      {/* Posts skeleton */}
      <section className="pb-20">
        <div className="mb-8 flex items-center justify-between">
          <div className="h-8 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-5 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-3 flex gap-2">
                <div className="h-6 w-16 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-6 w-12 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
              </div>
              <div className="h-7 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="mt-2 h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="mt-1 h-4 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="mt-4 h-3 w-28 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
