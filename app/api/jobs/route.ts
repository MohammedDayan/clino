import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Implement job fetching logic here
  // This is a placeholder implementation
  const jobs = [
    { id: "1", title: "Web Developer", company: "Tech Co", location: "Accra" },
    { id: "2", title: "Data Entry Clerk", company: "Data Inc", location: "Kumasi" },
    // Add more sample jobs
  ]

  return NextResponse.json(jobs)
}

