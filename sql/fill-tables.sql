INSERT INTO users (name, email, password)
VALUES
    ('John Doe', 'john@example.com', 'password123'),
    ('Jane Smith', 'jane@example.com', 'password456');


INSERT INTO products (title, description, price, count)
VALUES
    ('Laptop', 'High-performance laptop with SSD', 999.99),
    ('Smartphone', 'Latest smartphone model', 799.99),
    ('Laptop', 'High-performance laptop with SSD', 999.99),
    ('Smartphone', 'Latest smartphone model', 799.99),
    ('Laptop', 'High-performance laptop with SSD', 999.99),
    ('Smartphone', 'Latest smartphone model', 799.99),
    ('Laptop', 'High-performance laptop with SSD', 999.99),
    ('Smartphone', 'Latest smartphone model', 799.99);

INSERT INTO stock (product_id, count)
VALUES
    ((SELECT id FROM products LIMIT 1), 10),
    ((SELECT id FROM products LIMIT 1), 100),
    ((SELECT id FROM products LIMIT 1), 1000),
    ((SELECT id FROM products LIMIT 1), 20),
    ((SELECT id FROM products LIMIT 1), 15),
    ((SELECT id FROM products LIMIT 1), 25),
    ((SELECT id FROM products LIMIT 1), 30),
    ((SELECT id FROM products OFFSET 1 LIMIT 1), 20);

INSERT INTO carts (user_id, created_at, updated_at, status)
VALUES
    ((SELECT id FROM users LIMIT 1), CURRENT_DATE, CURRENT_DATE, 'OPEN'),
    ((SELECT id FROM users OFFSET 1 LIMIT 1), CURRENT_DATE, CURRENT_DATE, 'OPEN');


INSERT INTO cart_items (cart_id, product_id, count)
VALUES
    ((SELECT id FROM carts LIMIT 1), (SELECT id FROM products LIMIT 1), 2),
    ((SELECT id FROM carts LIMIT 1), (SELECT id FROM products OFFSET 1 LIMIT 1), 1),
    ((SELECT id FROM carts OFFSET 1 LIMIT 1), (SELECT id FROM products OFFSET 1 LIMIT 1), 3);


INSERT INTO orders (user_id, cart_id, payment, delivery, comments, status, total)
VALUES
    ((SELECT id FROM users LIMIT 1), (SELECT id FROM carts LIMIT 1), '{"method": "Credit Card", "amount": 2199.97}', '{"address": "123 Main St"}', 'No special instructions', 'PROCESSING', 2199.97),
    ((SELECT id FROM users OFFSET 1 LIMIT 1), (SELECT id FROM carts OFFSET 1 LIMIT 1), '{"method": "PayPal", "amount": 2399.97}', '{"address": "456 Elm St"}', 'Delivery required by Friday', 'PROCESSING', 2399.97);
