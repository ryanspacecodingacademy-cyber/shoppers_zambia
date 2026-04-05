import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductSection } from "@/components/product-section"

export const metadata = {
  title: "New Arrivals | Shoppers Zambia",
  description: "Check out the latest products added to our marketplace",
}

export default function NewArrivalsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">New Arrivals</h1>
            <p className="text-lg text-muted-foreground">
              Be the first to discover the latest products added to our marketplace.
            </p>
          </div>

          <ProductSection title="Latest Products" products={[]} />
        </div>
      </main>
      <Footer />
    </>
  )
}