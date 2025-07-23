export default function productDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>{children}
    <div className="flex items-center justify-center">
        <h1>Featured Products (Nested Layout)</h1>
    </div>
    </div>
}