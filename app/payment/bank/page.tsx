import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Bank Transfer Payments | Shoppers Zambia",
  description: "Secure bank transfer payment options on Shoppers Zambia",
}

export default function BankPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Bank Transfer Payments</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pay securely through direct bank transfers and online banking.
            </p>
          </div>

          {/* Supported Banks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-blue-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">STANBIC</span>
                </div>
                <h3 className="font-semibold">Stanbic Bank</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-green-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FNB</span>
                </div>
                <h3 className="font-semibold">First National Bank</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-red-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ZANACO</span>
                </div>
                <h3 className="font-semibold">Zanaco</h3>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-12 bg-purple-600 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ABSA</span>
                </div>
                <h3 className="font-semibold">Absa Bank</h3>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Bank Transfers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Secure</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Direct bank-to-bank transfers with full transaction security.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Reliable</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    No third-party processing - direct communication with your bank.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Traceable</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Full transaction records and receipts for your accounting needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How to Pay */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How to Pay via Bank Transfer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Bank Transfer</h3>
                <p className="text-muted-foreground">
                  Choose bank transfer as your payment method.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Payment Details</h3>
                <p className="text-muted-foreground">
                  Receive our bank account details for the transfer.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Transfer</h3>
                <p className="text-muted-foreground">
                  Make the transfer and upload proof of payment.
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