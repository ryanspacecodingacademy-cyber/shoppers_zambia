"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface AdminAuthGuardProps {
  children: React.ReactNode
  requiredEmail?: string
}

export function AdminAuthGuard({ children, requiredEmail }: AdminAuthGuardProps) {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)

  useEffect(() => {
    async function checkAdminAccess() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (!session) {
          router.push("/login?redirect=/admin/dashboard")
          return
        }

        const userEmail = session.user.email

        // Check if user is the admin
        const { data: adminSettings } = await supabase
          .from("admin_settings")
          .select("admin_email")
          .single()

        if (adminSettings?.admin_email !== userEmail) {
          router.push("/")
          return
        }

        // If specific email is required (optional)
        if (requiredEmail && userEmail !== requiredEmail) {
          router.push("/")
          return
        }

        setIsAuthorized(true)
      } catch (error) {
        console.error("Admin auth check failed:", error)
        router.push("/")
      }
    }

    checkAdminAccess()
  }, [router, requiredEmail])

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
}
