insert into carts (user_id, created_at, updated_at, status) values
(uuid_generate_v4(), '2024-07-01', '2024-07-01', 'OPEN'),
(uuid_generate_v4(), '2024-07-02', '2024-07-02', 'ORDERED'),
(uuid_generate_v4(), '2024-07-03', '2024-07-03', 'OPEN');

insert into cart_items (cart_id, product_id, count) values 
	('27ab80ff-4f0e-4561-b55d-e10c776e6dc7', uuid_generate_v4(), 3 );