import {type NextRequest} from "next/server";
import { comments } from "./data";
import { headers } from "next/headers";
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const searchQuery = searchParams.get("search");
  if (searchQuery) {
    const filteredComments = comments.filter((comment) => comment.comment.includes(searchQuery));
    return Response.json(filteredComments);
  }
  return Response.json(comments);
}

export async function POST(request: Request) {
  const { comment } = await request.json();
   /** Both Gives Same Result  */
      // new Headers(request.headers);
      // request.headers

    /** Get Headers from Next.js These headers are readonly */
      // const header = await headers();
      // const token = header.get("Authorization");

  /** Direct access to headers - more efficient for reading */
  const token = request.headers.get("Authorization");
  if (token !== "1234567890") {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  const newComment = { id: comments.length + 1, comment };
  comments.push(newComment);
  return Response.json(newComment, {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
