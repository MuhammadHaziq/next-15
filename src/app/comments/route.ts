import { comments } from "./data";

export async function GET(request: Request) {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const { comment } = await request.json();
  const newComment = { id: comments.length + 1, comment };
  comments.push(newComment);
  return Response.json(newComment, {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
