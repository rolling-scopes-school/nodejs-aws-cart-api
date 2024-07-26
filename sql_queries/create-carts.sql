create table carts (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid not null,
    foreign key ("user_id") references "users" ("id"),
    created_at date not null,
    updated_at date not null,
    status status_type 
)

create table cart_items (
	cart_id uuid not null,
	product_id uuid not null,
	foreign key ("cart_id") references "carts" ("id"),
    count integer not null
)

create type status_type as enum('OPEN', 'ORDERED');