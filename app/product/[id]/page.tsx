"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react"
import { useState } from "react"
import { useParams } from "next/navigation"
import { ChevronRight } from "lucide-react"

const productDetails: Record<string, any> = {
  "1": {
    name: "Premium Wireless Headphones",
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviews: 2543,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
    ],
    description: "Experience premium sound quality with our wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort.",
    features: [
      "Active Noise Cancellation (ANC)",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Premium comfort padding",
      "Built-in microphone",
    ],
    inStock: true,
    badge: "Best Seller",
    freeShipping: true,
    prime: true,
  },
  "2": {
    name: "Smart Watch Pro",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviews: 1829,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523277335684-37898b6baf30?w=800&h=800&fit=crop",
    ],
    description: "Stay connected with our advanced smart watch. Monitor your health, receive notifications, and track your fitness goals.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery",
      "iOS and Android compatible",
    ],
    inStock: true,
    prime: true,
  },
}

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = productDetails[productId] || productDetails["1"]

  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Link href="/category/electronics" className="text-sm text-muted-foreground hover:text-foreground">
            Electronics
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {discount > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-600">-{discount}%</Badge>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img: string, idx: number) => (
                <button key={idx} className="aspect-square bg-muted rounded-md overflow-hidden">
                  <Image
                    src={img}
                    alt={`Product view ${idx + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.reviews.toLocaleString()} reviews</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
              {discount > 0 && (
                <p className="text-red-600 font-semibold">Save {discount}%</p>
              )}
            </div>

            {/* Badges */}
            <div className="flex gap-2 mb-6">
              {product.badge && <Badge>{product.badge}</Badge>}
              {product.freeShipping && <Badge variant="outline">Free Shipping</Badge>}
              {product.prime && <Badge variant="outline">Prime Eligible</Badge>}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="h-2 w-2 bg-primary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock and Actions */}
            <div className="mb-6">
              {product.inStock ? (
                <p className="text-green-600 font-semibold mb-4">In Stock</p>
              ) : (
                <p className="text-red-600 font-semibold mb-4">Out of Stock</p>
              )}

              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="px-4 py-2 border rounded">{quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-600 text-red-600" : ""}`} />
                </Button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">100% protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <RotateCcw className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
