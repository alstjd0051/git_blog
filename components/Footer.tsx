export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-white/4 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-8 text-sm text-white/40 sm:flex-row sm:justify-between">
        <p>&copy; {currentYear} TylerSong. All rights reserved.</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/alstjd0051"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/80"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
