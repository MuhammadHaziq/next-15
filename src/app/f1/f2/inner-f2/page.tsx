import Link from "next/link";

export default function InnerF2() {
  return (
    <div className="flex flex-col gap-4">
      Inner F2
      <Link href="/f5" className="text-blue-500">
        F5 Page
      </Link>
    </div>
  );
}
