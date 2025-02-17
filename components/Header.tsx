"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import Logo from "./Logo"

export default function Header() {
  const pathname = usePathname()
  const isLoggedIn = false// Replace with actual auth check

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
            <div className="flex justify-between items-center gap-3">
            <li>
                <Link href="/" className={pathname === "/profile" ? "font-bold" : ""}>
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/" className={pathname === "/login" ? "font-bold" : ""}>
                News
                </Link>
              </li>
              <li>

                <button className="bg-[#6235EA] px-4 py-1 ">
                Login
                </button>
                {/* <Link href="/login" className={pathname === "/register" ? "font-bold" : ""}>
                 
                </Link> */}
              </li>
            </div>
            
            
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

