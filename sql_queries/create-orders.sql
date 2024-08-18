
create table orders (
	id uuid primary key default uuid_generate_v4(),
   	user_id uuid not null,
   	cart_id uuid not null,
   	foreign key ("cart_id") references "carts" ("id"),
	foreign key ("user_id") references "users" ("id"),
   	payment json not null,
   	delivery json not null,
   	comments text,
   	status status_type,
   	total integer not null
)