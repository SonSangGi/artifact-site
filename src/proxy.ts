import { NextResponse, type NextRequest } from "next/server";
import { localeFromSearch, URL_LOCALE_COOKIE, URL_LOCALE_HEADER } from "@/lib/i18n";
import { SESSION_COOKIE_NAMES } from "@/lib/session-cookie";

// sanggi: login gate.
// Everything requires a signed-in session except what a share-link reader (/v/<token>) needs and
// the sign-in / agent (OAuth, MCP, device) plumbing. This is only a redirect/401 front door — it
// checks that a session cookie or a Bearer token is present; the server still authorizes every
// request as before, so a forged cookie gets nothing beyond the sign-in redirect it would have got.

/** Paths a visitor without a session may open (prefix match). */
const PUBLIC_PREFIXES = [
  "/v/", // share-link reader page
  "/api/preview/", // sandboxed artifact body (authorized by share token / signed URL)
  "/api/shares/", // share-link resolution (passcode etc.)
  "/api/auth/", // OIDC login / callback / logout / me
  "/v1/access/", // legacy OIDC callback path
  "/oauth/", // MCP OAuth endpoints (authorize itself asks for sign-in)
  "/.well-known/",
  "/api/device/", // CLI device authorization (approve still needs a session server-side)
  "/_next/",
  "/vendor/",
  "/brand/", // public/brand (logo shown on the share page)
];

const PUBLIC_EXACT = new Set(["/mcp", "/for-agents.md", "/robots.txt", "/favicon.ico", "/icon.png"]);

function isPublic(request: NextRequest): boolean {
  const { pathname } = request.nextUrl;
  if (PUBLIC_EXACT.has(pathname)) return true;
  if (PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))) return true;
  // Calls made from a share-link page (comments, official version) carry the share token.
  if (request.headers.has("x-artifact-share")) return true;
  return false;
}

function hasCredentials(request: NextRequest): boolean {
  if (request.cookies.has(SESSION_COOKIE_NAMES.secure) || request.cookies.has(SESSION_COOKIE_NAMES.development)) return true;
  return /^bearer\s+\S/i.test(request.headers.get("authorization") ?? "");
}

/** Carry the query override into Server Components and the current browser session. */
export function proxy(request: NextRequest) {
  if (!isPublic(request) && !hasCredentials(request)) {
    const { pathname, search } = request.nextUrl;
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Please sign in", code: "login_required" }, { status: 401 });
    }
    const login = new URL("/api/auth/login", request.url);
    login.searchParams.set("return_to", pathname + search);
    return NextResponse.redirect(login);
  }

  const locale = localeFromSearch(request.nextUrl.search);
  const requestHeaders = new Headers(request.headers);
  // This is an internal transport header: never trust a value supplied by the client.
  requestHeaders.delete(URL_LOCALE_HEADER);
  if (locale) requestHeaders.set(URL_LOCALE_HEADER, locale);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  // Keep the override coherent across client-side navigation. This is deliberately a session
  // cookie: following somebody's localized URL must not permanently replace a saved preference.
  if (locale) response.cookies.set(URL_LOCALE_COOKIE, locale, { sameSite: "lax", path: "/" });
  return response;
}

export const config = {
  // sanggi: run on every path (incl. /api) so the login gate covers the API too.
  matcher: ["/((?!_next/static|_next/image).*)"],
};
