drop table if exists public.carts;

drop type if exists order_status;

CREATE TYPE order_status AS ENUM ('OPEN', 'ORDERED');

create table public.carts (
	id uuid primary key,
	user_id uuid not null,
	created_at date not null,
	updated_at date not null,
	status order_status
);


drop table if exists public.cart_items;

create table public.cart_items (
	cart_id uuid not null,
	product_id uuid not null,
	count integer
);


insert into public.carts (id, user_id, created_at, updated_at, status)
values (gen_random_uuid(), gen_random_uuid(), current_date, current_date, 'OPEN'),
	   (gen_random_uuid(), gen_random_uuid(), current_date, current_date, 'ORDERED')
;


insert into public.cart_items (cart_id, product_id, count)
select id, gen_random_uuid(), 10
  from public.carts
;


grant usage on schema public to test;

grant select, insert, update, delete on table public.carts to test;

grant select, insert, update, delete on table public.cart_items to test;
