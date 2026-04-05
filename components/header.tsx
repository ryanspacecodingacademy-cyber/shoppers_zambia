"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingCart, User, Menu, MapPin, ChevronDown, Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Health",
  "Sports & Outdoors",
  "Books & Media",
  "Toys & Games",
  "Automotive",
  "Groceries",
]

export function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [cartCount] = useState(3)
  const [user, setUser] = useState<{ email?: string | null } | null>(null)
  const [authError, setAuthError] = useState<string | null>(null)

  useEffect(() => {
    async function loadUser() {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) {
        setAuthError("Unable to load auth status.")
        return
      }
      setUser(user ? { email: user.email } : null)
    }

    loadUser()

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ? { email: session.user.email } : null)
    })

    return () => subscription.subscription?.unsubscribe()
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      setAuthError(error.message)
      return
    }
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-sm py-1.5 px-4 text-center">
        <span className="font-medium">Free delivery on orders over $50!</span>
        <span className="mx-2">|</span>
        <Link href="/deals" className="underline hover:no-underline">
          Shop Today&apos;s Deals
        </Link>
      </div>

      {/* Main header */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 py-3">
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-background hover:bg-background/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <User className="h-8 w-8" />
                    <span className="font-semibold">Hello, Sign in</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="p-4">
                  <h3 className="font-bold text-lg mb-3">Shop By Category</h3>
                  <ul className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <li key={category}>
                        <Link
                          href={`/category/${category.toLowerCase().replace(/ & /g, "-")}`}
                          className="block py-2 px-3 rounded-md hover:bg-muted transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-accent leading-tight">Shoppers</span>
                <span className="text-xs text-background/80 -mt-1">Africa Vendors Ltd</span>
              </div>
            </Link>

            {/* Delivery location */}
            <button className="hidden md:flex items-center gap-1 text-background/80 hover:text-background transition-colors">
              <MapPin className="h-5 w-5" />
              <div className="flex flex-col items-start text-xs">
                <span className="text-background/60">Deliver to</span>
                <span className="font-bold text-background">Lusaka, Zambia</span>
              </div>
            </button>

            {/* Search bar */}
            <div className="flex-1 max-w-3xl hidden sm:flex">
              <form onSubmit={handleSearch} className="flex w-full rounded-md overflow-hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      className="rounded-none rounded-l-md px-3 h-11 bg-muted text-foreground hover:bg-muted/80 border-r"
                    >
                      <span className="text-sm truncate max-w-[100px]">{selectedCategory}</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-accent/10" : ""}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Input
                  type="search"
                  placeholder="Search for products, brands and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 rounded-none border-0 h-11 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button type="submit" className="rounded-none rounded-r-md h-11 px-5 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Language selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden lg:flex items-center gap-1 text-background hover:bg-background/10 px-2">
                    <span className="text-lg">🇳🇬</span>
                    <span className="text-sm font-bold">EN</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>�🇲 English (Zambia)</DropdownMenuItem>
                  <DropdownMenuItem>🇳🇬 English (Nigeria)</DropdownMenuItem>
                  <DropdownMenuItem>🇬🇭 English (Ghana)</DropdownMenuItem>
                  <DropdownMenuItem>🇰🇪 English (Kenya)</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Account */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex flex-col items-start text-background hover:bg-background/10 px-2 h-auto py-1">
                    <span className="text-xs text-background/70">
                      {user ? `Signed in as ${user.email ?? "member"}` : "Hello, Sign in"}
                    </span>
                    <span className="text-sm font-bold flex items-center gap-1">
                      Account & Lists <ChevronDown className="h-3 w-3" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  {user ? (
                    <>
                      <div className="p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Signed in as</p>
                        <p className="font-semibold">{user.email}</p>
                      </div>
                      <DropdownMenuSeparator />
                      <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                          <h4 className="font-bold mb-2">Your Lists</h4>
                          <ul className="space-y-1 text-sm">
                            <li><Link href="/wishlist" className="hover:text-primary">Create a List</Link></li>
                            <li><Link href="/wishlist" className="hover:text-primary">Find a List</Link></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Your Account</h4>
                          <ul className="space-y-1 text-sm">
                            <li><Link href="/account" className="hover:text-primary">Account</Link></li>
                            <li><Link href="/orders" className="hover:text-primary">Orders</Link></li>
                            <li><Link href="/recommendations" className="hover:text-primary">Recommendations</Link></li>
                          </ul>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                        Logout
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <div className="p-4 text-center">
                        <Link href="/login" className="w-full inline-block">
                          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                            Sign In
                          </Button>
                        </Link>
                        <p className="text-sm mt-2 text-muted-foreground">
                          New customer?{" "}
                          <Link href="/register" className="text-primary hover:underline">
                            Start here
                          </Link>
                        </p>
                      </div>
                      <DropdownMenuSeparator />
                      <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                          <h4 className="font-bold mb-2">Your Lists</h4>
                          <ul className="space-y-1 text-sm">
                            <li><Link href="/wishlist" className="hover:text-primary">Create a List</Link></li>
                            <li><Link href="/wishlist" className="hover:text-primary">Find a List</Link></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Your Account</h4>
                          <ul className="space-y-1 text-sm">
                            <li><Link href="/account" className="hover:text-primary">Account</Link></li>
                            <li><Link href="/orders" className="hover:text-primary">Orders</Link></li>
                            <li><Link href="/recommendations" className="hover:text-primary">Recommendations</Link></li>
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Returns & Orders */}
              <Link href="/orders" className="hidden lg:flex flex-col items-start text-background hover:text-background/80 transition-colors px-2">
                <span className="text-xs text-background/70">Returns</span>
                <span className="text-sm font-bold">& Orders</span>
              </Link>

              {/* Wishlist */}
              <Button variant="ghost" className="hidden md:flex text-background hover:bg-background/10 px-2">
                <Heart className="h-6 w-6" />
              </Button>

              {/* Cart */}
              <Link href="/cart" className="flex items-end text-background hover:text-background/80 transition-colors">
                <div className="relative">
                  <ShoppingCart className="h-8 w-8" />
                  <Badge className="absolute -top-1 -right-1 h-5 min-w-[20px] flex items-center justify-center bg-accent text-accent-foreground text-xs font-bold px-1">
                    {cartCount}
                  </Badge>
                </div>
                <span className="font-bold text-sm hidden sm:block ml-1">Cart</span>
              </Link>
            </div>
          </div>

          {/* Mobile search */}
          <form onSubmit={handleSearch} className="sm:hidden pb-3">
            <div className="flex rounded-md overflow-hidden">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none rounded-l-md border-0 h-10"
              />
              <Button type="submit" className="rounded-none rounded-r-md h-10 px-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Category navigation */}
      <nav className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 whitespace-nowrap font-bold text-foreground hover:bg-primary/10">
              <Menu className="h-4 w-4" />
              All
            </Button>
            <Link href="/deals">
              <Button
                variant="ghost"
                size="sm"
                className="whitespace-nowrap text-foreground hover:bg-primary/10"
              >
                Today&apos;s Deals
              </Button>
            </Link>
            <Link href="/best-sellers">
              <Button
                variant="ghost"
                size="sm"
                className="whitespace-nowrap text-foreground hover:bg-primary/10"
              >
                Best Sellers
              </Button>
            </Link>
            <Link href="/new-arrivals">
              <Button
                variant="ghost"
                size="sm"
                className="whitespace-nowrap text-foreground hover:bg-primary/10"
              >
                New Arrivals
              </Button>
            </Link>
            {["Electronics", "Fashion", "Home", "Beauty", "Sports"].map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="whitespace-nowrap text-foreground hover:bg-primary/10"
                >
                  {category}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
