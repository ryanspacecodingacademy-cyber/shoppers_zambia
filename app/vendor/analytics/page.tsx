import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorAnalyticsPage } from "@/components/vendor/analytics-page"

export const metadata = {
  title: "Analytics | Vendor Dashboard",
  description: "View your store analytics and statistics",
}

export default function VendorAnalyticsPageRoute() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <VendorAnalyticsPage />
      </main>
      <Footer />
    </>
  )
}
