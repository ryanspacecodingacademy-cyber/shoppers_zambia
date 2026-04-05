"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { getCurrentUser, getVendorByUserId } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Package,
  ShoppingCart,
  TrendingUp,
  AlertCircle,
  Settings,
  LogOut,
  Menu,
  DollarSign,
} from "lucide-react"
import { useRouter } from "next/navigation"

export function VendorDashboard() {
  const router = useRouter()
  const [vendor, setVendor] = useState<any>(null)
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    loadVendorData()
  }, [])

  const loadVendorData = async () => {
    try {
      const user = await getCurrentUser()
      if (!user) {
        router.push("/login")
        return
      }

      const vendorData = await getVendorByUserId(user.id)
      if (!vendorData) {
        setError("No vendor profile found")
        return
      }

      setVendor(vendorData)

      // Fetch stats
      const { data: orders, error: ordersError } = await supabase
        .from("orders")
        .select("*")
        .eq("vendor_id", vendorData.id)

      const { data: products, error: productsError } = await supabase
        .from("products_v2")
        .select("*")
        .eq("vendor_id", vendorData.id)

      if (!ordersError && orders) {
        const totalRevenue = orders.reduce((sum, order) => sum + (order.vendor_amount || 0), 0)
        const pending = orders.filter((order) => order.status === "pending").length

        setStats({
          totalProducts: products?.length || 0,
          totalOrders: orders.length,
          totalRevenue,
          pendingOrders: pending,
        })
      }
    } catch (err) {
      console.error("Error loading vendor data:", err)
      setError("Failed to load vendor data")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="h-12 w-12 rounded-full border-4 border-accent border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error || !vendor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6 flex items-center gap-4">
            <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900">Error</h3>
              <p className="text-red-700">{error || "Failed to load vendor profile"}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-accent">Vendor Hub</h2>
        </div>

        <nav className="p-4 space-y-2">
          <Link href="/vendor/dashboard">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              Dashboard
            </Button>
          </Link>

          <Link href="/vendor/products">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <Package className="mr-3 h-5 w-5" />
              Products
            </Button>
          </Link>

          <Link href="/vendor/orders">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <ShoppingCart className="mr-3 h-5 w-5" />
              Orders
            </Button>
          </Link>

          <Link href="/vendor/analytics">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <TrendingUp className="mr-3 h-5 w-5" />
              Analytics
            </Button>
          </Link>

          <Link href="/vendor/earnings">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <DollarSign className="mr-3 h-5 w-5" />
              Earnings
            </Button>
          </Link>

          <Link href="/vendor/settings">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Button>
          </Link>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full justify-start text-foreground"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile toggle */}
        <div className="lg:hidden p-4 border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, {vendor.business_name}</h1>
            <p className="text-muted-foreground">
              Status:{" "}
              <Badge
                variant={vendor.status === "approved" ? "default" : "secondary"}
                className="ml-2"
              >
                {vendor.status}
              </Badge>
            </p>
          </div>

          {vendor.status !== "approved" && (
            <Card className="mb-8 border-yellow-200 bg-yellow-50">
              <CardContent className="pt-6 flex items-center gap-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900">Pending Approval</h3>
                  <p className="text-yellow-800 text-sm">
                    Your vendor account is being reviewed. You&apos;ll be able to add products once approved.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">{stats.totalProducts}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <Link href="/vendor/products" className="hover:underline">
                    View products
                  </Link>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">{stats.totalOrders}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  {stats.pendingOrders} pending
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">
                  ${stats.totalRevenue.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Before commission</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">{vendor.rating.toFixed(1)}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  {vendor.total_reviews} reviews
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Link href="/vendor/products/add">
                <Button className="bg-accent hover:bg-accent/90">Add New Product</Button>
              </Link>
              <Link href="/vendor/orders">
                <Button variant="outline">View Orders</Button>
              </Link>
              <Link href="/vendor/settings">
                <Button variant="outline">Update Store</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
