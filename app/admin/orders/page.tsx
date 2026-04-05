import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminOrdersPage } from "@/components/admin/orders-page"
import { AdminAuthGuard } from "@/components/admin/auth-guard"

export const metadata = {
  title: "Manage Orders | Admin",
  description: "View and manage all platform orders",
}

export default function AdminOrdersPageRoute() {
  return (
    <AdminAuthGuard requiredEmail="kachprehana99@gmail.com">
      <Header />
      <main className="min-h-screen bg-background">
        <AdminOrdersPage />
      </main>
      <Footer />
    </AdminAuthGuard>
  )
}
