"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { getCurrentUser, getVendorByUserId } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"
import { useState as useStateHook } from "react"

export function VendorSettingsPage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [vendor, setVendor] = useState<any>(null)
  const [store, setStore] = useState<any>(null)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    storeName: "",
    storeDescription: "",
    businessEmail: "",
    businessPhone: "",
  })

  useEffect(() => {
    loadVendorData()
  }, [])

  const loadVendorData = async () => {
    try {
      const user = await getCurrentUser()
      if (!user) return

      const vendorData = await getVendorByUserId(user.id)
      if (!vendorData) return

      setVendor(vendorData)

      const { data: storeData } = await supabase
        .from("stores")
        .select("*")
        .eq("vendor_id", vendorData.id)
        .single()

      if (storeData) {
        setStore(storeData)
        setFormData({
          storeName: storeData.store_name,
          storeDescription: storeData.description,
          businessEmail: vendorData.business_email,
          businessPhone: vendorData.business_phone,
        })
      }
    } catch (err) {
      console.error("Error loading vendor data:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      if (store) {
        await supabase
          .from("stores")
          .update({
            store_name: formData.storeName,
            description: formData.storeDescription,
          })
          .eq("id", store.id)
      }

      if (vendor) {
        await supabase
          .from("vendors")
          .update({
            business_email: formData.businessEmail,
            business_phone: formData.businessPhone,
          })
          .eq("id", vendor.id)
      }

      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      console.error("Error saving settings:", err)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="h-12 w-12 rounded-full border-4 border-accent border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading settings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/vendor/dashboard">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </Link>

      <h1 className="text-3xl font-bold text-foreground mb-2">Store Settings</h1>
      <p className="text-muted-foreground mb-8">Manage your store profile and contact information</p>

      {success && (
        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <p className="text-green-700">Settings saved successfully!</p>
        </div>
      )}

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Store Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="storeName" className="text-foreground">
                Store Name
              </Label>
              <Input
                id="storeName"
                name="storeName"
                value={formData.storeName}
                onChange={handleInputChange}
                placeholder="Your Store Name"
              />
            </div>

            <div>
              <Label htmlFor="storeDescription" className="text-foreground">
                Store Description
              </Label>
              <Textarea
                id="storeDescription"
                name="storeDescription"
                value={formData.storeDescription}
                onChange={handleInputChange}
                placeholder="Tell customers about your store..."
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessEmail" className="text-foreground">
                  Business Email
                </Label>
                <Input
                  id="businessEmail"
                  name="businessEmail"
                  type="email"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  placeholder="business@example.com"
                />
              </div>

              <div>
                <Label htmlFor="businessPhone" className="text-foreground">
                  Business Phone
                </Label>
                <Input
                  id="businessPhone"
                  name="businessPhone"
                  value={formData.businessPhone}
                  onChange={handleInputChange}
                  placeholder="+234 123 456 7890"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={saving}
              className="bg-accent hover:bg-accent/90"
            >
              {saving ? "Saving..." : "Save Settings"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
