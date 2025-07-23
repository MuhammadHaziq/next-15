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


export default async function productDetailLayout({
    children,
    params  
}: Props) {
    const { productId } = await params;
    return <div>{children}
    <div className="flex items-center justify-center">
        <h1>Featured Products (Nested Layout) - productId: {productId}</h1>
    </div>
    </div>
}