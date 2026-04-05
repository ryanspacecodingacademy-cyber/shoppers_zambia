"use client"

import { Card, CardContent } from "@/components/ui/card"

const brands = [
  { name: "Samsung", logo: "S" },
  { name: "Apple", logo: "A" },
  { name: "Nike", logo: "N" },
  { name: "Adidas", logo: "Ad" },
  { name: "Sony", logo: "So" },
  { name: "LG", logo: "LG" },
  { name: "Philips", logo: "Ph" },
  { name: "HP", logo: "HP" },
]

export function BrandsSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Top Brands</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {brands.map((brand) => (
          <Card
            key={brand.name}
            className="group cursor-pointer hover:shadow-md transition-all duration-300 border border-border bg-card"
          >
            <CardContent className="flex flex-col items-center justify-center p-4 aspect-square">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {brand.logo}
                </span>
              </div>
              <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors">
                {brand.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
