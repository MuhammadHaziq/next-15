import Link from "next/link";

export default async function Article({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: string }> }) {
  const lang = (await searchParams).lang || "en";
  const { articleId } = await params;
  return (
    <div>
      <h1>Article {articleId}</h1>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English Article</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French Article</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish Article</Link>
      </div>
    </div>
  );
}