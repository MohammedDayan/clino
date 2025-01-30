"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ApplyForm({ jobId }: { jobId: string }) {
  const [coverLetter, setCoverLetter] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement job application logic here
    console.log("Applying for job:", jobId, "with cover letter:", coverLetter)
    // Show success message or redirect after successful application
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div>
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea
          id="coverLetter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          rows={6}
          placeholder="Write your cover letter here..."
          required
        />
      </div>
      <Button type="submit">Apply for Job</Button>
    </form>
  )
}

