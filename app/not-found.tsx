import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-white/10">
        404
      </h1>
      <p className="mt-4 text-lg text-white/50">
        페이지를 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-blue-500/80 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm border border-blue-400/30 shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500/90"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
