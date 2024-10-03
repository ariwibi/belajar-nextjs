import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(req: NextRequest) {
  revalidateTag("posts");
  return NextResponse.redirect(new URL("/posts", req.url));
}
