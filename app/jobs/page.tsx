import JobSearch from "@/components/JobSearch"
import JobList from "@/components/JobList"

export default function Jobs() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Find Jobs</h1>
      <JobSearch />
      <JobList />
    </div>
  )
}

