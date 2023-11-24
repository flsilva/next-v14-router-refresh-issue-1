"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FooPage() {
  const router = useRouter();
  return (
    <div>
      <p className="text-2xl">/src/app/foo/page.tsx</p>
      <br />
      <button
        className="p-2 border-solid border-2 border-sky-600 text-sky-600"
        onClick={() => router.refresh()}
      >
        Click to trigger router.refresh()
      </button>
      <br />
      <br />
      <Link
        href="/"
        className="p-2 border-solid border-2 border-sky-600 text-sky-600"
      >
        Nav to Landing
      </Link>
    </div>
  );
}
