"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  Dumbbell,
  BookOpen,
  Gamepad2,
  Car,
  ShoppingBasket,
  Baby,
  Watch,
  Headphones,
} from "lucide-react"

const categories = [
  { name: "Electronics", icon: Smartphone, color: "bg-blue-100 text-blue-700", href: "/category/electronics" },
  { name: "Fashion", icon: Shirt, color: "bg-pink-100 text-pink-700", href: "/category/fashion" },
  { name: "Home & Kitchen", icon: Home, color: "bg-amber-100 text-amber-700", href: "/category/home-kitchen" },
  { name: "Beauty", icon: Sparkles, color: "bg-rose-100 text-rose-700", href: "/category/beauty" },
  { name: "Sports", icon: Dumbbell, color: "bg-green-100 text-green-700", href: "/category/sports" },
  { name: "Books", icon: BookOpen, color: "bg-indigo-100 text-indigo-700", href: "/category/books" },
  { name: "Gaming", icon: Gamepad2, color: "bg-purple-100 text-purple-700", href: "/category/gaming" },
  { name: "Automotive", icon: Car, color: "bg-slate-100 text-slate-700", href: "/category/automotive" },
  { name: "Groceries", icon: ShoppingBasket, color: "bg-emerald-100 text-emerald-700", href: "/category/groceries" },
  { name: "Baby", icon: Baby, color: "bg-sky-100 text-sky-700", href: "/category/baby" },
  { name: "Watches", icon: Watch, color: "bg-orange-100 text-orange-700", href: "/category/watches" },
  { name: "Audio", icon: Headphones, color: "bg-teal-100 text-teal-700", href: "/category/audio" },
]

export function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link key={category.name} href={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-center text-foreground line-clamp-2">
                    {category.name}
                  </span>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
