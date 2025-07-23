import Link from "next/link";

export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <div>
        <Link href="/articles/breaking-new-123?lang=en">Breaking News English Article</Link>
        <Link href="/articles/breaking-new-123?lang=fr">Breaking News French Article</Link>
        <Link href="/articles/breaking-new-123?lang=es">Breaking News Spanish Article</Link>
        
      </div>
    </div>
  );
}