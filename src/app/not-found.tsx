import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-[#06080f] px-4 text-center text-[#eef3fb]">
      <p className="text-2xl font-semibold tracking-tight">Nomore</p>
      <h1 className="mt-4 text-3xl font-semibold">Lost on the coast</h1>
      <p className="mt-3 max-w-md text-[#8b97ab]">
        This page isn’t here.
      </p>
      <Link href="/bg" className="mt-8 rounded-full bg-[#3b82f6] px-5 py-2.5 text-sm font-semibold">
        Home
      </Link>
    </div>
  );
}
