import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorDashboard } from "@/components/vendor/dashboard"

export const metadata = {
  title: "Vendor Dashboard | Shoppers Africa",
  description: "Manage your store and products",
}

export default function VendorDashboardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <VendorDashboard />
      </main>
      <Footer />
    </>
  )
}
