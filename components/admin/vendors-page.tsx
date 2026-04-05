"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Search, MoreVertical, CheckCircle, XCircle, Pause } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AdminVendorsPage() {
  const [vendors, setVendors] = useState<any[]>([])
  const [filteredVendors, setFilteredVendors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    loadVendors()
  }, [])

  useEffect(() => {
    filterVendors()
  }, [vendors, searchQuery, statusFilter])

  const loadVendors = async () => {
    try {
      const { data, error } = await supabase
        .from("vendors")
        .select("*")
        .order("created_at", { ascending: false })

      if (!error && data) {
        setVendors(data)
      }
    } catch (err) {
      console.error("Error loading vendors:", err)
    } finally {
      setLoading(false)
    }
  }

  const filterVendors = () => {
    let filtered = vendors

    if (statusFilter !== "all") {
      filtered = filtered.filter((v) => v.status === statusFilter)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (v) =>
          v.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.business_email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredVendors(filtered)
  }

  const handleStatusChange = async (vendorId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("vendors")
        .update({ status: newStatus })
        .eq("id", vendorId)

      if (!error) {
        setVendors(
          vendors.map((v) => (v.id === vendorId ? { ...v, status: newStatus } : v))
        )
      }
    } catch (err) {
      console.error("Error updating vendor status:", err)
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: any } = {
      pending: "secondary",
      approved: "default",
      suspended: "destructive",
      rejected: "outline",
    }

    const colors: { [key: string]: string } = {
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      approved: "bg-green-100 text-green-800 border-green-200",
      suspended: "bg-red-100 text-red-800 border-red-200",
      rejected: "bg-gray-100 text-gray-800 border-gray-200",
    }

    return (
      <Badge className={`${colors[status]} border`} variant="outline">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="h-12 w-12 rounded-full border-4 border-accent border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading vendors...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/admin/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">Vendor Management</h1>
        <p className="text-muted-foreground">Manage and monitor all vendors on your platform</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Vendors Table */}
      <Card>
        <CardHeader>
          <CardTitle>Vendors ({filteredVendors.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredVendors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No vendors found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">
                      Business Name
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">
                      Products
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Orders</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Rating</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVendors.map((vendor) => (
                    <tr key={vendor.id} className="border-b border-border hover:bg-accent/5">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-foreground">{vendor.business_name}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Joined: {new Date(vendor.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-foreground">{vendor.business_email}</td>
                      <td className="py-4 px-4 text-sm text-foreground">{vendor.total_products}</td>
                      <td className="py-4 px-4 text-sm text-foreground">{vendor.total_orders}</td>
                      <td className="py-4 px-4 text-sm text-foreground">
                        {vendor.rating.toFixed(1)} ⭐
                      </td>
                      <td className="py-4 px-4">{getStatusBadge(vendor.status)}</td>
                      <td className="py-4 px-4 text-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {vendor.status !== "approved" && (
                              <>
                                <DropdownMenuItem
                                  onClick={() => handleStatusChange(vendor.id, "approved")}
                                  className="text-green-600"
                                >
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Approve
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                              </>
                            )}

                            {vendor.status !== "suspended" && (
                              <DropdownMenuItem
                                onClick={() => handleStatusChange(vendor.id, "suspended")}
                                className="text-red-600"
                              >
                                <Pause className="mr-2 h-4 w-4" />
                                Suspend
                              </DropdownMenuItem>
                            )}

                            {vendor.status === "suspended" && (
                              <DropdownMenuItem
                                onClick={() => handleStatusChange(vendor.id, "approved")}
                                className="text-green-600"
                              >
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Unsuspend
                              </DropdownMenuItem>
                            )}

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Link href={`/admin/vendors/${vendor.id}`} className="w-full">
                                View Details
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
