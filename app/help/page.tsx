import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Help Center | Shoppers Zambia",
  description: "Get help with your orders, account, and shopping experience",
}

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions and get help with your shopping experience.
            </p>
          </div>

          {/* Quick Help Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Orders & Shipping</CardTitle>
                <CardDescription>
                  Track orders, shipping info, and delivery questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• How to track my order</li>
                  <li>• Shipping costs and times</li>
                  <li>• Order status updates</li>
                  <li>• Delivery issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payments & Refunds</CardTitle>
                <CardDescription>
                  Payment methods, refunds, and billing questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Payment methods</li>
                  <li>• Refund processing</li>
                  <li>• Failed payments</li>
                  <li>• Billing issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account & Security</CardTitle>
                <CardDescription>
                  Account management and security questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Account settings</li>
                  <li>• Password reset</li>
                  <li>• Privacy settings</li>
                  <li>• Account security</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Popular Topics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Help Topics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Shopping</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-primary hover:underline">How to place an order</a></li>
                  <li><a href="#" className="text-primary hover:underline">Adding items to cart</a></li>
                  <li><a href="#" className="text-primary hover:underline">Applying discount codes</a></li>
                  <li><a href="#" className="text-primary hover:underline">Product availability</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Returns & Exchanges</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-primary hover:underline">Return policy</a></li>
                  <li><a href="#" className="text-primary hover:underline">How to return an item</a></li>
                  <li><a href="#" className="text-primary hover:underline">Exchange process</a></li>
                  <li><a href="#" className="text-primary hover:underline">Refund timelines</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">
                    Get instant help from our support team.
                  </p>
                  <Button>Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us an email and we'll respond within 24 hours.
                  </p>
                  <Button>Send Email</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Call us for immediate assistance.
                  </p>
                  <Button>Call Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">How do I track my order?</h4>
                  <p className="text-muted-foreground">
                    You can track your order by logging into your account and going to "My Orders". You'll find tracking information and delivery updates there.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-muted-foreground">
                    We accept credit/debit cards, mobile money (MTN, Airtel, etc.), bank transfers, and cash on delivery.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">How long does shipping take?</h4>
                  <p className="text-muted-foreground">
                    Standard delivery takes 3-5 business days. Express delivery is available for 1-2 business days, and same-day delivery in select areas.
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