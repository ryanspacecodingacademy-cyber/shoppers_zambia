"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ChevronRight, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const dealProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 89.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2543,
    badge: "Lightning Deal",
    freeShipping: true,
    prime: true,
  },
  {
    id: "4",
    name: "Portable Power Bank",
    price: 34.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 3201,
    badge: "Hot Deal",
  },
  {
    id: "5",
    name: "Gaming Keyboard RGB",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1587829191301-623f27570dc5?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 1567,
    prime: true,
  },
  {
    id: "7",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1200,
    badge: "New Deal",
    freeShipping: true,
  },
]

export default function DealsPage() {
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
          <span className="text-sm font-medium">Today&apos;s Deals</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Today&apos;s Lightning Deals</h1>
          
          {/* Deal Timer */}
          <Card className="mb-6 bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-lg font-semibold text-red-600">
                <Clock className="h-6 w-6" />
                Deals end in: 8 hours 45 minutes
              </div>
              <p className="text-sm text-muted-foreground mt-2">Limited quantities available. Hurry!</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Deals */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dealProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>

        {/* Deal Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Shop by Category Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Electronics", "Fashion", "Home & Kitchen", "Beauty & Health"].map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase().replace(/&\s*/g, "-").replace(/\s+/g, "-")}`}>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-center">{category}</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Save up to 50%</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
