export default async function BlogPage({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  return <div>Blog {blogId}</div>;
}
