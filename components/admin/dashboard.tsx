"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { getCurrentUser } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Users,
  ShoppingCart,
  TrendingUp,
  AlertCircle,
  Settings,
  LogOut,
  Menu,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState({
    totalVendors: 0,
    pendingVendors: 0,
    approvedVendors: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingProducts: 0,
  })
  const [vendors, setVendors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    loadAdminData()
  }, [])

  const loadAdminData = async () => {
    try {
      const user = await getCurrentUser()
      if (!user) {
        router.push("/login")
        return
      }

      // Fetch vendors
      const { data: vendorsData, error: vendorsError } = await supabase
        .from("vendors")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10)

      if (!vendorsError && vendorsData) {
        setVendors(vendorsData)

        setStats((prev) => ({
          ...prev,
          totalVendors: vendorsData.length,
          pendingVendors: vendorsData.filter((v) => v.status === "pending").length,
          approvedVendors: vendorsData.filter((v) => v.status === "approved").length,
        }))
      }

      // Fetch orders
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select("*")

      if (!ordersError && ordersData) {
        const totalRevenue = ordersData.reduce((sum, order) => sum + (order.platform_commission || 0), 0)
        setStats((prev) => ({
          ...prev,
          totalOrders: ordersData.length,
          totalRevenue,
        }))
      }

      // Fetch pending products
      const { data: productsData, error: productsError } = await supabase
        .from("products_v2")
        .select("*")
        .eq("is_approved", false)

      if (!productsError && productsData) {
        setStats((prev) => ({
          ...prev,
          pendingProducts: productsData.length,
        }))
      }
    } catch (err) {
      console.error("Error loading admin data:", err)
      setError("Failed to load admin data")
    } finally {
      setLoading(false)
    }
  }

  const handleApproveVendor = async (vendorId: string) => {
    try {
      const { error } = await supabase
        .from("vendors")
        .update({ status: "approved", verification_date: new Date().toISOString() })
        .eq("id", vendorId)

      if (!error) {
        setVendors(vendors.map((v) => (v.id === vendorId ? { ...v, status: "approved" } : v)))
        loadAdminData()
      }
    } catch (err) {
      console.error("Error approving vendor:", err)
    }
  }

  const handleRejectVendor = async (vendorId: string) => {
    try {
      const { error } = await supabase
        .from("vendors")
        .update({ status: "rejected" })
        .eq("id", vendorId)

      if (!error) {
        setVendors(vendors.filter((v) => v.id !== vendorId))
        loadAdminData()
      }
    } catch (err) {
      console.error("Error rejecting vendor:", err)
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
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6 flex items-center gap-4">
            <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900">Error</h3>
              <p className="text-red-700">{error}</p>
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
          <h2 className="text-2xl font-bold text-accent">Admin Panel</h2>
        </div>

        <nav className="p-4 space-y-2">
          <Link href="/admin/dashboard">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              Dashboard
            </Button>
          </Link>

          <Link href="/admin/vendors">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <Users className="mr-3 h-5 w-5" />
              Vendors
            </Button>
          </Link>

          <Link href="/admin/products">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <ShoppingCart className="mr-3 h-5 w-5" />
              Products
            </Button>
          </Link>

          <Link href="/admin/orders">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-accent/10"
            >
              <TrendingUp className="mr-3 h-5 w-5" />
              Orders
            </Button>
          </Link>

          <Link href="/admin/settings">
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your platform, vendors, and orders</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Vendors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">{stats.totalVendors}</div>
                <div className="flex gap-4 mt-3">
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" /> {stats.approvedVendors} approved
                  </p>
                  <p className="text-xs text-yellow-600 flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {stats.pendingVendors} pending
                  </p>
                </div>
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
                  <Link href="/admin/orders" className="hover:underline">
                    View all orders
                  </Link>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Platform Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">
                  ${stats.totalRevenue.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Commission earnings</p>
              </CardContent>
            </Card>
          </div>

          {/* Pending Vendors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                Pending Vendor Approvals ({stats.pendingVendors})
              </CardTitle>
              <CardDescription>Review and approve new vendors</CardDescription>
            </CardHeader>
            <CardContent>
              {vendors.filter((v) => v.status === "pending").length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No pending vendors</p>
              ) : (
                <div className="space-y-4">
                  {vendors
                    .filter((v) => v.status === "pending")
                    .map((vendor) => (
                      <div
                        key={vendor.id}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{vendor.business_name}</h3>
                          <p className="text-sm text-muted-foreground">{vendor.business_email}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Applied: {new Date(vendor.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleApproveVendor(vendor.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleRejectVendor(vendor.id)}
                          >
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Link href="/admin/vendors">
                <Button variant="outline">Manage Vendors</Button>
              </Link>
              <Link href="/admin/products">
                <Button variant="outline">Review Products</Button>
              </Link>
              <Link href="/admin/orders">
                <Button variant="outline">View Orders</Button>
              </Link>
              <Link href="/admin/settings">
                <Button variant="outline">Platform Settings</Button>
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
