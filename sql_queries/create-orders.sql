insert into orders (id, user_id, cart_id, payment, delivery, comments, status, total) values 
	( uuid_generate_v4(), '382cb243-1530-453f-9177-96c1bed60f8d', '6bd594cf-5acc-48e6-9340-0cf7ed711263', '{"type": "paypal"}', '{"type": "dhl", "address": "test address"}', 'test comment', 'OPEN', 25)
   