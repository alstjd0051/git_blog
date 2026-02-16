export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:justify-between">
        <p>&copy; {currentYear} TylerSong. All rights reserved.</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/alstjd0051"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
