"use client";
import Link from "next/link";
import { use } from "react";
export default function Article({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: string }> }) {
  const lang = use(searchParams).lang || "en";
  const { articleId } = use(params);
  return (
    <div>
      <h1>Article {articleId}</h1>
      <p>Language: {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English Article</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French Article</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish Article</Link>
      </div>
    </div>
  );
}