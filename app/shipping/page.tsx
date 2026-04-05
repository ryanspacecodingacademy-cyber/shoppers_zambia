import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Shipping & Delivery | Shoppers Zambia",
  description: "Learn about our shipping options, delivery times, and costs",
}

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Shipping & Delivery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast, reliable delivery across Zambia with multiple shipping options.
            </p>
          </div>

          {/* Shipping Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Standard Delivery</CardTitle>
                <CardDescription>
                  Reliable delivery within 3-5 business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">Most Popular</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 3-5 business days</li>
                  <li>• Free on orders over ZMW 500</li>
                  <li>• Tracking included</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Express Delivery</CardTitle>
                <CardDescription>
                  Fast delivery within 1-2 business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 1-2 business days</li>
                  <li>• ZMW 50 delivery fee</li>
                  <li>• Priority handling</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Same Day Delivery</CardTitle>
                <CardDescription>
                  Same day delivery in select areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Same business day</li>
                  <li>• ZMW 100 delivery fee</li>
                  <li>• Limited areas</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Delivery Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Delivery Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Major Cities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Lusaka</li>
                    <li>• Kitwe</li>
                    <li>• Ndola</li>
                    <li>• Livingstone</li>
                    <li>• Chipata</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>All Provinces</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Central Province</li>
                    <li>• Copperbelt Province</li>
                    <li>• Eastern Province</li>
                    <li>• Luapula Province</li>
                    <li>• Muchinga Province</li>
                    <li>• Northern Province</li>
                    <li>• North-Western Province</li>
                    <li>• Southern Province</li>
                    <li>• Western Province</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Shipping Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Order Processing</h3>
                <p className="text-muted-foreground mb-6">
                  Orders are processed within 1-2 business days. You will receive a confirmation email with tracking information once your order ships.
                </p>

                <h3 className="text-xl font-semibold mb-4">International Shipping</h3>
                <p className="text-muted-foreground mb-6">
                  We offer international shipping to select countries. Contact our customer service for rates and delivery times.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Package Tracking</h3>
                <p className="text-muted-foreground mb-6">
                  Track your package in real-time using the tracking number provided in your shipping confirmation email.
                </p>

                <h3 className="text-xl font-semibold mb-4">Delivery Issues</h3>
                <p className="text-muted-foreground mb-6">
                  If you have any issues with your delivery, contact our customer service team within 48 hours of delivery.
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