import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminProductsPage } from "@/components/admin/products-page"
import { AdminAuthGuard } from "@/components/admin/auth-guard"

export const metadata = {
  title: "Moderate Products | Admin",
  description: "Review and moderate vendor products",
}

export default function AdminProductsPageRoute() {
  return (
    <AdminAuthGuard requiredEmail="kachprehana99@gmail.com">
      <Header />
      <main className="min-h-screen bg-background">
        <AdminProductsPage />
      </main>
      <Footer />
    </AdminAuthGuard>
  )
}
