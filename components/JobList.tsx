"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface Job {
  id: string
  title: string
  company: string
  location: string
}

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    // Fetch jobs from API
    fetchJobs().then(setJobs)
  }, [])

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <Button asChild className="mt-2">
              <Link href={`/jobs/${job.id}`}>View Details</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

async function fetchJobs(): Promise<Job[]> {
  // Implement API call to fetch jobs
  // This is a placeholder implementation
  return [
    { id: "1", title: "Web Developer", company: "Tech Co", location: "Accra" },
    { id: "2", title: "Data Entry Clerk", company: "Data Inc", location: "Kumasi" },
    // Add more sample jobs
  ]
}

