"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    course: "",

    skills: "",
    bio: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement profile update logic here
    console.log("Profile data:", formData)
    // Show success message after successful update
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="university">University</Label>
        <Input
          id="university"
          name="university"
          type="text"
          required
          value={formData.university}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="course">Course</Label>
        <Input id="course" name="course" type="text" required value={formData.course} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="skills">Skills</Label>
        <Input id="skills" name="skills" type="text" value={formData.skills} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={4} />
      </div>
      <Button type="submit">Update Profile</Button>
    </form>
  )
}

