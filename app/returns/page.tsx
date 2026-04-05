import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Returns & Refunds | Shoppers Zambia",
  description: "Learn about our returns policy and how to process refunds",
}

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Returns & Refunds</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hassle-free returns and refunds for your peace of mind.
            </p>
          </div>

          {/* Return Policy Overview */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Return Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Return Window</h4>
                  <p className="text-muted-foreground mb-4">
                    You can return most items within 30 days of delivery for a full refund.
                  </p>

                  <h4 className="font-semibold mb-2">Return Shipping</h4>
                  <p className="text-muted-foreground mb-4">
                    Return shipping is free for defective items. For other returns, customers pay return shipping.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Refund Processing</h4>
                  <p className="text-muted-foreground mb-4">
                    Refunds are processed within 3-5 business days after we receive your return.
                  </p>

                  <h4 className="font-semibold mb-2">Refund Methods</h4>
                  <p className="text-muted-foreground mb-4">
                    Refunds are issued to the original payment method. Mobile money refunds take 1-2 days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eligible Items */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What Can Be Returned?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Returnable Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Clothing and accessories</li>
                    <li>• Electronics and gadgets</li>
                    <li>• Home and kitchen items</li>
                    <li>• Books and media</li>
                    <li>• Beauty and personal care</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Non-Returnable Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Food and beverages</li>
                    <li>• Personal hygiene items</li>
                    <li>• Digital products</li>
                    <li>• Custom orders</li>
                    <li>• Items damaged by customer</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How to Return */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How to Return an Item</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-muted-foreground">
                  Reach out to our customer service team.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Approval</h3>
                <p className="text-muted-foreground">
                  Receive return authorization and label.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pack & Ship</h3>
                <p className="text-muted-foreground">
                  Package the item securely and ship it back.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Refund</h3>
                <p className="text-muted-foreground">
                  Receive your refund once we process the return.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Need Help with a Return?</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Our customer service team is here to help you with any questions about returns and refunds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-card text-primary hover:bg-card/90">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Start Return
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}