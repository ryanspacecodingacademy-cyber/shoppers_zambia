import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Self-Publishing Services | Shoppers Zambia",
  description: "Publish and sell your digital products, books, and content on Shoppers Zambia",
}

export default function PublishPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Self-Publishing Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Publish and sell your books, digital products, and content to a global audience.
            </p>
          </div>

          {/* Publishing Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>E-book Publishing</CardTitle>
                <CardDescription>
                  Publish your e-books in multiple formats and reach readers worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• EPUB and PDF formats</li>
                  <li>• Global distribution</li>
                  <li>• Royalty payments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Print-on-Demand</CardTitle>
                <CardDescription>
                  Sell physical books without inventory costs or upfront printing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• No inventory required</li>
                  <li>• Quality printing</li>
                  <li>• Worldwide shipping</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Products</CardTitle>
                <CardDescription>
                  Sell courses, templates, software, and other digital content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Instant delivery</li>
                  <li>• DRM protection</li>
                  <li>• Download tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Publish with Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Easy Publishing</h3>
                <p className="text-muted-foreground mb-6">
                  Simple upload process with our user-friendly publishing tools and templates.
                </p>
                <h3 className="text-xl font-semibold mb-4">Wide Distribution</h3>
                <p className="text-muted-foreground mb-6">
                  Reach customers across Zambia and beyond through our extensive marketplace.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Support</h3>
                <p className="text-muted-foreground mb-6">
                  Get help with formatting, cover design, and marketing your publications.
                </p>
                <h3 className="text-xl font-semibold mb-4">Competitive Royalties</h3>
                <p className="text-muted-foreground mb-6">
                  Earn up to 70% royalty on sales with transparent reporting and timely payments.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Start Publishing Today</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Join thousands of successful authors and creators who publish with us.
              </p>
              <Button size="lg" variant="secondary" className="bg-card text-primary hover:bg-card/90">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}