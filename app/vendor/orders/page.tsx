import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorOrdersPage } from "@/components/vendor/orders-page"

export const metadata = {
  title: "Your Orders | Vendor Dashboard",
  description: "View and manage your orders",
}

export default function VendorOrdersPageRoute() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <VendorOrdersPage />
      </main>
      <Footer />
    </>
  )
}
