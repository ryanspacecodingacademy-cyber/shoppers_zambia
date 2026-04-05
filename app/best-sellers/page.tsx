import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductSection } from "@/components/product-section"

export const metadata = {
  title: "Best Sellers | Shoppers Zambia",
  description: "Discover the most popular products loved by our customers",
}

export default function BestSellersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Best Sellers</h1>
            <p className="text-lg text-muted-foreground">
              Discover the most popular products loved by our customers across Zambia.
            </p>
          </div>

          <ProductSection title="Top Rated Products" products={[]} />
        </div>
      </main>
      <Footer />
    </>
  )
}