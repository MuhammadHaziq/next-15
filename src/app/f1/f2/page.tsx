import Link from "next/link";

export default function F2() {
  return (
    <div className="flex flex-col gap-4">
      F2
      <Link href="/f4" className="text-blue-500">
        F4
      </Link>
    </div>
  );
}
