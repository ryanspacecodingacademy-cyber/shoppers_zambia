"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Mega Electronics Sale",
    subtitle: "Up to 50% Off on Latest Gadgets",
    cta: "Shop Electronics",
    bgGradient: "from-emerald-700 to-emerald-900",
    href: "/category/electronics",
  },
  {
    id: 2,
    title: "New Fashion Collection",
    subtitle: "Discover African-Inspired Styles",
    cta: "Shop Fashion",
    bgGradient: "from-amber-600 to-orange-800",
    href: "/category/fashion",
  },
  {
    id: 3,
    title: "Home & Kitchen Essentials",
    subtitle: "Transform Your Living Space",
    cta: "Shop Home",
    bgGradient: "from-slate-700 to-slate-900",
    href: "/category/home-and-kitchen",
  },
  {
    id: 4,
    title: "Beauty & Personal Care",
    subtitle: "Premium Products at Great Prices",
    cta: "Shop Beauty",
    bgGradient: "from-rose-600 to-rose-800",
    href: "/category/beauty-and-health",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center`}>
            <div className="container mx-auto px-4 lg:px-16">
              <div className="max-w-xl text-card">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl mb-6 text-card/90">
                  {slide.subtitle}
                </p>
                <Link href={slide.href}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/20 hover:bg-card/40 text-card h-12 w-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/20 hover:bg-card/40 text-card h-12 w-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-card w-8"
                : "bg-card/50 hover:bg-card/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Fade overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
