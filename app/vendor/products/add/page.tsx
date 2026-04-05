import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AddProductForm } from "@/components/vendor/add-product-form"

export const metadata = {
  title: "Add Product | Vendor Dashboard",
  description: "Add a new product to your store",
}

export default function AddProductPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <AddProductForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
