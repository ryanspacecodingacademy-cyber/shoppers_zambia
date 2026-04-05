-- Create admin_settings table for platform configuration
CREATE TABLE IF NOT EXISTS admin_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_email VARCHAR(255) UNIQUE NOT NULL,
  platform_name VARCHAR(255) DEFAULT 'Shoppers Africa Vendors Ltd',
  support_phone_1 VARCHAR(20),
  support_phone_2 VARCHAR(20),
  commission_rate DECIMAL(5, 2) DEFAULT 15.00,
  min_payout_amount DECIMAL(10, 2) DEFAULT 50.00,
  platform_country VARCHAR(100) DEFAULT 'Zambia',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add RLS policies for admin settings
ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow read admin settings to authenticated users" ON admin_settings;
DROP POLICY IF EXISTS "Allow admin settings inserts for authenticated admin" ON admin_settings;
DROP POLICY IF EXISTS "Only admin can update settings" ON admin_settings;

CREATE POLICY "Allow read admin settings to authenticated users" 
  ON admin_settings FOR SELECT 
  USING (true);

CREATE POLICY "Allow admin settings inserts for authenticated admin" 
  ON admin_settings FOR INSERT 
  WITH CHECK (auth.jwt() ->> 'email' = admin_email);

CREATE POLICY "Only admin can update settings" 
  ON admin_settings FOR UPDATE 
  USING (auth.jwt() ->> 'email' = admin_email);

-- Create admin_access table to track admin users
CREATE TABLE IF NOT EXISTS admin_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  admin_email VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'super_admin',
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id)
);

ALTER TABLE admin_access ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Only admin can view admin access" ON admin_access;

CREATE POLICY "Only admin can view admin access" 
  ON admin_access FOR SELECT 
  USING (auth.jwt() ->> 'email' IN (SELECT admin_email FROM admin_settings));
