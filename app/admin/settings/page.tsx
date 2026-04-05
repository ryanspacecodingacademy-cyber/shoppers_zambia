import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminSettingsPage } from "@/components/admin/settings-page"
import { AdminAuthGuard } from "@/components/admin/auth-guard"

export const metadata = {
  title: "Platform Settings | Admin",
  description: "Configure platform settings and fees",
}

export default function AdminSettingsPageRoute() {
  return (
    <AdminAuthGuard requiredEmail="kachprehana99@gmail.com">
      <Header />
      <main className="min-h-screen bg-background">
        <AdminSettingsPage />
      </main>
      <Footer />
    </AdminAuthGuard>
  )
}
