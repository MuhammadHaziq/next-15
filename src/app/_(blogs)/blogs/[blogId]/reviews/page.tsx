export default async function ReviewsPage({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  return <div>Reviews for Blog {blogId}</div>;
}
