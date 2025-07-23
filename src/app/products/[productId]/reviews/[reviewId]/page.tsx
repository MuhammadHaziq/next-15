import { notFound, redirect } from "next/navigation";
export default async function ReviewPage({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 100) {
        // notFound();

        /** Programmatic Navigation */
        redirect(`/products/${productId}`);
    }
  return <div>Review {reviewId} for product {productId}</div>;
}
