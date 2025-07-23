"use client"
import { useRouter } from "next/navigation";

export default function OrderProductsPage() {
    const router = useRouter();
    const handlePlaceOrder = () => {
        console.log("Placing order...");
        router.push("/");
    }
    return (<><h1>Order Products Page</h1>
    <button onClick={handlePlaceOrder} className="bg-blue-500 text-white p-2 rounded-md"> Place Order (Programmatic Navigation)</button></>);
}