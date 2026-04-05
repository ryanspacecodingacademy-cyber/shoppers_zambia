import { supabase } from "@/lib/supabase"

export type UserRole = "customer" | "vendor" | "admin"
export type VendorStatus = "pending" | "approved" | "suspended" | "rejected"
export type ProductStatus = "draft" | "active" | "inactive" | "suspended"
export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled" | "returned"

export interface User {
  id: string
  email: string
  full_name: string
  phone: string
  role: UserRole
  is_active: boolean
  created_at: string
}

export interface Vendor {
  id: string
  user_id: string
  business_name: string
  business_email: string
  business_phone: string
  status: VendorStatus
  commission_percentage: number
  rating: number
  total_reviews: number
  total_products: number
  total_orders: number
  verified: boolean
  created_at: string
  updated_at: string
}

export interface Store {
  id: string
  vendor_id: string
  store_name: string
  store_slug: string
  description: string
  category: string
  is_active: boolean
  followers: number
  rating: number
}

export interface VendorProduct {
  id: string
  vendor_id: string
  name: string
  description: string
  category: string
  price: number
  original_price: number
  sku: string
  quantity_in_stock: number
  status: ProductStatus
  image_url: string
  rating: number
  total_reviews: number
  total_sales: number
  is_approved: boolean
  created_at: string
}

// Auth functions
export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function getCurrentUserProfile() {
  const user = await getCurrentUser()
  if (!user) return null

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single()

  if (error) {
    console.error("Error fetching user profile:", error)
    return null
  }

  return data as User
}

export async function getVendorByUserId(userId: string) {
  const { data, error } = await supabase
    .from("vendors")
    .select("*")
    .eq("user_id", userId)
    .single()

  if (error) {
    console.error("Error fetching vendor:", error)
    return null
  }

  return data as Vendor
}

export async function getVendorStore(vendorId: string) {
  const { data, error } = await supabase
    .from("stores")
    .select("*")
    .eq("vendor_id", vendorId)
    .single()

  if (error) {
    console.error("Error fetching store:", error)
    return null
  }

  return data as Store
}

export async function checkIfVendor(userId: string) {
  const user = await supabase.from("users").select("role").eq("id", userId).single()
  return user.data?.role === "vendor"
}

export async function checkIfAdmin(userId: string) {
  const user = await supabase.from("users").select("role").eq("id", userId).single()
  return user.data?.role === "admin"
}
