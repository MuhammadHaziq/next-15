import { comments } from "../data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }>    }) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const commentIndex = comments.findIndex((c) => c.id === parseInt(id));
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  const body = await request.json();
  // Update the comment with new data from the request body
  comments[commentIndex] = { ...comments[commentIndex], comment: body.text };

  return Response.json(comments[commentIndex]);
}

export async function DELETE(request: Request, {params}: {
  params: Promise<{id: string}>
}){
  const {id} = await params;
  const commentIndex = comments.findIndex((c) => c.id === parseInt(id));
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  comments.splice(commentIndex, 1);
  return Response.json({ message: "Comment deleted" });

}