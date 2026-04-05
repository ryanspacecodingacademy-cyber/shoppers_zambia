import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Careers | Shoppers Zambia",
  description: "Join our team and help build Zambia's leading e-commerce platform",
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Lusaka, Zambia",
      type: "Full-time",
      description: "Build scalable e-commerce solutions and work with modern technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Lusaka, Zambia",
      type: "Full-time",
      description: "Drive product strategy and work closely with engineering and design teams."
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Lusaka, Zambia",
      type: "Full-time",
      description: "Support our vendors and ensure they have a great experience on our platform."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Lusaka, Zambia",
      type: "Full-time",
      description: "Develop and execute marketing campaigns to grow our user base."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us build Zambia's leading e-commerce platform and make a difference in local commerce.
            </p>
          </div>

          {/* Why Join Us Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with cutting-edge technologies and be part of building the future of e-commerce in Zambia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your work directly impacts thousands of vendors and customers across Zambia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Opportunities for professional development and career advancement in a growing company.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="grid gap-6">
              {openPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <CardDescription className="text-base">
                          {position.department} • {position.location}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{position.type}</Badge>
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Don't See a Perfect Fit?</CardTitle>
              <CardDescription className="text-center">
                We're always looking for talented individuals to join our team.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Send us your resume and tell us why you'd be a great addition to our team.
              </p>
              <div className="space-y-2">
                <div>
                  <strong>Email:</strong> careers@shopperszambia.com
                </div>
                <div>
                  <strong>Phone:</strong> +260 76 408 6744
                </div>
              </div>
              <Button className="mt-6" size="lg">
                Send Your Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}