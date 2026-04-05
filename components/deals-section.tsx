"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Deal {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  claimed: number
  total: number
}

const deals: Deal[] = [
  {
    id: "deal-1",
    name: "Wireless Bluetooth Earbuds Pro",
    price: 29.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    claimed: 78,
    total: 100,
  },
  {
    id: "deal-2",
    name: "Smart Watch Fitness Tracker",
    price: 49.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    claimed: 65,
    total: 100,
  },
  {
    id: "deal-3",
    name: "Portable Power Bank 20000mAh",
    price: 24.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    claimed: 89,
    total: 100,
  },
  {
    id: "deal-4",
    name: "LED Desk Lamp with USB Charging",
    price: 19.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    claimed: 42,
    total: 100,
  },
]

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-1 text-card">
      <Clock className="h-5 w-5" />
      <span className="font-mono font-bold">
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}
      </span>
    </div>
  )
}

export function DealsSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Flame className="h-8 w-8 text-accent" />
            <div>
              <h2 className="text-2xl font-bold text-card">Lightning Deals</h2>
              <p className="text-card/80 text-sm">Limited time offers - Don&apos;t miss out!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-card/80 text-sm mr-2">Ends in:</span>
              <CountdownTimer />
            </div>
            <Link href="/deals">
              <Button variant="secondary" className="bg-card text-primary hover:bg-card/90">
                View All Deals
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Deals grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map((deal) => {
            const discount = Math.round(
              ((deal.originalPrice - deal.price) / deal.originalPrice) * 100
            )
            const claimedPercent = (deal.claimed / deal.total) * 100

            return (
              <Link key={deal.id} href={`/product/${deal.id}`}>
                <Card className="overflow-hidden bg-card border-0 hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square bg-muted">
                    <Badge
                      variant="destructive"
                      className="absolute top-2 left-2 z-10 text-sm font-bold"
                    >
                      -{discount}%
                    </Badge>
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground line-clamp-2 mb-2 min-h-[48px]">
                      {deal.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-xl font-bold text-destructive">
                        ${deal.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${deal.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <Progress value={claimedPercent} className="h-2 bg-muted" />
                      <p className="text-xs text-muted-foreground">
                        {deal.claimed}% claimed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
