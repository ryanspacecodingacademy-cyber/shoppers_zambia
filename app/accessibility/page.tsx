import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Accessibility Statement | Shoppers Zambia",
  description: "Our commitment to making Shoppers Zambia accessible to everyone",
}

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Accessibility Statement</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to making Shoppers Zambia accessible to everyone, including people with disabilities.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2024
            </p>
          </div>

          {/* Accessibility Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shoppers Zambia is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities.
                </p>
                <p className="text-muted-foreground">
                  Our accessibility efforts include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Providing text alternatives for non-text content</li>
                  <li>Creating content that can be presented in different ways</li>
                  <li>Making it easier for users to see and hear content</li>
                  <li>Providing compatible user agents and assistive technologies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features for Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Screen Reader Support</h4>
                    <p className="text-muted-foreground">
                      Our website is designed to work with popular screen readers including JAWS, NVDA, and VoiceOver.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Keyboard Navigation</h4>
                    <p className="text-muted-foreground">
                      All interactive elements can be accessed and operated using only the keyboard.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">High Contrast</h4>
                    <p className="text-muted-foreground">
                      We provide sufficient color contrast and support for high contrast mode in browsers.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Text Resizing</h4>
                    <p className="text-muted-foreground">
                      Our design accommodates text resizing up to 200% without loss of functionality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Known Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  While we strive for full accessibility, some legacy content and third-party integrations may not yet meet all WCAG 2.1 Level AA criteria. We are actively working to address these issues.
                </p>
                <p className="text-muted-foreground">
                  Areas we're currently improving:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Some older product images may lack detailed alt text</li>
                  <li>Certain third-party widgets may have accessibility limitations</li>
                  <li>Complex data tables are being enhanced for better screen reader support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback and Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We welcome your feedback on the accessibility of Shoppers Zambia. If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Report an Issue</h4>
                    <p className="text-muted-foreground">
                      If you find any accessibility issues, please email us at accessibility@shopperszambia.com with details about the problem and how we can reproduce it.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Request Assistance</h4>
                    <p className="text-muted-foreground">
                      If you need help completing a transaction or accessing information on our site, our customer service team is available to assist you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Browser and Assistive Technology Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Shoppers Zambia is designed to work with the following combinations:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Desktop Browsers</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Chrome (latest 2 versions)</li>
                      <li>• Firefox (latest 2 versions)</li>
                      <li>• Safari (latest 2 versions)</li>
                      <li>• Edge (latest 2 versions)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mobile Browsers</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Safari iOS (latest 2 versions)</li>
                      <li>• Chrome Android (latest 2 versions)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shoppers Zambia complies with applicable accessibility laws and regulations, including the Zambian Persons with Disabilities Act and international accessibility standards. We are committed to maintaining and improving accessibility across our platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For accessibility-related questions or feedback:
                </p>
                <div className="text-muted-foreground">
                  <p>Email: accessibility@shopperszambia.com</p>
                  <p>Phone: +260 211 123 456</p>
                  <p>Mailing Address: Shoppers Zambia, Accessibility Team, Lusaka, Zambia</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}