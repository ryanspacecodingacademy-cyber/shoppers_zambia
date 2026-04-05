"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Shield, CreditCard, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders over $50",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support",
  },
]

const promos = [
  {
    id: 1,
    title: "Electronics Fest",
    subtitle: "Up to 40% Off",
    description: "Smartphones, Laptops & More",
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    href: "/category/electronics",
  },
  {
    id: 2,
    title: "Fashion Week",
    subtitle: "Buy 2 Get 1 Free",
    description: "Trending African Styles",
    bgColor: "bg-gradient-to-br from-rose-500 to-pink-700",
    href: "/category/fashion",
  },
  {
    id: 3,
    title: "Home Essentials",
    subtitle: "Starting at $9.99",
    description: "Transform Your Space",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-700",
    href: "/category/home-kitchen",
  },
]

export function PromoBanners() {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Feature strips */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title} className="border-0 bg-card shadow-sm">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Promo banners */}
      <div className="grid md:grid-cols-3 gap-4">
        {promos.map((promo) => (
          <Link key={promo.id} href={promo.href}>
            <Card
              className={`${promo.bgColor} border-0 overflow-hidden h-full group cursor-pointer`}
            >
              <CardContent className="p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                  <p className="text-card/80 text-sm font-medium mb-1">{promo.subtitle}</p>
                  <h3 className="text-2xl font-bold text-card mb-2">{promo.title}</h3>
                  <p className="text-card/90">{promo.description}</p>
                </div>
                <Button
                  variant="secondary"
                  className="w-fit mt-4 bg-card/20 text-card hover:bg-card/30 group-hover:bg-card group-hover:text-foreground transition-all"
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
