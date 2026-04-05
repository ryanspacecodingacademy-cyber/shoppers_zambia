import { supabaseServer } from "@/lib/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { userId, email, fullName, phone, role } = await request.json()

    if (!userId || !email || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (!supabaseServer) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Insert user profile with service role key (bypasses RLS)
    const { error } = await supabaseServer.from("users").insert([
      {
        id: userId,
        email,
        full_name: fullName || "",
        phone: phone || "",
        role,
        is_active: true,
      },
    ])

    if (error) {
      return NextResponse.json(
        { error: `Failed to create user profile: ${error.message}` },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An error occurred" },
      { status: 500 }
    )
  }
}
