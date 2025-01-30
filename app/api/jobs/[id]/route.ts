import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  // Implement job details fetching logic here
  // This is a placeholder implementation
  const job = {
    id,
    title: "Sample Job",
    company: "Sample Company",
    location: "Sample Location",
    description: "This is a sample job description.",
  }

  return NextResponse.json(job)
}

