CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATE DATABASE cartdb;

CREATE TYPE StatusEnum AS ENUM ('OPEN', 'ORDERED');
CREATE TABLE carts
(
    id         UUID primary key default uuid_generate_v4(),
    user_id    UUID NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    status     StatusEnum NOT NULL
);

CREATE TABLE cart_items
(
    cart_id    UUID    NOT NULL,
    product_id UUID    NOT NULL,
    count      INTEGER NOT NULL CHECK (count > 0),
    FOREIGN KEY (cart_id) REFERENCES carts (id)
);
