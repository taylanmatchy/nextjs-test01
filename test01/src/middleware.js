import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/register";

  const token = await request.cookies.get("token")?.value;
  //console.log(token);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  } else if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login"],
};
