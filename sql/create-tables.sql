DROP TYPE IF EXISTS statuses;
CREATE TYPE statuses AS ENUM ('OPEN', 'ORDERED');
CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL
);

CREATE TABLE stock (
    product_id UUID REFERENCES products(id) NOT NULL,
    count DECIMAL(10, 2)
)

CREATE TABLE carts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    status statuses NOT NULL
);

CREATE TABLE cart_items (
    cart_id UUID REFERENCES carts(id),
    product_id UUID REFERENCES products(id),
    count INTEGER,
    PRIMARY KEY (cart_id, product_id)
);

CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    cart_id UUID REFERENCES carts(id),
    payment JSON,
    delivery JSON,
    comments TEXT,
    status VARCHAR(64),
    status_history JSON,
    total NUMERIC
);



