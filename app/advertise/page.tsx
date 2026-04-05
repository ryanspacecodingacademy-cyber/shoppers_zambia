import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Advertise with Us | Shoppers Zambia",
  description: "Promote your products and reach millions of customers on Shoppers Zambia",
}

export default function AdvertisePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Advertise with Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reach millions of customers across Zambia with targeted advertising on Shoppers Zambia.
            </p>
          </div>

          {/* Advertising Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Product Promotions</CardTitle>
                <CardDescription>
                  Boost your product visibility with sponsored listings and featured placements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Featured product listings</li>
                  <li>• Sponsored search results</li>
                  <li>• Category page promotions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Display Advertising</CardTitle>
                <CardDescription>
                  Banner ads and display placements across our platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Homepage banners</li>
                  <li>• Category page ads</li>
                  <li>• Product page placements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Brand Campaigns</CardTitle>
                <CardDescription>
                  Comprehensive brand awareness campaigns with custom targeting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Custom campaign design</li>
                  <li>• Targeted audience reach</li>
                  <li>• Performance analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Advertise with Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Massive Reach</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with millions of active shoppers across Zambia who are actively looking for products like yours.
                </p>
                <h3 className="text-xl font-semibold mb-4">Targeted Advertising</h3>
                <p className="text-muted-foreground mb-6">
                  Reach customers based on their interests, location, and shopping behavior for maximum ROI.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                <p className="text-muted-foreground mb-6">
                  Our advertising platform has helped thousands of businesses increase their sales and brand awareness.
                </p>
                <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
                <p className="text-muted-foreground mb-6">
                  Our advertising specialists will help you create and optimize campaigns for the best results.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Start Advertising Today</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Get started with your advertising campaign and reach more customers than ever before.
              </p>
              <Button size="lg" variant="secondary" className="bg-card text-primary hover:bg-card/90">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}