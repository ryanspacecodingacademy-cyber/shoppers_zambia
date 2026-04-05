"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminInitPage() {
  const router = useRouter()
  const [email, setEmail] = useState("kachprehana99@gmail.com")
  const [phone1, setPhone1] = useState("0764086744")
  const [phone2, setPhone2] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSetupAdmin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        setMessage({ type: "error", text: "You must be logged in to initialize admin" })
        router.push("/login?redirect=/admin/init")
        return
      }

      // Check if admin_settings already exists
      const { data: existingSettings } = await supabase
        .from("admin_settings")
        .select("*")
        .single()

      if (existingSettings) {
        setMessage({
          type: "error",
          text: "Admin already initialized. Contact support if you need to change settings.",
        })
        return
      }

      // Create admin settings
      const { error } = await supabase.from("admin_settings").insert([
        {
          admin_email: email,
          support_phone_1: phone1,
          support_phone_2: phone2,
          platform_country: "Zambia",
        },
      ])

      if (error) {
        setMessage({ type: "error", text: `Failed to initialize: ${error.message}` })
        return
      }

      // Create admin access record
      await supabase.from("admin_access").insert([
        {
          user_id: session.user.id,
          admin_email: email,
          role: "super_admin",
          last_login: new Date(),
        },
      ])

      setMessage({
        type: "success",
        text: "Admin initialized successfully! Redirecting to dashboard...",
      })

      setTimeout(() => {
        router.push("/admin/dashboard")
      }, 2000)
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "An error occurred",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Initialize Admin Panel</CardTitle>
          <CardDescription>
            Set up your admin email and platform contact information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSetupAdmin} className="space-y-4">
            {message && (
              <Alert variant={message.type === "error" ? "destructive" : "default"}>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Admin Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground">
                This email will have full admin access to the platform
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone1" className="text-sm font-medium">
                Support Phone 1
              </label>
              <Input
                id="phone1"
                type="tel"
                placeholder="0764086744"
                value={phone1}
                onChange={(e) => setPhone1(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone2" className="text-sm font-medium">
                Support Phone 2
              </label>
              <Input
                id="phone2"
                type="tel"
                placeholder="+260 764 086 744"
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}
                disabled={loading}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Initializing...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Initialize Admin
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            This is a one-time setup. After initialization, only the registered email can access
            the admin panel.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
