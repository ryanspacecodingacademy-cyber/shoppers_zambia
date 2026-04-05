"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { getCurrentUser, getVendorByUserId } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertCircle, ArrowLeft, CheckCircle } from "lucide-react"

const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Health",
  "Sports & Outdoors",
  "Books & Media",
  "Toys & Games",
  "Automotive",
  "Groceries",
]

export function AddProductForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    originalPrice: "",
    sku: "",
    quantity: "",
    imageUrl: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !formData.price ||
      !formData.quantity
    ) {
      setError("Please fill in all required fields")
      setLoading(false)
      return
    }

    try {
      const user = await getCurrentUser()
      if (!user) {
        setError("Not authenticated")
        setLoading(false)
        return
      }

      const vendor = await getVendorByUserId(user.id)
      if (!vendor) {
        setError("Vendor profile not found")
        setLoading(false)
        return
      }

      // Check if vendor is approved
      if (vendor.status !== "approved") {
        setError("Your vendor account must be approved before adding products")
        setLoading(false)
        return
      }

      const { error: insertError } = await supabase.from("products_v2").insert([
        {
          vendor_id: vendor.id,
          name: formData.name,
          description: formData.description,
          category: formData.category,
          price: parseFloat(formData.price),
          original_price: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          sku: formData.sku || `SKU-${Date.now()}`,
          quantity_in_stock: parseInt(formData.quantity),
          image_url: formData.imageUrl,
          status: "draft",
          is_approved: false,
        },
      ])

      if (insertError) {
        setError("Failed to add product: " + insertError.message)
        setLoading(false)
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/vendor/products")
      }, 2000)
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Product Added Successfully!</h2>
          <p className="text-muted-foreground mb-4">
            Your product has been added and is pending approval.
          </p>
          <p className="text-sm text-muted-foreground">Redirecting to products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/vendor/products">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">Add New Product</h1>
        <p className="text-muted-foreground">Create a new product listing for your store</p>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <Label htmlFor="name" className="text-foreground">
                Product Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description" className="text-foreground">
                Description *
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your product..."
                rows={5}
                required
              />
            </div>

            {/* Category and SKU */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category" className="text-foreground">
                  Category *
                </Label>
                <Select value={formData.category} onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, category: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="sku" className="text-foreground">
                  SKU
                </Label>
                <Input
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  placeholder="SKU-123"
                />
              </div>
            </div>

            {/* Pricing */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price" className="text-foreground">
                  Price *
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="9.99"
                  required
                />
              </div>

              <div>
                <Label htmlFor="originalPrice" className="text-foreground">
                  Original Price (Optional)
                </Label>
                <Input
                  id="originalPrice"
                  name="originalPrice"
                  type="number"
                  step="0.01"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  placeholder="19.99"
                />
              </div>
            </div>

            {/* Quantity and Image */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quantity" className="text-foreground">
                  Quantity in Stock *
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="100"
                  required
                />
              </div>

              <div>
                <Label htmlFor="imageUrl" className="text-foreground">
                  Image URL
                </Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Image Preview */}
            {formData.imageUrl && (
              <div className="border border-border rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">Image Preview:</p>
                <img
                  src={formData.imageUrl}
                  alt="Product"
                  className="max-w-xs h-auto rounded"
                  onError={() => (
                    <p className="text-sm text-red-600">Failed to load image</p>
                  )}
                />
              </div>
            )}

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-accent hover:bg-accent/90"
              >
                {loading ? "Adding Product..." : "Add Product"}
              </Button>

              <Link href="/vendor/products" className="flex-1">
                <Button type="button" variant="outline" className="w-full">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
