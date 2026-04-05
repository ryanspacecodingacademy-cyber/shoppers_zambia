"use client"

import { FormEvent, useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { ChevronRight, User, Mail, Phone, Save } from "lucide-react"

export default function ProfilePage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    async function loadProfile() {
      const { data: { user }, error: authError } = await supabase.auth.getUser()

      if (authError || !user) {
        setError("Unable to load your profile. Please sign in again.")
        setLoading(false)
        return
      }

      setUserId(user.id)
      setEmail(user.email ?? "")

      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("full_name, phone, email")
        .eq("id", user.id)
        .single()

      if (profileError) {
        setError("Unable to load profile details.")
        setLoading(false)
        return
      }

      setFullName(profile.full_name || "")
      setPhone(profile.phone || "")
      setEmail(profile.email || user.email || "")
      setLoading(false)
    }

    loadProfile()
  }, [])

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setSaving(true)

    if (!userId) {
      setError("Unable to save profile. Please sign in again.")
      setSaving(false)
      return
    }

    const { error: updateError } = await supabase
      .from("users")
      .update({ full_name: fullName, email, phone })
      .eq("id", userId)

    if (updateError) {
      setError(updateError.message)
      setSaving(false)
      return
    }

    setSuccess("Profile updated successfully.")
    setSaving(false)
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Link href="/account" className="text-sm text-muted-foreground hover:text-foreground">
            My Account
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Profile</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information</p>
        </div>

        <div className="max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <User className="h-6 w-6 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {loading ? (
                <div className="text-center py-12 text-muted-foreground">Loading profile...</div>
              ) : (
                <form onSubmit={handleSave} className="space-y-6">
                  {error && (
                    <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</div>
                  )}
                  {success && (
                    <div className="rounded-md bg-green-50 p-3 text-sm text-green-700">{success}</div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="gap-2" disabled={saving}>
                      <Save className="h-4 w-4" />
                      {saving ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button variant="outline" type="button" onClick={() => setSuccess(null)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}