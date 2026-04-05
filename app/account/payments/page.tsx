"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, CreditCard, Plus, Edit, Trash2 } from "lucide-react"

export default function PaymentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Link href="/account" className="text-sm text-muted-foreground hover:text-foreground">
            My Account
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Payment Methods</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Payment Methods</h1>
          <p className="text-muted-foreground">Manage your saved payment methods</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Add New Payment Method */}
          <Card className="border-dashed border-2 hover:border-primary/50 transition-colors">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Plus className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Add Payment Method</h3>
              <p className="text-muted-foreground text-center mb-4">
                Add a new payment method for faster checkout
              </p>
              <Button>
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Saved Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Visa **** 1234
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>Expires: 12/2025</p>
                <p>Billing Address: 123 Main Street, Lusaka</p>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  Default Payment
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  MTN Mobile Money
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>Phone: +260 76 408 6744</p>
                <p>Provider: MTN</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Method Links */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Learn About Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/payment/cards">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="text-center py-6">
                  <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Credit Cards</h3>
                  <p className="text-sm text-muted-foreground">Visa, Mastercard, etc.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/payment/mobile">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="text-center py-6">
                  <div className="h-8 w-8 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <h3 className="font-semibold">Mobile Money</h3>
                  <p className="text-sm text-muted-foreground">MTN, Airtel, etc.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/payment/bank">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="text-center py-6">
                  <div className="h-8 w-8 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <h3 className="font-semibold">Bank Transfer</h3>
                  <p className="text-sm text-muted-foreground">Direct bank payments</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/payment/cod">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="text-center py-6">
                  <div className="h-8 w-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <h3 className="font-semibold">Cash on Delivery</h3>
                  <p className="text-sm text-muted-foreground">Pay when you receive</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}