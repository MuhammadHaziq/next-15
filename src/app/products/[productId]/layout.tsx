// import { Metadata } from "next";

type Props = {
    children: React.ReactNode,
    params: Promise<{ productId: string}>

}

// export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
//     const { productId } = await params;
//     return {
//         title: `Product ${productId}`,
//         description: `Product ${productId} description`,
//     };
// }

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

export default async function productDetailLayout({
    children,
    params  
}: Props) {
    const { productId } = await params;
    const randomNumber = getRandomNumber(2);
    if (randomNumber === 1) {
      throw new Error("Error in Product Id");
    }
    return <div>{children}
    <div className="flex items-center justify-center">
        <h1>Featured Products (Nested Layout) - productId: {productId}</h1>
    </div>
    </div>
}