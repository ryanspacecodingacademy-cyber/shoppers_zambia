import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Card Payments | Shoppers Zambia",
  description: "Secure card payment options available on Shoppers Zambia",
}

export default function CardsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Card Payments</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pay securely with your credit or debit card on Shoppers Zambia.
            </p>
          </div>

          {/* Accepted Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-blue-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">VISA</span>
                </div>
                <h3 className="font-semibold">Visa</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-red-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">MC</span>
                </div>
                <h3 className="font-semibold">Mastercard</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-blue-800 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">AMEX</span>
                </div>
                <h3 className="font-semibold">American Express</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-green-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">DC</span>
                </div>
                <h3 className="font-semibold">Diners Club</h3>
              </CardContent>
            </Card>
          </div>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Secure Payment Processing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">SSL Encryption</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    All card transactions are protected with 256-bit SSL encryption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">PCI Compliant</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We comply with PCI DSS standards to ensure your card data is secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Fraud Protection</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Advanced fraud detection systems protect against unauthorized transactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How to Pay */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How to Pay with Card</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Add to Cart</h3>
                <p className="text-muted-foreground">
                  Select your items and proceed to checkout.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enter Card Details</h3>
                <p className="text-muted-foreground">
                  Provide your card information securely.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Payment</h3>
                <p className="text-muted-foreground">
                  Confirm and complete your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}