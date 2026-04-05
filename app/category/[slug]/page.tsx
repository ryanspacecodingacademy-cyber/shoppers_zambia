"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useParams } from "next/navigation"
import { ChevronRight, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const categoryProducts: Record<string, any[]> = {
  "electronics": [
    { id: "1", name: "Premium Wireless Headphones", price: 89.99, originalPrice: 149.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop", rating: 4.8, reviews: 2543, badge: "Best Seller", freeShipping: true, prime: true },
    { id: "2", name: "Smart Watch Pro", price: 199.99, originalPrice: 299.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop", rating: 4.6, reviews: 1829, prime: true },
    { id: "3", name: "Ultra HD Camera", price: 449.99, image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop", rating: 4.7, reviews: 945, freeShipping: true },
    { id: "4", name: "Portable Power Bank", price: 34.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop", rating: 4.5, reviews: 3201, badge: "Hot Deal" },
    { id: "5", name: "Gaming Keyboard RGB", price: 79.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1587829191301-623f27570dc5?w=500&h=500&fit=crop", rating: 4.9, reviews: 1567, prime: true },
    { id: "6", name: "USB-C Hub Pro", price: 59.99, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop", rating: 4.4, reviews: 892, freeShipping: true },
  ],
  "fashion": [
    { id: "7", name: "Premium Cotton T-Shirt", price: 29.99, originalPrice: 49.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", rating: 4.6, reviews: 1200, badge: "New", freeShipping: true },
    { id: "8", name: "Denim Jeans Classic", price: 59.99, image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop", rating: 4.7, reviews: 2100, prime: true },
    { id: "9", name: "Leather Jacket Pro", price: 129.99, image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop", rating: 4.8, reviews: 890, freeShipping: true },
    { id: "10", name: "Summer Dress Floral", price: 39.99, image: "https://images.unsplash.com/photo-1496217666304-f3b66f4db6c0?w=500&h=500&fit=crop", rating: 4.5, reviews: 1567, freeShipping: true },
  ],
  "home-and-kitchen": [
    { id: "11", name: "Smart Coffee Maker", price: 89.99, image: "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&h=500&fit=crop", rating: 4.7, reviews: 1234, prime: true },
    { id: "12", name: "Stainless Steel Cookware", price: 149.99, image: "https://images.unsplash.com/photo-1597521895367-db3ded40e8a4?w=500&h=500&fit=crop", rating: 4.8, reviews: 2345, freeShipping: true },
  ],
}

const categoryNames: Record<string, string> = {
  "electronics": "Electronics",
  "fashion": "Fashion",
  "home-and-kitchen": "Home & Kitchen",
  "beauty-and-health": "Beauty & Health",
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const categoryName = categoryNames[slug] || "Products"
  const products = categoryProducts[slug] || categoryProducts["electronics"]

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
          <span className="text-sm font-medium">{categoryName}</span>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
            <p className="text-muted-foreground">{products.length} products available</p>
          </div>
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
