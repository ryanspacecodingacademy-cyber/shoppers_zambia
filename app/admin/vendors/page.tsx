import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminVendorsPage } from "@/components/admin/vendors-page"
import { AdminAuthGuard } from "@/components/admin/auth-guard"

export const metadata = {
  title: "Manage Vendors | Admin",
  description: "Manage all vendors on the platform",
}

export default function AdminVendorsPageRoute() {
  return (
    <AdminAuthGuard requiredEmail="kachprehana99@gmail.com">
      <Header />
      <main className="min-h-screen bg-background">
        <AdminVendorsPage />
      </main>
      <Footer />
    </AdminAuthGuard>
  )
}
