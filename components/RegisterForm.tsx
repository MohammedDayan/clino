"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement registration logic here
    console.log("Registration data:", formData)
    // After successful registration, redirect to login page
    router.push("/login")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
       
        <Input
        placeholder="Name"
        id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />
      </div>
      <div>
        
        <Input
        placeholder="email"
        id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
      </div>
      <div>
        
        <Input
        placeholder="Password"
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full bg-blue-400">
        Register
      </Button>
    </form>
  )
}

