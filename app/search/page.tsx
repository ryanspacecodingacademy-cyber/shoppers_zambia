"use client"

import Link from "next/link"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useSearchParams } from "next/navigation"
import { ChevronRight } from "lucide-react"

const mockProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 89.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2543,
    badge: "Best Seller",
    freeShipping: true,
    prime: true,
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1829,
    prime: true,
  },
  {
    id: "3",
    name: "Ultra HD Camera",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 945,
    freeShipping: true,
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
    id: "6",
    name: "USB-C Hub Pro",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 892,
    freeShipping: true,
  },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Search Results</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Search Results{query && `: "${query}"`}
          </h1>
          <p className="text-muted-foreground">{mockProducts.length} results found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockProducts.map((product) => (
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

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Search Results</span>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Search Results</h1>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}
