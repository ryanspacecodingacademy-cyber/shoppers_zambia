import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Affiliate Program | Shoppers Zambia",
  description: "Earn commission by promoting products on Shoppers Zambia",
}

export default function AffiliatePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Affiliate Program</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Earn commission by promoting Shoppers Zambia products to your audience.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">High Commission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Earn up to 8% commission on every successful referral and sale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Monitor your referrals, clicks, and earnings in real-time through your dashboard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Monthly Payouts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Get paid monthly once you reach the minimum payout threshold of ZMW 500.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">
                  Create your affiliate account and get your unique referral link.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Promote</h3>
                <p className="text-muted-foreground">
                  Share your referral links on your website, social media, or blog.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn</h3>
                <p className="text-muted-foreground">
                  Earn commission on every sale made through your referral links.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Affiliate Program</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Start earning passive income by promoting quality products to your audience.
              </p>
              <Button size="lg" variant="secondary" className="bg-card text-primary hover:bg-card/90">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}