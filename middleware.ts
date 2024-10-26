import Cookies from "js-cookie";
import { NextRequest, NextResponse } from "next/server";

interface MiddlewareRequest extends NextRequest {
  Cookies: {
    get: (name: string) => string | undefined;
  };
}

export default function middleware(req: MiddlewareRequest) {
  console.log(req.url);
  const url = req.url;
  //   console.log(Cookies.get("auth=true"));
  //   const verify = req.Cookies.get("auth=true");

  const verify = false;

  if (!verify && url.includes("/dashboard, /project-upload, /messages")) {
    return NextResponse.redirect("/");
  }

  if (verify && url === "/login") {
    return NextResponse.redirect("/dashboard");
  }
}
