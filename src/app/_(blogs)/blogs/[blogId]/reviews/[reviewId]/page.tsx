import { notFound } from "next/navigation";
export default async function ReviewPage({ params }: { params: Promise<{ blogId: string, reviewId: string }> }) {
    const { blogId, reviewId } = await params;
    if (parseInt(reviewId) > 100) {
        notFound();
    }
  return <div>Review {reviewId} for blog {blogId}</div>;
}
