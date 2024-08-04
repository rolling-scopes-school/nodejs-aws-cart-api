-- Create Cart Table
CREATE TABLE IF NOT EXISTS carts (
                                     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL CHECK (status IN ('OPEN', 'ORDERED'))
    );

-- Create Cart Items Table
CREATE TABLE IF NOT EXISTS cart_items (
                                          cart_id UUID REFERENCES carts(id),
    product_id UUID,
    count INTEGER NOT NULL CHECK (count > 0),
    PRIMARY KEY (cart_id, product_id)
    );

-- Create Orders Table
CREATE TABLE IF NOT EXISTS orders (
                                      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    cart_id UUID REFERENCES carts(id),
    payment JSON NOT NULL,
    delivery JSON NOT NULL,
    comments TEXT,
    status VARCHAR(20) NOT NULL CHECK (status IN ('ORDERED', 'SHIPPED', 'DELIVERED', 'CANCELLED')),
    total NUMERIC NOT NULL
    );

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
                                     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

-- Example of inserting data into users table
INSERT INTO users (username, email, password)
VALUES
    (gen_random_uuid(), 'testuser@example.com', 'securepassword');

-- Example of inserting data into orders table
INSERT INTO orders (user_id, cart_id, payment, delivery, comments, status, total)
VALUES
    (gen_random_uuid(), '2da3efde-b37a-4e1e-804a-4fc4b7099cb7', '{"method": "credit card"}', '{"address": "123 Main St"}', 'Please deliver after 5 PM', 'ORDERED', 100.00);

-- Insert Test Data into Carts
INSERT INTO carts (id, user_id, created_at, updated_at, status)
VALUES
    (gen_random_uuid(), gen_random_uuid(), NOW(), NOW(), 'OPEN'),
    (gen_random_uuid(), gen_random_uuid(), NOW(), NOW(), 'ORDERED');

-- Insert Test Data into Cart Items
INSERT INTO cart_items (cart_id, product_id, count)
VALUES
    ((SELECT id FROM carts WHERE status = 'OPEN' LIMIT 1), gen_random_uuid(), 2),
  ((SELECT id FROM carts WHERE status = 'OPEN' LIMIT 1), gen_random_uuid(), 1),
  ((SELECT id FROM carts WHERE status = 'ORDERED' LIMIT 1), gen_random_uuid(), 4);