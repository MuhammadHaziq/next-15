import { notFound } from "next/navigation";
export default async function ReviewPage({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 100) {
        notFound();
    }
  return <div>Review {reviewId} for product {productId}</div>;
}
