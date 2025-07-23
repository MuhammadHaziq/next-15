import Link from "next/link";

export default function Products() {
  return (
    <>
    <div className="flex">
      <ul className="flex flex-col items-left justify-center gap-4  list-disc ml-10">
        <li className="mt-2 bg-gray-200 p-2">
          <Link href="/"> Home </Link>
        </li>
        <li className="mt-2 bg-gray-200 p-2">
          <Link href="/products/1"> Product 1 </Link>
        </li>
        <li className="mt-2 bg-gray-200 p-2">
          <Link href="/products/2"> Product 2 </Link>
        </li>
        <li className="mt-2 bg-gray-200 p-2">
          <Link href="/products/3" replace> Product 3 </Link>
        </li>
      </ul>
      </div>
    </>
  );
}
