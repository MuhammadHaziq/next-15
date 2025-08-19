import { comments } from "../data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }>    }) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return Response.json(comment);
}