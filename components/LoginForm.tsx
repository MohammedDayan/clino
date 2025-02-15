"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement login logic here
    console.log("Login data:", formData)
    // After successful login, redirect to jobs page
    router.push("/jobs")
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div>

        <Input height="20px" id="email" name="email" placeholder="Email" type="email" required value={formData.email} onChange={handleChange} />
      </div>

      <div className="w-full">      
        <Input
          id="password"
          name="password"
          type="password"
          required
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full bg-blue-400 text-bold text-white">
        continue with email
      </Button>
    </form>
  )
}

