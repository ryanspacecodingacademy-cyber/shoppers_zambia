import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Cash on Delivery | Shoppers Zambia",
  description: "Pay cash when you receive your order on Shoppers Zambia",
}

export default function CodPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Cash on Delivery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pay cash only when you receive your order at your doorstep.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">No Advance Payment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Pay only when you receive and inspect your order.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Safe Shopping</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Shop with confidence knowing you can inspect before paying.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Convenient</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  No need for cards, mobile money, or bank transfers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How Cash on Delivery Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Place Order</h3>
                <p className="text-muted-foreground">
                  Select Cash on Delivery at checkout.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Order Processing</h3>
                <p className="text-muted-foreground">
                  We prepare and ship your order.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Delivery</h3>
                <p className="text-muted-foreground">
                  Our courier delivers to your address.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pay on Receipt</h3>
                <p className="text-muted-foreground">
                  Inspect and pay cash for your order.
                </p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">COD Fees</h4>
                  <p className="text-muted-foreground mb-4">
                    A small COD fee may apply depending on order value and location.
                  </p>

                  <h4 className="font-semibold mb-2">Order Limits</h4>
                  <p className="text-muted-foreground mb-4">
                    Maximum order value for COD is ZMW 10,000.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery Areas</h4>
                  <p className="text-muted-foreground mb-4">
                    COD is available in major cities and towns across Zambia.
                  </p>

                  <h4 className="font-semibold mb-2">Return Policy</h4>
                  <p className="text-muted-foreground mb-4">
                    Returns are accepted within 7 days if items are damaged or incorrect.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}