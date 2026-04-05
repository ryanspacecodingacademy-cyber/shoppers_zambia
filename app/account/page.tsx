"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { ChevronRight, User, Package, Heart, Settings, LogOut, MapPin, CreditCard } from "lucide-react"

export default function AccountPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [profile, setProfile] = useState<{ full_name?: string; email?: string; role?: string } | null>(null)

  useEffect(() => {
    async function loadAccount() {
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      if (authError || !user) {
        setError("Unable to load account info. Please sign in again.")
        setLoading(false)
        return
      }

      const { data, error: profileError } = await supabase
        .from("users")
        .select("full_name, email, role")
        .eq("id", user.id)
        .single()

      if (profileError) {
        setError("Unable to load account info.")
        setLoading(false)
        return
      }

      setProfile({
        full_name: data.full_name,
        email: data.email ?? user.email ?? "",
        role: data.role,
      })
      setLoading(false)
    }

    loadAccount()
  }, [])

  const handleLogout = async () => {
    const { error: signOutError } = await supabase.auth.signOut()
    if (signOutError) {
      setError(signOutError.message)
      return
    }
    router.push("/login")
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
          <span className="text-sm font-medium">My Account</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Account</h1>
          {loading ? (
            <p className="text-muted-foreground">Loading account info...</p>
          ) : error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : (
            <p className="text-muted-foreground">Welcome back{profile?.full_name ? `, ${profile.full_name}` : ""}</p>
          )}
        </div>

        {!loading && !error && profile && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Account details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{profile.full_name || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{profile.email || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium capitalize">{profile.role || "customer"}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Orders */}
          <Link href="/orders">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  My Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Track your orders and view history</p>
                <Button variant="outline" className="w-full">View Orders</Button>
              </CardContent>
            </Card>
          </Link>

          {/* Wishlist */}
          <Link href="/wishlist">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  My Wishlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">View saved items for later</p>
                <Button variant="outline" className="w-full">View Wishlist</Button>
              </CardContent>
            </Card>
          </Link>

          {/* Profile */}
          <Link href="/account/profile">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <User className="h-6 w-6 text-primary" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Manage your profile information</p>
                <Button variant="outline" className="w-full">Edit Profile</Button>
              </CardContent>
            </Card>
          </Link>

          {/* Addresses */}
          <Link href="/account/addresses">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Addresses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Manage delivery addresses</p>
                <Button variant="outline" className="w-full">Manage Addresses</Button>
              </CardContent>
            </Card>
          </Link>

          {/* Payments */}
          <Link href="/account/payments">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Manage saved payment methods</p>
                <Button variant="outline" className="w-full">Manage Payments</Button>
              </CardContent>
            </Card>
          </Link>

          {/* Settings */}
          <Link href="/account/settings">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-primary" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Account settings and preferences</p>
                <Button variant="outline" className="w-full">Adjust Settings</Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Logout */}
        <div className="flex justify-center">
          <Button variant="destructive" size="lg" className="gap-2" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
