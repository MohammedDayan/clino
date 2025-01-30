import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface Job {
  id: string
  title: string
  company: string
  location: string
  description: string
}

export default function JobDetails({ job }: { job: Job }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Company:</strong> {job.company}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p className="mt-4">{job.description}</p>
      </CardContent>
    </Card>
  )
}

