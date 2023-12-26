--CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO carts (user_id, created_at, updated_at, status)
VALUES
(uuid_generate_v4(), current_date, current_date, 'OPEN'),
    (uuid_generate_v4(), current_date, current_date, 'ORDERED');

INSERT INTO cart_items (cart_id, product_id, count)
VALUES
((SELECT id FROM carts LIMIT 1), uuid_generate_v4(), 5),
((SELECT id FROM carts LIMIT 1), uuid_generate_v4(), 2);
