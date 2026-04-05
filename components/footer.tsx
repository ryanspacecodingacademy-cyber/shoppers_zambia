"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  "Get to Know Us": [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press Releases", href: "/press" },
    { name: "Shoppers Africa Cares", href: "/cares" },
  ],
  "Make Money with Us": [
    { name: "Sell on Shoppers Africa", href: "/sell" },
    { name: "Become an Affiliate", href: "/affiliate" },
    { name: "Advertise Your Products", href: "/advertise" },
    { name: "Self-Publish with Us", href: "/publish" },
  ],
  "Payment Methods": [
    { name: "Credit Cards", href: "/payment/cards" },
    { name: "Mobile Money", href: "/payment/mobile" },
    { name: "Bank Transfer", href: "/payment/bank" },
    { name: "Pay on Delivery", href: "/payment/cod" },
  ],
  "Let Us Help You": [
    { name: "Your Account", href: "/account" },
    { name: "Your Orders", href: "/orders" },
    { name: "Shipping Rates", href: "/shipping" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Help Center", href: "/help" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
]

const paymentMethods = [
  { name: "Visa", href: "/payment/cards" },
  { name: "Mastercard", href: "/payment/cards" },
  { name: "MTN", href: "/payment/mobile" },
  { name: "Airtel", href: "/payment/mobile" }
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full bg-muted-foreground/20 hover:bg-muted-foreground/30 transition-colors py-3 text-sm text-center"
      >
        Back to top
      </button>

      {/* Newsletter */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-card mb-1">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-card/80">
                Get exclusive deals and updates delivered to your inbox
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-card/10 border-card/20 text-card placeholder:text-card/50 w-full md:w-64"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold text-accent">Shoppers</span>
              <span className="block text-sm text-background/60">Africa Vendors Ltd</span>
            </div>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Commerce Street, Lusaka, Zambia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+260 76 408 6744</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>kachprehana99@gmail.com</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-background mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-background/10" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-background/60">We Accept:</span>
            <div className="flex gap-2">
              {paymentMethods.map((method) => (
                <Link
                  key={method.name}
                  href={method.href}
                  className="px-3 py-1 bg-background/10 rounded text-xs font-medium hover:bg-background/20 transition-colors"
                >
                  {method.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-sm text-background/60 text-center">
            © {new Date().getFullYear()} Shoppers Africa Vendors Ltd. All rights reserved.
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-background/50">
          <Link href="/terms" className="hover:text-background/80">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-background/80">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:text-background/80">
            Cookie Policy
          </Link>
          <Link href="/accessibility" className="hover:text-background/80">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  )
}
