"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import Logo from "./Logo"

export default function Header() {
  const pathname = usePathname()
  const isLoggedIn = true // Replace with actual auth check

  return (
    <header className=" text-primary-foreground">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Logo></Logo>
        </Link>
        <ul className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <li>
                <Link href="/jobs" className={pathname === "/jobs" ? "font-bold" : ""}>
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/profile" className={pathname === "/profile" ? "font-bold" : ""}>
                  Profile
                </Link>
              </li>
              <li>
                <Button variant="ghost" size="sm" onClick={() => console.log("Logout")}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className={pathname === "/login" ? "font-bold" : ""}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className={pathname === "/register" ? "font-bold" : ""}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

