"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export function AdminSettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/admin/dashboard">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </Link>

      <h1 className="text-3xl font-bold text-foreground mb-2">Platform Settings</h1>
      <p className="text-muted-foreground mb-8">Configure your platform and commission rates</p>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Commission Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="defaultCommission">Default Vendor Commission (%)</Label>
              <Input
                id="defaultCommission"
                type="number"
                defaultValue="15"
                min="0"
                max="100"
                placeholder="15"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Default commission percentage for new vendors
              </p>
            </div>

            <div>
              <Label htmlFor="platformFee">Platform Processing Fee (%)</Label>
              <Input
                id="platformFee"
                type="number"
                defaultValue="5"
                min="0"
                max="100"
                placeholder="5"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Additional processing fee on each transaction
              </p>
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90">Save Settings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="payoutCycle">Payout Cycle (Days)</Label>
              <Input
                id="payoutCycle"
                type="number"
                defaultValue="30"
                min="1"
                placeholder="30"
              />
              <p className="text-xs text-muted-foreground mt-2">
                How often vendors receive payouts
              </p>
            </div>

            <div>
              <Label htmlFor="minimumPayout">Minimum Payout Amount ($)</Label>
              <Input
                id="minimumPayout"
                type="number"
                defaultValue="50"
                min="0"
                placeholder="50"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Minimum earnings required for payout
              </p>
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90">Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
