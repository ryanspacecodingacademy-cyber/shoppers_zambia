import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorSettingsPage } from "@/components/vendor/settings-page"

export const metadata = {
  title: "Store Settings | Vendor Dashboard",
  description: "Manage your store settings",
}

export default function VendorSettingsPageRoute() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <VendorSettingsPage />
      </main>
      <Footer />
    </>
  )
}
