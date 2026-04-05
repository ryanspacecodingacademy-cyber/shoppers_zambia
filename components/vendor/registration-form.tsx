"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"

export function VendorRegistrationForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    // User info
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    // Business info
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessRegistration: "",
    taxId: "",
    // Address
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    // Bank details
    bankAccountName: "",
    bankAccountNumber: "",
    bankName: "",
    bankCode: "",
    // Description
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (step === 1) {
      // Validate step 1
      if (!formData.email || !formData.password || !formData.fullName) {
        setError("Please fill in all required fields")
        return
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        return
      }

      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters")
        return
      }

      setStep(2)
      return
    }

    if (step === 2) {
      if (!formData.businessName || !formData.businessEmail) {
        setError("Please fill in all required business fields")
        return
      }
      setStep(3)
      return
    }

    // Step 3 - Final submission
    if (!formData.bankAccountName || !formData.bankAccountNumber || !formData.bankName) {
      setError("Please fill in all required bank details")
      return
    }

    setLoading(true)

    try {
      // 1. Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }

      if (!authData.user) {
        setError("Failed to create user account")
        setLoading(false)
        return
      }

      // 2. Create user profile via API
      const userProfileResponse = await fetch("/api/auth/create-user-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: authData.user.id,
          email: formData.email,
          fullName: formData.fullName,
          phone: formData.phone,
          role: "vendor",
        }),
      })

      if (!userProfileResponse.ok) {
        const { error } = await userProfileResponse.json()
        setError(error || "Failed to create user profile")
        setLoading(false)
        return
      }

      // 3. Create vendor profile
      const { data: vendorData, error: vendorError } = await supabase
        .from("vendors")
        .insert([
          {
            user_id: authData.user.id,
            business_name: formData.businessName,
            business_email: formData.businessEmail,
            business_phone: formData.businessPhone,
            business_registration_number: formData.businessRegistration,
            tax_id: formData.taxId,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            postal_code: formData.postalCode,
            bank_account_name: formData.bankAccountName,
            bank_account_number: formData.bankAccountNumber,
            bank_name: formData.bankName,
            bank_code: formData.bankCode,
            description: formData.description,
            status: "pending",
          },
        ])
        .select()

      if (vendorError) {
        setError("Failed to create vendor profile: " + vendorError.message)
        setLoading(false)
        return
      }

      // 4. Create store
      const storeSlug = formData.businessName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")

      await supabase.from("stores").insert([
        {
          vendor_id: vendorData[0].id,
          store_name: formData.businessName,
          store_slug: storeSlug,
          description: formData.description,
          is_active: true,
        },
      ])

      setSuccess(true)
      setTimeout(() => {
        router.push("/vendor/dashboard")
      }, 2000)
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h2>
        <p className="text-muted-foreground mb-4">
          Your vendor account has been created. Our team will review your application soon.
        </p>
        <p className="text-sm text-muted-foreground">Redirecting to dashboard...</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Step 1: Personal Information */}
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-foreground">
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+234 123 456 7890"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-foreground">
                Password *
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="confirmPassword" className="text-foreground">
                Confirm Password *
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
            Continue
          </Button>
        </div>
      )}

      {/* Step 2: Business Information */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Business Information</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="businessName" className="text-foreground">
                Business Name *
              </Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Your Business Name"
                required
              />
            </div>

            <div>
              <Label htmlFor="businessEmail" className="text-foreground">
                Business Email *
              </Label>
              <Input
                id="businessEmail"
                name="businessEmail"
                type="email"
                value={formData.businessEmail}
                onChange={handleInputChange}
                placeholder="business@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="businessPhone" className="text-foreground">
                Business Phone *
              </Label>
              <Input
                id="businessPhone"
                name="businessPhone"
                value={formData.businessPhone}
                onChange={handleInputChange}
                placeholder="+234 123 456 7890"
                required
              />
            </div>

            <div>
              <Label htmlFor="businessRegistration" className="text-foreground">
                Business Registration Number
              </Label>
              <Input
                id="businessRegistration"
                name="businessRegistration"
                value={formData.businessRegistration}
                onChange={handleInputChange}
                placeholder="REG-12345"
              />
            </div>

            <div>
              <Label htmlFor="taxId" className="text-foreground">
                Tax ID
              </Label>
              <Input
                id="taxId"
                name="taxId"
                value={formData.taxId}
                onChange={handleInputChange}
                placeholder="TAX-12345"
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="address" className="text-foreground">
                Business Address *
              </Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Business Street"
                required
              />
            </div>

            <div>
              <Label htmlFor="city" className="text-foreground">
                City *
              </Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Lusaka"
                required
              />
            </div>

            <div>
              <Label htmlFor="state" className="text-foreground">
                State/Province *
              </Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="Lusaka"
                required
              />
            </div>

            <div>
              <Label htmlFor="country" className="text-foreground">
                Country *
              </Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Zambia"
                required
              />
            </div>

            <div>
              <Label htmlFor="postalCode" className="text-foreground">
                Postal Code
              </Label>
              <Input
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="100001"
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="description" className="text-foreground">
                Business Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us about your business..."
                rows={4}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={() => setStep(1)}
              variant="outline"
              className="flex-1"
              size="lg"
            >
              Back
            </Button>
            <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90" size="lg">
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Bank Details */}
      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Bank Details</h3>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              Your bank details are securely encrypted and used only for vendor payouts. We never share this information with third parties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="bankAccountName" className="text-foreground">
                Account Holder Name *
              </Label>
              <Input
                id="bankAccountName"
                name="bankAccountName"
                value={formData.bankAccountName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
            </div>

            <div>
              <Label htmlFor="bankName" className="text-foreground">
                Bank Name *
              </Label>
              <Input
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                placeholder="Your Bank Name"
                required
              />
            </div>

            <div>
              <Label htmlFor="bankCode" className="text-foreground">
                Bank Code
              </Label>
              <Input
                id="bankCode"
                name="bankCode"
                value={formData.bankCode}
                onChange={handleInputChange}
                placeholder="000"
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="bankAccountNumber" className="text-foreground">
                Account Number *
              </Label>
              <Input
                id="bankAccountNumber"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleInputChange}
                placeholder="0123456789"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={() => setStep(2)}
              variant="outline"
              className="flex-1"
              size="lg"
            >
              Back
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-accent hover:bg-accent/90"
              size="lg"
            >
              {loading ? "Creating Account..." : "Complete Registration"}
            </Button>
          </div>
        </div>
      )}
    </form>
  )
}
