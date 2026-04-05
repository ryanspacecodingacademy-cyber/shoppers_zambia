import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminDashboard } from "@/components/admin/dashboard"
import { AdminAuthGuard } from "@/components/admin/auth-guard"

export const metadata = {
  title: "Admin Dashboard | Shoppers Africa",
  description: "Manage platform, vendors, and orders",
}

export default function AdminDashboardPage() {
  return (
    <AdminAuthGuard requiredEmail="kachprehana99@gmail.com">
      <Header />
      <main className="min-h-screen bg-background">
        <AdminDashboard />
      </main>
      <Footer />
    </AdminAuthGuard>
  )
}
