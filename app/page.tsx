"use client"

import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { CategoryGrid } from "@/components/category-grid"
import { ProductSection } from "@/components/product-section"
import { DealsSection } from "@/components/deals-section"
import { PromoBanners } from "@/components/promo-banners"
import { BrandsSection } from "@/components/brands-section"
import { RecentlyViewed } from "@/components/recently-viewed"
import { Footer } from "@/components/footer"

// Sample product data
const bestSellers = [
  {
    id: "bs-1",
    name: "Apple iPhone 15 Pro Max 256GB - Natural Titanium",
    price: 1199.99,
    originalPrice: 1399.99,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 12453,
    badge: "Best Seller",
    freeShipping: true,
    prime: true,
  },
  {
    id: "bs-2",
    name: "Samsung Galaxy S24 Ultra 512GB - Titanium Gray",
    price: 1049.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 8932,
    freeShipping: true,
    prime: true,
  },
  {
    id: "bs-3",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    price: 298.00,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 23456,
    badge: "Top Rated",
    freeShipping: true,
    prime: true,
  },
  {
    id: "bs-4",
    name: "MacBook Pro 14-inch M3 Pro Chip 18GB RAM 512GB SSD",
    price: 1999.00,
    originalPrice: 2199.00,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 5678,
    freeShipping: true,
    prime: true,
  },
  {
    id: "bs-5",
    name: "Apple Watch Series 9 GPS 45mm Midnight Aluminum",
    price: 379.00,
    originalPrice: 429.00,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 15234,
    freeShipping: true,
    prime: true,
  },
  {
    id: "bs-6",
    name: "iPad Air 11-inch M2 Chip 256GB Wi-Fi - Space Gray",
    price: 599.00,
    originalPrice: 699.00,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 9876,
    freeShipping: true,
    prime: true,
  },
]

const newArrivals = [
  {
    id: "na-1",
    name: "Dyson V15 Detect Absolute Cordless Vacuum",
    price: 649.99,
    originalPrice: 749.99,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 3421,
    badge: "New",
    freeShipping: true,
  },
  {
    id: "na-2",
    name: "Bose QuietComfort Ultra Earbuds - Black",
    price: 279.00,
    originalPrice: 299.00,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 2134,
    badge: "New",
    freeShipping: true,
  },
  {
    id: "na-3",
    name: "Nike Air Max 270 React - Triple Black",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 5678,
    badge: "New",
    freeShipping: true,
  },
  {
    id: "na-4",
    name: "Instant Pot Pro Plus 6-Quart Smart Pressure Cooker",
    price: 129.95,
    originalPrice: 169.99,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 8765,
    freeShipping: true,
  },
  {
    id: "na-5",
    name: "Kindle Paperwhite Signature Edition 32GB",
    price: 149.99,
    originalPrice: 189.99,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 12345,
    freeShipping: true,
    prime: true,
  },
  {
    id: "na-6",
    name: "Anker 737 Power Bank 24000mAh 140W Fast Charging",
    price: 109.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 4567,
    freeShipping: true,
  },
]

const fashionPicks = [
  {
    id: "fp-1",
    name: "African Print Ankara Maxi Dress - Vibrant Multi-Color",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1590400516695-36d2bc73f3c2?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 892,
    badge: "African Made",
    freeShipping: true,
  },
  {
    id: "fp-2",
    name: "Men&apos;s Premium Kente Cloth Shirt - Traditional Design",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 567,
    badge: "Handcrafted",
    freeShipping: true,
  },
  {
    id: "fp-3",
    name: "Leather Crossbody Bag - Genuine African Craftsmanship",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 1234,
    freeShipping: true,
  },
  {
    id: "fp-4",
    name: "Beaded Statement Necklace - Maasai Inspired Design",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 456,
    badge: "Artisan",
    freeShipping: true,
  },
  {
    id: "fp-5",
    name: "Men&apos;s Dashiki Embroidered Shirt - Royal Blue",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 789,
    freeShipping: true,
  },
  {
    id: "fp-6",
    name: "Women&apos;s Wax Print Head Wrap Set - 3 Piece",
    price: 34.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 2345,
    badge: "Popular",
    freeShipping: true,
  },
]

const homeEssentials = [
  {
    id: "he-1",
    name: "Robot Vacuum Cleaner with Smart Mapping & Self-Empty",
    price: 399.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 6789,
    freeShipping: true,
    prime: true,
  },
  {
    id: "he-2",
    name: "Air Purifier HEPA Filter for Large Rooms up to 1500 sq ft",
    price: 179.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 3456,
    freeShipping: true,
  },
  {
    id: "he-3",
    name: "Smart LED Bulb 4-Pack - Color Changing WiFi Compatible",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 8901,
    freeShipping: true,
  },
  {
    id: "he-4",
    name: "Memory Foam Mattress Topper Queen Size - 3 Inch",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 5432,
    freeShipping: true,
  },
  {
    id: "he-5",
    name: "Non-Stick Cookware Set 12 Piece - Professional Grade",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 2345,
    freeShipping: true,
    prime: true,
  },
  {
    id: "he-6",
    name: "Smart Thermostat with Voice Control - Energy Saving",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1567925086983-a5748bab5e6e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 4567,
    freeShipping: true,
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero section with carousel */}
      <HeroCarousel />
      
      {/* Category navigation grid */}
      <CategoryGrid />
      
      {/* Promo banners and features */}
      <PromoBanners />
      
      {/* Best Sellers */}
      <ProductSection
        title="Best Sellers"
        products={bestSellers}
        viewAllHref="/best-sellers"
      />
      
      {/* Lightning Deals */}
      <DealsSection />
      
      {/* New Arrivals */}
      <ProductSection
        title="New Arrivals"
        products={newArrivals}
        viewAllHref="/new-arrivals"
        bgColor="bg-muted/30"
      />
      
      {/* Top Brands */}
      <BrandsSection />
      
      {/* African Fashion Picks */}
      <ProductSection
        title="African Fashion Picks"
        products={fashionPicks}
        viewAllHref="/category/fashion"
      />
      
      {/* Home Essentials */}
      <ProductSection
        title="Home Essentials"
        products={homeEssentials}
        viewAllHref="/category/home-kitchen"
        bgColor="bg-muted/30"
      />
      
      {/* Recently Viewed / Browsing History */}
      <RecentlyViewed />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
