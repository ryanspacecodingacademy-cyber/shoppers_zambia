-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE products_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_earnings ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_settings ENABLE ROW LEVEL SECURITY;

-- Users table policies
DROP POLICY IF EXISTS "Users can view their own profile" ON users;
DROP POLICY IF EXISTS "Admins can view all users" ON users;
DROP POLICY IF EXISTS "Users can create their own profile" ON users;

CREATE POLICY "Users can view their own profile"
  ON users FOR SELECT
  USING (auth.uid()::text = id::text);

CREATE POLICY "Admins can view all users"
  ON users FOR SELECT
  USING (current_setting('request.jwt.claims.role', true) = 'admin');

CREATE POLICY "Users can create their own profile"
  ON users FOR INSERT
  WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Users can update their own profile"
  ON users FOR UPDATE
  USING (auth.uid()::text = id::text)
  WITH CHECK (auth.uid()::text = id::text);

-- Vendors table policies
DROP POLICY IF EXISTS "Anyone can view approved vendors" ON vendors;
DROP POLICY IF EXISTS "Vendors can view their own profile" ON vendors;
DROP POLICY IF EXISTS "Vendors can update their own profile" ON vendors;
DROP POLICY IF EXISTS "Admins can manage all vendors" ON vendors;
DROP POLICY IF EXISTS "Vendors can create their own profile" ON vendors;

CREATE POLICY "Anyone can view approved vendors"
  ON vendors FOR SELECT
  USING (
    status = 'approved' OR 
    current_setting('request.jwt.claims.role', true) = 'admin'
  );

CREATE POLICY "Vendors can view their own profile"
  ON vendors FOR SELECT
  USING (user_id = auth.uid()::uuid);

CREATE POLICY "Vendors can create their own profile"
  ON vendors FOR INSERT
  WITH CHECK (user_id = auth.uid()::uuid);

CREATE POLICY "Vendors can update their own profile"
  ON vendors FOR UPDATE
  USING (user_id = auth.uid()::uuid);

CREATE POLICY "Admins can manage all vendors"
  ON vendors FOR ALL
  USING (current_setting('request.jwt.claims.role', true) = 'admin');

-- Stores table policies
DROP POLICY IF EXISTS "Anyone can view active stores" ON stores;
DROP POLICY IF EXISTS "Vendors can view their own store" ON stores;
DROP POLICY IF EXISTS "Vendors can create stores" ON stores;
DROP POLICY IF EXISTS "Vendors can update their own store" ON stores;

CREATE POLICY "Anyone can view active stores"
  ON stores FOR SELECT
  USING (is_active = true);

CREATE POLICY "Vendors can view their own store"
  ON stores FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM vendors v WHERE v.id = vendor_id AND v.user_id = auth.uid()::uuid
    )
  );

CREATE POLICY "Vendors can create stores"
  ON stores FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM vendors v WHERE v.id = vendor_id AND v.user_id = auth.uid()::uuid
    )
  );

CREATE POLICY "Vendors can update their own store"
  ON stores FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM vendors v WHERE v.id = vendor_id AND v.user_id = auth.uid()::uuid
    )
  );

-- Products table policies
DROP POLICY IF EXISTS "Anyone can view active approved products" ON products_v2;
DROP POLICY IF EXISTS "Vendors can view their own products" ON products_v2;
DROP POLICY IF EXISTS "Vendors can create products" ON products_v2;
DROP POLICY IF EXISTS "Vendors can update their own products" ON products_v2;
DROP POLICY IF EXISTS "Admins can manage all products" ON products_v2;

CREATE POLICY "Anyone can view active approved products"
  ON products_v2 FOR SELECT
  USING (status = 'active' AND is_approved = true);

CREATE POLICY "Vendors can view their own products"
  ON products_v2 FOR SELECT
  USING (vendor_id = (SELECT id FROM vendors WHERE user_id = auth.uid()::uuid));

CREATE POLICY "Vendors can create products"
  ON products_v2 FOR INSERT
  WITH CHECK (vendor_id = (SELECT id FROM vendors WHERE user_id = auth.uid()::uuid));

CREATE POLICY "Vendors can update their own products"
  ON products_v2 FOR UPDATE
  USING (vendor_id = (SELECT id FROM vendors WHERE user_id = auth.uid()::uuid));

CREATE POLICY "Admins can manage all products"
  ON products_v2 FOR ALL
  USING (current_setting('request.jwt.claims.role', true) = 'admin');

-- Orders table policies
DROP POLICY IF EXISTS "Customers can view their own orders" ON orders;
DROP POLICY IF EXISTS "Vendors can view their own orders" ON orders;
DROP POLICY IF EXISTS "Admins can view all orders" ON orders;
DROP POLICY IF EXISTS "Vendors can update their own orders" ON orders;

CREATE POLICY "Customers can view their own orders"
  ON orders FOR SELECT
  USING (customer_id = auth.uid()::uuid);

CREATE POLICY "Vendors can view their own orders"
  ON orders FOR SELECT
  USING (vendor_id = (SELECT id FROM vendors WHERE user_id = auth.uid()::uuid));

CREATE POLICY "Admins can view all orders"
  ON orders FOR SELECT
  USING (current_setting('request.jwt.claims.role', true) = 'admin');

CREATE POLICY "Vendors can update their own orders"
  ON orders FOR UPDATE
  USING (vendor_id = (SELECT id FROM vendors WHERE user_id = auth.uid()::uuid));

-- Order items policies
DROP POLICY IF EXISTS "Customers can view their order items" ON order_items;
DROP POLICY IF EXISTS "Vendors can view their order items" ON order_items;

CREATE POLICY "Customers can view their order items"
  ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders o WHERE o.id = order_id AND o.customer_id = auth.uid()::uuid
    )
  );

CREATE POLICY "Vendors can view their order items"
  ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders o 
      WHERE o.id = order_id 
      AND o.vendor_id = (SELECT id FROM vendors WHERE user_id = auth.uid()::uuid)
    )
  );

-- Vendor earnings policies
DROP POLICY IF EXISTS "Vendors can view their earnings" ON vendor_earnings;
DROP POLICY IF EXISTS "Admins can manage all earnings" ON vendor_earnings;

CREATE POLICY "Vendors can view their earnings"
  ON vendor_earnings FOR SELECT
  USING (vendor_id = (SELECT id FROM vendors WHERE user_id = auth.uid()::uuid));

CREATE POLICY "Admins can manage all earnings"
  ON vendor_earnings FOR ALL
  USING (current_setting('request.jwt.claims.role', true) = 'admin');

-- Analytics policies
DROP POLICY IF EXISTS "Vendors can view their analytics" ON analytics;
DROP POLICY IF EXISTS "Admins can view all analytics" ON analytics;

CREATE POLICY "Vendors can view their analytics"
  ON analytics FOR SELECT
  USING (vendor_id = (SELECT id FROM vendors WHERE user_id = auth.uid()::uuid));

CREATE POLICY "Admins can view all analytics"
  ON analytics FOR SELECT
  USING (current_setting('request.jwt.claims.role', true) = 'admin');

-- Platform settings policies
DROP POLICY IF EXISTS "Admins can manage platform settings" ON platform_settings;
DROP POLICY IF EXISTS "Everyone can view platform settings" ON platform_settings;

CREATE POLICY "Admins can manage platform settings"
  ON platform_settings FOR ALL
  USING (current_setting('request.jwt.claims.role', true) = 'admin');

CREATE POLICY "Everyone can view platform settings"
  ON platform_settings FOR SELECT
  USING (true);
