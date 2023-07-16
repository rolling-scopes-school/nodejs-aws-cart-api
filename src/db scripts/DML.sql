-- Aliaksei's not-so-black market data filler

-- Task 8
-- Filling cartApi tables

-- Create users function / DML

DROP FUNCTION IF EXISTS create_user(VARCHAR, VARCHAR) -- debugging purposes

CREATE OR REPLACE FUNCTION create_user(
	IN user_name VARCHAR, pass VARCHAR
) RETURNS VOID
AS $$
BEGIN
	IF NOT EXISTS (SELECT 1 FROM users WHERE UPPER("name") = UPPER(user_name)) THEN
		EXECUTE 
			'INSERT INTO users ("name", password)
				SELECT $1, $2 WHERE NOT EXISTS (SELECT * FROM users WHERE UPPER("name") = UPPER($1))
			 RETURNING *;' USING user_name, pass;
	ELSE 
		RAISE EXCEPTION '% already exists in the database!', UPPER(user_name);
	END IF;
END;
$$ LANGUAGE plpgsql VOLATILE;

-- Just call a function with select, pass user_name & password and voila.
SELECT * FROM create_user('All Seeing Eye', 'IVE_SEEN_FOOTAGE');
SELECT * FROM users;

-- Populate carts & carts items
-- Carts are created upon adding the first item, after then it gets updated with the new ones.

DROP FUNCTION IF EXISTS create_cart(UUID) -- debugging purposes

CREATE OR REPLACE FUNCTION create_cart(
	IN userid UUID
) RETURNS SETOF carts
AS $$
DECLARE
id_tmp uuid;
BEGIN
	IF NOT EXISTS (SELECT 1 FROM carts WHERE user_id = $1 AND status = 'OPEN') THEN
		EXECUTE 
			'INSERT INTO carts (user_id)
				SELECT $1 WHERE NOT EXISTS (SELECT * FROM carts WHERE user_id = $1 AND status = ' || quote_literal('OPEN') || ')
			 RETURNING id;' INTO id_tmp USING userid;
	ELSE 
		RAISE EXCEPTION 'cart already exists in the database!';
	END IF;
	RETURN QUERY
		SELECT * FROM carts WHERE id = id_tmp;
END;
$$ LANGUAGE plpgsql VOLATILE;

SELECT * FROM users;
DELETE FROM users WHERE name = 'december-man';
SELECT * FROM create_cart('520e5a42-db61-4a36-8534-2af21f9107b2');
SELECT * FROM create_cart('538c36fd-778b-4319-bd29-8432fcfc8074');
SELECT * FROM cart_items;
SELECT * FROM carts;

-- Add elements to the cart:

DROP FUNCTION IF EXISTS cart_add(UUID, UUID, INTEGER) -- debugging purposes

CREATE OR REPLACE FUNCTION cart_add(
	IN cartid UUID, product UUID, "count" INTEGER
) RETURNS SETOF cart_items
AS $$
BEGIN
	IF NOT EXISTS (SELECT 1 FROM cart_items WHERE cart_id = $1 AND product_id = $2) THEN
		EXECUTE 
			'INSERT INTO cart_items (cart_id, product_id, count)
				SELECT $1, $2, $3 WHERE NOT EXISTS (SELECT product_id FROM cart_items WHERE cart_id = $1 AND product_id = $2);'
			USING cartid, product, "count";
	ELSE 
		EXECUTE
		'UPDATE cart_items SET count = (SELECT count FROM cart_items WHERE cart_id = $1 AND product_id = $2) + 1 
			WHERE cart_id = $1 AND product_id = $2'
			USING cartid, product;
	END IF;
	RETURN QUERY
		SELECT * FROM cart_items WHERE cart_id = $1;
END;
$$ LANGUAGE plpgsql VOLATILE;

SELECT * FROM products;
SELECT * FROM create_cart('4822e637-1d30-40d3-b66b-9df761f1ac23');
SELECT * FROM cart_add('cdba7e21-548b-4423-9061-09d5bb500ee0', '674d9cab-fe23-46cc-a95a-c584287190db', 1);
SELECT * FROM cart_add('031fe6f2-50d3-46fe-bc0a-e76fa11c80d2', '674d9cab-fe23-46cc-a95a-c584287190db', 1);
SELECT * FROM cart_add('cdba7e21-548b-4423-9061-09d5bb500ee0', 'd7efb68c-5228-4ec9-af29-10574ff80ade', 10);

-- Create order

DROP FUNCTION IF EXISTS create_order(UUID, UUID, JSON, JSON, VARCHAR, INTEGER) -- debugging purposes

CREATE OR REPLACE FUNCTION create_order(
	IN cartid UUID, userid UUID, pmt JSON, dlv JSON, cmt VARCHAR, total INTEGER
) RETURNS VOID
AS $$
BEGIN
	IF NOT EXISTS (SELECT 1 FROM orders WHERE cart_id = $1) THEN
		EXECUTE 
			'INSERT INTO orders (cart_id, user_id, payment, delivery, comments, total)
				SELECT $1, $2, $3, $4, $5, $6 WHERE NOT EXISTS (SELECT cart_id FROM orders WHERE cart_id = $1);' 
		USING cartid, userid, pmt, dlv, cmt, total;
	ELSE 
		RAISE EXCEPTION 'Orders in this cart are already closed, please contact support';
	END IF;
END;
$$ LANGUAGE plpgsql VOLATILE;

SELECT * FROM create_order('2b9979a5-00b6-45fe-8f84-ca9e87d2a2e0', 'b66abae6-b65a-4f6f-ac0c-cf86af3176f9', 
	'{"type": "online", "address": "10 Downing Street", "credit_card": "8888 8888 8888 8888"}',
	'{"type": "courier", "adress": "10 Downing Street"}', 'My favorite color is oh my god b#tch', 700);

-- Update cart status TODO


