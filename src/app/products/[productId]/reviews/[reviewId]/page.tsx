import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

type Props = {
  params: Promise<{ productId: string, reviewId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { productId, reviewId } = await params;
  return {
    title: `Review ${reviewId} for product ${productId}`,
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params;
    const randomNumber = getRandomNumber(2);
    if (randomNumber === 1) {
      throw new Error("Error in Review");
    }
    if (parseInt(reviewId) > 100) {
        // notFound();

        /** Programmatic Navigation */
        redirect(`/products/${productId}`);
    }
  return <div>Review {reviewId} for product {productId}</div>;
}
