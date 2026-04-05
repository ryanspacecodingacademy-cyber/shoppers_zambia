"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const recentlyViewed = [
  {
    id: "rv-1",
    name: "Wireless Gaming Mouse",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop",
  },
  {
    id: "rv-2",
    name: "Mechanical Keyboard",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=200&h=200&fit=crop",
  },
  {
    id: "rv-3",
    name: "4K Webcam",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=200&h=200&fit=crop",
  },
  {
    id: "rv-4",
    name: "USB-C Hub",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=200&h=200&fit=crop",
  },
]

const browsingHistory = [
  { name: "Smartphones", href: "/category/smartphones" },
  { name: "Laptops", href: "/category/laptops" },
  { name: "Headphones", href: "/category/headphones" },
  { name: "Cameras", href: "/category/cameras" },
]

export function RecentlyViewed() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recently Viewed */}
        <Card className="border border-border bg-card">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">Your Browsing History</CardTitle>
              <Link
                href="/history"
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {recentlyViewed.map((item) => (
                <Link key={item.id} href={`/product/${item.id}`} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="100px"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 group-hover:text-foreground transition-colors">
                    {item.name}
                  </p>
                  <p className="text-sm font-semibold text-foreground">${item.price}</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Keep Shopping For */}
        <Card className="border border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-foreground">Keep Shopping For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {browsingHistory.map((category) => (
                <Link key={category.name} href={category.href}>
                  <Button
                    variant="outline"
                    className="w-full justify-start h-auto py-4 hover:bg-primary/5 hover:border-primary transition-colors"
                  >
                    <span className="text-foreground">{category.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Looking for something specific?
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Browse All Categories
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
