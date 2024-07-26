create table users (
	id uuid primary key default uuid_generate_v4(),
	name text not null,
	email text,
	password text not null
)