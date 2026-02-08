import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // For now, just check for a session cookie
  // Will be replaced with NextAuth middleware
  const isAuthPage = request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/registro") ||
    request.nextUrl.pathname.startsWith("/esqueci-senha");

  const isDashboardPage = request.nextUrl.pathname.startsWith("/painel") ||
    request.nextUrl.pathname.startsWith("/projetos") ||
    request.nextUrl.pathname.startsWith("/analiticos") ||
    request.nextUrl.pathname.startsWith("/mensagens") ||
    request.nextUrl.pathname.startsWith("/documentos") ||
    request.nextUrl.pathname.startsWith("/faturas") ||
    request.nextUrl.pathname.startsWith("/configuracoes");

  const sessionToken = request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token") ||
    request.cookies.get("authjs.session-token");

  if (isDashboardPage && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthPage && sessionToken) {
    return NextResponse.redirect(new URL("/painel", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/painel/:path*",
    "/projetos/:path*",
    "/analiticos/:path*",
    "/mensagens/:path*",
    "/documentos/:path*",
    "/faturas/:path*",
    "/configuracoes/:path*",
    "/login",
    "/registro",
    "/esqueci-senha",
  ],
};
