export default async function ReviewsPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  return <div>Reviews for product {productId}</div>;
}
