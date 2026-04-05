import { supabase } from "@/lib/supabase"
import { getCurrentUser } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { cartItems, shippingAddress, paymentMethod } = body

    const user = await getCurrentUser()
    if (!user) {
      return Response.json({ error: "Not authenticated" }, { status: 401 })
    }

    const orders = []

    // Group items by vendor
    const itemsByVendor: { [key: string]: any[] } = {}

    for (const item of cartItems) {
      const { data: product } = await supabase
        .from("products_v2")
        .select("vendor_id")
        .eq("id", item.productId)
        .single()

      if (!product) continue

      if (!itemsByVendor[product.vendor_id]) {
        itemsByVendor[product.vendor_id] = []
      }

      itemsByVendor[product.vendor_id].push(item)
    }

    // Create an order for each vendor
    for (const [vendorId, items] of Object.entries(itemsByVendor)) {
      let totalAmount = 0
      const orderItems = []

      for (const item of items) {
        const { data: product } = await supabase
          .from("products_v2")
          .select("price")
          .eq("id", item.productId)
          .single()

        if (!product) continue

        const itemTotal = product.price * item.quantity
        totalAmount += itemTotal

        orderItems.push({
          product_id: item.productId,
          quantity: item.quantity,
          unit_price: product.price,
          total_price: itemTotal,
        })
      }

      const commissionPercent = 15
      const platformCommission = (totalAmount * commissionPercent) / 100
      const vendorAmount = totalAmount - platformCommission

      const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      // Create order
      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert([
          {
            order_number: orderNumber,
            customer_id: user.id,
            vendor_id: vendorId,
            total_amount: totalAmount,
            vendor_amount: vendorAmount,
            platform_commission: platformCommission,
            shipping_address: shippingAddress.address,
            shipping_city: shippingAddress.city,
            shipping_state: shippingAddress.state,
            shipping_country: shippingAddress.country,
            shipping_postal_code: shippingAddress.postalCode,
            payment_method: paymentMethod,
            status: "pending",
          },
        ])
        .select()

      if (orderError) {
        console.error("Error creating order:", orderError)
        continue
      }

      const orderId = orderData[0].id

      // Create order items
      for (const item of orderItems) {
        await supabase.from("order_items").insert([
          {
            order_id: orderId,
            product_id: item.product_id,
            quantity: item.quantity,
            unit_price: item.unit_price,
            total_price: item.total_price,
          },
        ])
      }

      // Create vendor earnings record
      await supabase.from("vendor_earnings").insert([
        {
          vendor_id: vendorId,
          order_id: orderId,
          amount: totalAmount,
          commission_percentage: commissionPercent,
          platform_fee: platformCommission,
          net_amount: vendorAmount,
          status: "pending",
        },
      ])

      orders.push({
        orderNumber,
        vendorId,
        totalAmount,
        vendorAmount,
        orderId,
      })
    }

    return Response.json({ success: true, orders })
  } catch (error) {
    console.error("Order creation error:", error)
    return Response.json({ error: "Failed to create orders" }, { status: 500 })
  }
}
