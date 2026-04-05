import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "About Us | Shoppers Zambia",
  description: "Learn about Shoppers Africa Vendors Ltd and our mission to connect vendors with customers across Zambia",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">About Shoppers Zambia</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting vendors and customers across Zambia with a trusted marketplace that empowers local businesses and delivers quality products.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
                <CardDescription>
                  Empowering Zambian businesses and consumers through innovative e-commerce solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in creating opportunities for local vendors while providing customers with access to quality products from trusted sellers across Zambia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
                <CardDescription>
                  To be Zambia's leading e-commerce platform for local commerce
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building a digital marketplace that supports economic growth, creates jobs, and connects communities across Zambia.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Active Vendors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                <div className="text-muted-foreground">Products Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10</div>
                <div className="text-muted-foreground">Cities Covered</div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Trust & Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain the highest standards of integrity in all our operations and communications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Local Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Supporting Zambian businesses and entrepreneurs to grow and succeed in the digital economy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every decision we make prioritizes the needs and satisfaction of our customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Get In Touch</CardTitle>
              <CardDescription className="text-center">
                Have questions about our platform? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div>
                  <strong>Email:</strong> kachprehana99@gmail.com
                </div>
                <div>
                  <strong>Phone:</strong> +260 76 408 6744
                </div>
                <div>
                  <strong>Address:</strong> 123 Commerce Street, Lusaka, Zambia
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