import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorProductsPage } from "@/components/vendor/products-page"

export const metadata = {
  title: "Manage Products | Vendor Dashboard",
  description: "Add, edit and manage your products",
}

export default function VendorProductsPageRoute() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <VendorProductsPage />
      </main>
      <Footer />
    </>
  )
}
