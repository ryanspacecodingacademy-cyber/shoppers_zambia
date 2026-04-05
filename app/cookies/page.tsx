import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Cookie Policy | Shoppers Zambia",
  description: "Learn about how we use cookies and similar technologies",
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2024
            </p>
          </div>

          {/* Cookie Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies for several purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>To keep you signed in to your account</li>
                  <li>To remember items in your shopping cart</li>
                  <li>To understand how you navigate our site</li>
                  <li>To improve site performance and speed</li>
                  <li>To show you relevant advertisements</li>
                  <li>To analyze site traffic and usage patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Essential Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Functional Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies allow the website to remember choices you make and provide enhanced features. They may also be used to provide services you have asked for.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies are used to track visitors across websites to display ads that are relevant and engaging for individual users.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Some cookies are set by third-party services that appear on our pages. We have no control over these cookies, and they are subject to the respective third party's privacy policy.
                </p>
                <p className="text-muted-foreground">
                  Third parties that may set cookies include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Google Analytics (for website analytics)</li>
                  <li>Social media platforms (for social sharing)</li>
                  <li>Payment processors (for secure transactions)</li>
                  <li>Advertising networks (for relevant ads)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Browser Settings</h4>
                    <p className="text-muted-foreground">
                      Most web browsers allow you to control cookies through their settings. You can usually find these settings in the 'Options' or 'Preferences' menu of your browser.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Cookie Consent</h4>
                    <p className="text-muted-foreground">
                      When you first visit our site, you'll see a cookie banner where you can choose which types of cookies to accept or reject.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Opting Out</h4>
                    <p className="text-muted-foreground">
                      You can opt out of interest-based advertising by visiting the Digital Advertising Alliance's opt-out page or the Network Advertising Initiative's opt-out page.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Your Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cookies may collect personal information about you. For more information about how we collect, use, and protect your personal information, please see our Privacy Policy. By using our website, you consent to our use of cookies in accordance with this Cookie Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="text-muted-foreground">
                  <p>Email: privacy@shopperszambia.com</p>
                  <p>Phone: +260 211 123 456</p>
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