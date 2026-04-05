# Admin Panel Access Guide

## Platform Information
- **Platform Name:** Shoppers Zambia Vendors Ltd
- **Admin Email:** kachprehana99@gmail.com
- **Support Phone:** +260 76 408 6744
- **Support Email:** kachprehana99@gmail.com
- **Platform Country:** Zambia

## Local Setup
1. Create a `.env.local` file in the project root.
2. Add your Supabase credentials using `.env.example` as a template.
3. Run:
   - `pnpm install`
   - `pnpm dev`
4. Open the site at `http://localhost:3000`

## How to Access the Admin Panel

### Step 1: Initial Setup
1. Go to `/admin/init` on your platform.
2. Log in with your Supabase account (create one if needed).
3. Enter your admin email: `kachprehana99@gmail.com`
4. Enter support phone 1: `0764086744`
5. Click "Initialize Admin"
6. You'll be redirected to the admin dashboard.

### Step 2: Access the Dashboard
Once initialized, access the admin panel at:
- **Dashboard:** `/admin/dashboard`
- **Manage Vendors:** `/admin/vendors`
- **Moderate Products:** `/admin/products`
- **Manage Orders:** `/admin/orders`
- **Settings:** `/admin/settings`

## Admin Security Features

### Email-Based Access Control
- Only your registered email (`kachprehana99@gmail.com`) can access the admin panel.
- The system verifies your email during every admin session.
- If you use a different email, you'll be redirected to the home page.

### Authentication Requirement
- You must be logged in to access any admin page.
- If not logged in, you'll be redirected to `/login`.
- After login, the system verifies your email matches the admin email.

## What the Admin Panel Allows You To:

#### Dashboard
- View platform overview with key metrics.
- Track total vendors, orders, revenue, and pending approvals.

#### Manage Vendors (`/admin/vendors`)
- View vendor profiles.
- Approve or reject vendor registrations.
- Suspend or delete vendors.
- Filter vendors by status.

#### Moderate Products (`/admin/products`)
- Review products submitted by vendors.
- Approve or reject product listings.
- Ensure quality standards.

#### Manage Orders (`/admin/orders`)
- Track all orders on the platform.
- View order status and vendor fulfillment.
- Monitor order details and customer requests.

#### Settings (`/admin/settings`)
- Configure commission and payout settings.
- View the platform support contact details.

## Vendor Shop Setup

1. Visit `/vendor/register` to start a vendor account.
2. Complete the registration form with business details.
3. After registration, access the vendor dashboard at `/vendor/dashboard`.
4. Manage your inventory at `/vendor/products`.
5. Add new listings at `/vendor/products/add`.

## Troubleshooting

### "Access Denied" Error
- Confirm you're logged in with `kachprehana99@gmail.com`.
- Confirm admin initialization completed on `/admin/init`.

### Can't Find the Admin Panel
- Make sure you're logged in first.
- Visit `/admin/dashboard` directly.
- Or use the account menu and navigate to Admin Dashboard.

### Forgot Email/Password
- Use the login page's password recovery if available.
- Or create a new account and initialize admin again.

## Important Security Notes

1. Keep your login credentials secure.
2. Only the registered admin email can access protected pages.
3. Sessions are verified on every page load.
4. The site uses Supabase auth and database security policies.

## Platform Details

- **Currency:** ZMW (Zambian Kwacha)
- **Commission Rate:** 15% (configurable)
- **Minimum Payout:** $50 (configurable)
- **Support Phone:** +260 76 408 6744
- **Support Email:** kachprehana99@gmail.com

## Next Steps

1. Initialize the admin panel at `/admin/init`.
2. Review vendors at `/admin/vendors`.
3. Approve products at `/admin/products`.
4. Configure settings at `/admin/settings`.
5. Monitor orders at `/admin/orders`.
