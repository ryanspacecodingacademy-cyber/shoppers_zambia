import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Mobile Money Payments | Shoppers Zambia",
  description: "Pay conveniently with mobile money on Shoppers Zambia",
}

export default function MobilePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Mobile Money Payments</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pay conveniently with mobile money across all major networks in Zambia.
            </p>
          </div>

          {/* Supported Networks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-orange-500 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">MTN</span>
                </div>
                <h3 className="font-semibold">MTN Mobile Money</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-blue-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">AIRTEL</span>
                </div>
                <h3 className="font-semibold">Airtel Money</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-green-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">ZAMTEL</span>
                </div>
                <h3 className="font-semibold">Zamtel Kwacha</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-purple-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">ZOONA</span>
                </div>
                <h3 className="font-semibold">Zoona</h3>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Mobile Money?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Convenient</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Pay from anywhere using just your mobile phone number.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Instant</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Transactions are processed instantly with immediate confirmation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Secure</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Bank-level security with PIN protection and transaction limits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How to Pay */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How to Pay with Mobile Money</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Mobile Money</h3>
                <p className="text-muted-foreground">
                  Choose your mobile money provider at checkout.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enter Phone Number</h3>
                <p className="text-muted-foreground">
                  Provide your registered mobile money number.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Authorize Payment</h3>
                <p className="text-muted-foreground">
                  Confirm the payment on your mobile device.
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