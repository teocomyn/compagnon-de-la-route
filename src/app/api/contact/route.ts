import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json({ ok: false, error: "Invalid content type" }, { status: 400 });
  }

  const formData = await request.formData();
  const { submitContact } = await import("@/actions/contact");
  const result = await submitContact({}, formData);

  if (result.fieldErrors && Object.keys(result.fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, fieldErrors: result.fieldErrors }, { status: 422 });
  }

  return NextResponse.json({ ok: true });
}
