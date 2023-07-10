import { Knex } from 'knex';
import * as path from 'path';
import * as fs from 'fs';

export async function seed(knex: Knex) {
  await knex('cart_items').del();
  await knex('carts').del();

  const cartsPath = path.join(__dirname, '../data/carts.json');
  const cartItemsPath = path.join(__dirname, '../data/cart_items.json');

  const cartsData = JSON.parse(fs.readFileSync(cartsPath, 'utf8'));
  const cartItemsData = JSON.parse(fs.readFileSync(cartItemsPath, 'utf8'));

  await knex('carts').insert(cartsData);
  await knex('cart_items').insert(cartItemsData);
}
