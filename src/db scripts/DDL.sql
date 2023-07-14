-- Aliaksei's not-so-black market data definer

-- DDL scripts

-- Task 8

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
	
CREATE TABLE IF NOT EXISTS users (
	id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	email VARCHAR(100),
	"password" VARCHAR(100) NOT NULL,
	CONSTRAINT email_check CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$')
);

CREATE TABLE IF NOT EXISTS carts (
	id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_id uuid NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	status VARCHAR(7) DEFAULT 'OPEN',
	CONSTRAINT open_or_closed CHECK (status IN ('OPEN', 'ORDERED')),
	CONSTRAINT FK_carts_users FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS cart_items (
	cart_id uuid NOT NULL DEFAULT uuid_generate_v4(),
	product_id uuid,
	"count" INTEGER, 
	CONSTRAINT FK_cart_items_carts FOREIGN KEY (cart_id) REFERENCES carts (id),
	CONSTRAINT FK_cart_items_products FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE IF NOT EXISTS orders (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	cart_id uuid NOT NULL,
	user_id uuid,
	payment JSON,
	delivery JSON,
	"comments" VARCHAR(1000),
	status VARCHAR(7) DEFAULT 'OPEN',
	total INTEGER,
	CONSTRAINT open_or_closed CHECK (status IN ('OPEN', 'ORDERED')),
	CONSTRAINT FK_orders_carts FOREIGN KEY (cart_id) REFERENCES carts (id)
);

-- Create trigger to set updated_at attribute on carts table update:

CREATE OR REPLACE FUNCTION last_updated() RETURNS TRIGGER
AS $update_trigger$
BEGIN
	UPDATE carts 
	SET updated_at = NOW()
	WHERE id = NEW.cart_id; -- NEW is a to-be-inserted row
	RETURN NEW; -- this function returns it updated with a new value for updated_at column.
END $update_trigger$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS last_updated ON cart_items; -- debugging/reusability
CREATE TRIGGER last_updated 
BEFORE UPDATE OR INSERT ON cart_items FOR EACH ROW EXECUTE PROCEDURE last_updated();


-- Create snapshot table of cart & items & products jointable

DROP TABLE IF EXISTS carts_full;

CREATE TABLE IF NOT EXISTS carts_full AS (
	SELECT c.*, ci.product_id, p.title, p.description, p.price, ci.count  
	FROM carts c
	INNER JOIN cart_items ci ON c.id = ci.cart_id
	INNER JOIN products p ON p.id = ci.product_id
);

