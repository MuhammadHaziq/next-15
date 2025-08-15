import Link from "next/link";
export default function F1() {
  return (
    <div className="flex flex-col gap-4">
      F1
      <Link href="f1/f2" className="text-blue-500">
        F2 Page
      </Link>
      <Link href="/f3" className="text-blue-500">
        F3 Page
      </Link>
    </div>
  );
}
