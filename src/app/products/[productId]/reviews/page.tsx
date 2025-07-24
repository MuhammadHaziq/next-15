import { Metadata } from "next";

type props = {
  params: Promise<{ productId: string }>
}

export const generateMetaData = async ({ params }: props): Promise<Metadata> => {
  const {productId} = await params;
  return {
    title: `Reviews for product ${productId}`,
  };
}

export default async function ReviewsPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  return <div>Reviews for product {productId}</div>;
}
