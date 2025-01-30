import { notFound } from "next/navigation"
import JobDetails from "@/components/JobDetails"
import ApplyForm from "@/components/ApplyForm"

export default async function JobPage({ params }: { params: { id: string } }) {
  const jobId = params.id
  // Fetch job details from API
  const job = await fetchJobDetails(jobId)

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto">
      <JobDetails job={job} />
      <ApplyForm jobId={jobId} />
    </div>
  )
}

async function fetchJobDetails(jobId: string) {
  // Implement API call to fetch job details
  // This is a placeholder implementation
  return {
    id: jobId,
    title: "Sample Job",
    description: "This is a sample job description.",
    // Add more job details as needed
  }
}

