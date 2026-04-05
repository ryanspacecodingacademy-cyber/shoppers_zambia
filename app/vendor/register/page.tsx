import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorRegistrationForm } from "@/components/vendor/registration-form"

export const metadata = {
  title: "Become a Vendor | Shoppers Africa",
  description: "Start selling on Shoppers Africa and reach thousands of customers",
}

export default function VendorRegistrationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Become a Vendor</h1>
            <p className="text-lg text-muted-foreground">
              Join Shoppers Africa and start selling your products to thousands of customers across Africa.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg shadow-lg p-8">
            <VendorRegistrationForm />
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">0%</div>
              <p className="text-foreground font-semibold mb-2">Setup Fee</p>
              <p className="text-muted-foreground text-sm">
                No setup costs or monthly fees. Only pay commission on sales.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">15%</div>
              <p className="text-foreground font-semibold mb-2">Commission</p>
              <p className="text-muted-foreground text-sm">
                Competitive commission rates with no hidden charges.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <p className="text-foreground font-semibold mb-2">Support</p>
              <p className="text-muted-foreground text-sm">
                Dedicated vendor support team ready to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
