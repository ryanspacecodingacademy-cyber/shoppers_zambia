import { supabase } from "@/lib/supabase"
import { getCurrentUser, getVendorByUserId } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return Response.json({ error: "Not authenticated" }, { status: 401 })
    }

    const vendor = await getVendorByUserId(user.id)
    if (!vendor) {
      return Response.json({ error: "Vendor not found" }, { status: 404 })
    }

    // Get pending earnings
    const { data: pendingEarnings } = await supabase
      .from("vendor_earnings")
      .select("*")
      .eq("vendor_id", vendor.id)
      .eq("status", "pending")

    // Get total pending amount
    const totalPending = pendingEarnings?.reduce((sum, e) => sum + (e.net_amount || 0), 0) || 0

    // Get completed payouts
    const { data: completedPayouts } = await supabase
      .from("vendor_earnings")
      .select("*")
      .eq("vendor_id", vendor.id)
      .eq("status", "completed")

    // Get payout history
    const { data: payoutHistory } = await supabase
      .from("vendor_earnings")
      .select("*")
      .eq("vendor_id", vendor.id)
      .neq("status", "pending")
      .order("payout_date", { ascending: false })
      .limit(10)

    const totalEarned = completedPayouts?.reduce((sum, e) => sum + (e.net_amount || 0), 0) || 0

    return Response.json({
      totalPending,
      totalEarned,
      pendingCount: pendingEarnings?.length || 0,
      payoutHistory,
    })
  } catch (error) {
    console.error("Earnings retrieval error:", error)
    return Response.json({ error: "Failed to retrieve earnings" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return Response.json({ error: "Not authenticated" }, { status: 401 })
    }

    const vendor = await getVendorByUserId(user.id)
    if (!vendor) {
      return Response.json({ error: "Vendor not found" }, { status: 404 })
    }

    // Get minimum payout amount from settings (default 50)
    const { data: settings } = await supabase
      .from("platform_settings")
      .select("setting_value")
      .eq("setting_key", "min_payout_amount")
      .single()

    const minPayout = settings ? parseFloat(settings.setting_value) : 50

    // Get total pending earnings
    const { data: pendingEarnings } = await supabase
      .from("vendor_earnings")
      .select("*")
      .eq("vendor_id", vendor.id)
      .eq("status", "pending")

    const totalPending = pendingEarnings?.reduce((sum, e) => sum + (e.net_amount || 0), 0) || 0

    if (totalPending < minPayout) {
      return Response.json(
        { error: `Minimum payout is $${minPayout}. Current balance: $${totalPending}` },
        { status: 400 }
      )
    }

    // Update all pending earnings to processing
    const earningIds = pendingEarnings?.map((e) => e.id) || []

    for (const id of earningIds) {
      await supabase
        .from("vendor_earnings")
        .update({
          status: "processing",
          payout_date: new Date().toISOString(),
        })
        .eq("id", id)
    }

    return Response.json({
      success: true,
      message: `Payout of $${totalPending.toFixed(2)} has been initiated`,
      amount: totalPending,
    })
  } catch (error) {
    console.error("Payout request error:", error)
    return Response.json({ error: "Failed to process payout request" }, { status: 500 })
  }
}
