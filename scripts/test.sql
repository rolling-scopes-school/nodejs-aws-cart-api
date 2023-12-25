create extension if not exists "uuid-ossp";

CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  password TEXT NOT NULL
);

CREATE TABLE carts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NULL,
  status VARCHAR(10) DEFAULT 'OPEN' CHECK (status IN ('OPEN', 'ORDERED'))
);

CREATE TABLE cart_items (
  cart_id UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  product_id UUID NOT NULL,
  count INT,
  PRIMARY KEY (cart_id, product_id)
);

CREATE OR REPLACE FUNCTION update_cart_on_item_change()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE carts
  SET updated_at = NOW()
  WHERE id = NEW.cart_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER cart_item_change
AFTER INSERT OR UPDATE OR DELETE ON cart_items
FOR EACH ROW
EXECUTE FUNCTION update_cart_on_item_change();

CREATE OR REPLACE FUNCTION update_cart_on_status_change()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER cart_status_change
BEFORE UPDATE ON carts
FOR EACH ROW
WHEN (OLD.status IS DISTINCT FROM NEW.status)
EXECUTE FUNCTION update_cart_on_status_change();

CREATE TABLE orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  cart_id UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  payment JSON,
  delivery JSON,
  comments TEXT,
  status TEXT,
  total  INTEGER NOT NULL
);

-- only for data population proposes
CREATE TABLE products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL
);

-- Populate data

INSERT INTO users (name, email, password)
VALUES
  ('eductech', 'eductech@gmail.com', 'TEST_PASSWORD');

INSERT INTO products (id, title)
VALUES
  ('aa3fcfab-e9f8-4222-a9ab-cab5d3cca785', 'SAMSUNG TV QLED123YM');

INSERT INTO carts (user_id, status)
SELECT
  users.id,
  'ORDERED'
FROM users;

INSERT INTO cart_items (cart_id, product_id, count)
SELECT
  carts.id AS cart_id,
  products.id AS product_id,
  ceiling(random() * 10) AS count
FROM carts
JOIN users ON carts.user_id = users.id
JOIN products ON true;

INSERT INTO orders (user_id, cart_id, payment, delivery, comments, status, total)
SELECT
  users.id AS user_id,
  carts.id AS cart_id,
  '{"type": "crypto"}'::jsonb AS payment,
  '{"type": "post"}'::jsonb AS delivery,
  'no rush' AS comments,
  'on review' AS status,
  ceiling(random() * 500) AS total
FROM carts
JOIN users ON carts.user_id = users.id;
