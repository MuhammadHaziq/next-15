import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const { productId } = await params;
  /** Here we can use productId to fetch product details from database */
  return {
    title: `Product ${productId}`,
    description: `Product ${productId} description`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { productId } = await params;
  return <div>Product {productId}</div>;
}
