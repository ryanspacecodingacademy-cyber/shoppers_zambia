import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorEarningsPage } from "@/components/vendor/earnings-page"

export const metadata = {
  title: "Earnings & Payouts | Vendor Dashboard",
  description: "View your earnings and request payouts",
}

export default function VendorEarningsPageRoute() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <VendorEarningsPage />
      </main>
      <Footer />
    </>
  )
}
