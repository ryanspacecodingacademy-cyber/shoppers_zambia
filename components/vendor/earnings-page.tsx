"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, DollarSign, TrendingUp, CreditCard, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function VendorEarningsPage() {
  const [earnings, setEarnings] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [requesting, setRequesting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    loadEarnings()
  }, [])

  const loadEarnings = async () => {
    try {
      const res = await fetch("/api/earnings")
      const data = await res.json()
      setEarnings(data)
    } catch (err) {
      console.error("Error loading earnings:", err)
    } finally {
      setLoading(false)
    }
  }

  const handlePayoutRequest = async () => {
    setRequesting(true)
    try {
      const res = await fetch("/api/earnings", {
        method: "POST",
      })

      const data = await res.json()

      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Failed to request payout" })
      } else {
        setMessage({ type: "success", text: data.message })
        setTimeout(() => loadEarnings(), 2000)
      }
    } catch (err) {
      setMessage({ type: "error", text: "An error occurred" })
    } finally {
      setRequesting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="h-12 w-12 rounded-full border-4 border-accent border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading earnings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/vendor/dashboard">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </Link>

      <h1 className="text-3xl font-bold text-foreground mb-2">Earnings & Payouts</h1>
      <p className="text-muted-foreground mb-8">Manage your earnings and request payouts</p>

      {message && (
        <Alert className={`mb-6 ${message.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
          <AlertCircle className={`h-4 w-4 ${message.type === "success" ? "text-green-600" : "text-red-600"}`} />
          <AlertDescription className={message.type === "success" ? "text-green-700" : "text-red-700"}>
            {message.text}
          </AlertDescription>
        </Alert>
      )}

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Pending Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">
              ${earnings?.totalPending?.toFixed(2) || "0.00"}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {earnings?.pendingCount || 0} pending orders
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Total Earned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              ${earnings?.totalEarned?.toFixed(2) || "0.00"}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Completed payouts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Commission Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">15%</div>
            <p className="text-xs text-muted-foreground mt-2">Platform fee per order</p>
          </CardContent>
        </Card>
      </div>

      {/* Payout Request */}
      <Card className="mb-8 border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle>Request Payout</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-muted-foreground mb-2">
              Minimum payout amount: <span className="font-semibold text-foreground">$50.00</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Once requested, payouts are processed within 5-7 business days to your registered bank account.
            </p>
          </div>

          <Button
            onClick={handlePayoutRequest}
            disabled={requesting || (earnings?.totalPending || 0) < 50}
            className="bg-accent hover:bg-accent/90"
            size="lg"
          >
            {requesting ? "Processing..." : `Request Payout - $${earnings?.totalPending?.toFixed(2) || "0.00"}`}
          </Button>
        </CardContent>
      </Card>

      {/* Payout History */}
      <Card>
        <CardHeader>
          <CardTitle>Payout History</CardTitle>
        </CardHeader>
        <CardContent>
          {earnings?.payoutHistory && earnings.payoutHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold">Commission</th>
                    <th className="text-left py-3 px-4 font-semibold">Net Amount</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {earnings.payoutHistory.map((payout: any) => (
                    <tr key={payout.id} className="border-b border-border hover:bg-accent/5">
                      <td className="py-4 px-4 text-sm">
                        {payout.payout_date
                          ? new Date(payout.payout_date).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="py-4 px-4 text-sm font-medium">
                        ${payout.amount?.toFixed(2) || "0.00"}
                      </td>
                      <td className="py-4 px-4 text-sm">
                        ${payout.platform_fee?.toFixed(2) || "0.00"} ({payout.commission_percentage}%)
                      </td>
                      <td className="py-4 px-4 text-sm font-semibold">
                        ${payout.net_amount?.toFixed(2) || "0.00"}
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          className={`${
                            payout.status === "completed"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-yellow-100 text-yellow-800 border-yellow-200"
                          } border`}
                          variant="outline"
                        >
                          {payout.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No payout history yet</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
