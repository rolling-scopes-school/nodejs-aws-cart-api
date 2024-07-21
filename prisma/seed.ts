import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import prisma from './db';

// const customers = [
//   {
//     id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
//     name: 'Delba de Oliveira',
//     email: 'delba@oliveira.com',
//     image_url: '/customers/delba-de-oliveira.png',
//   },
//   {
//     id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
//     name: 'Lee Robinson',
//     email: 'lee@robinson.com',
//     image_url: '/customers/lee-robinson.png',
//   },
//   {
//     id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
//     name: 'Hector Simpson',
//     email: 'hector@simpson.com',
//     image_url: '/customers/hector-simpson.png',
//   },
//   {
//     id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
//     name: 'Steven Tey',
//     email: 'steven@tey.com',
//     image_url: '/customers/steven-tey.png',
//   },
//   {
//     id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
//     name: 'Steph Dietz',
//     email: 'steph@dietz.com',
//     image_url: '/customers/steph-dietz.png',
//   },
//   {
//     id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
//     name: 'Michael Novotny',
//     email: 'michael@novotny.com',
//     image_url: '/customers/michael-novotny.png',
//   },
//   {
//     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//     name: 'Evil Rabbit',
//     email: 'evil@rabbit.com',
//     image_url: '/customers/evil-rabbit.png',
//   },
//   {
//     id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
//     name: 'Emil Kowalski',
//     email: 'emil@kowalski.com',
//     image_url: '/customers/emil-kowalski.png',
//   },
//   {
//     id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
//     name: 'Amy Burns',
//     email: 'amy@burns.com',
//     image_url: '/customers/amy-burns.png',
//   },
//   {
//     id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
//     name: 'Balazs Orban',
//     email: 'balazs@orban.com',
//     image_url: '/customers/balazs-orban.png',
//   },
// ];

// enum InvoiceStatus {
//   pending,
//   paid,
// }

// const revenue = [
//   { month: 'Jan', revenue: 2000 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2300 },
//   { month: 'Jun', revenue: 3200 },
//   { month: 'Jul', revenue: 3500 },
//   { month: 'Aug', revenue: 3700 },
//   { month: 'Sep', revenue: 2500 },
//   { month: 'Oct', revenue: 2800 },
//   { month: 'Nov', revenue: 3000 },
//   { month: 'Dec', revenue: 4800 },
// ];

// async function seedUsers(
//   client: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
// ) {
//   const users = [
//     {
//       id: '410544b2-4001-4271-9855-fec4b6a6442a',
//       name: 'User',
//       email: 'user@nextmail.com',
//       password: '123456',
//     },
//   ];

//   await client.user.deleteMany();

//   const insertedUsers = await client.user.createMany({
//     data: users,
//   });

//   console.log(`Seeded ${users.length} users`);

//   return {
//     users: insertedUsers,
//   };
// }

// async function seedCustomers(
//   client: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
// ) {
//   await client.invoice.deleteMany();
//   await client.customer.deleteMany();

//   const insertedCustomers = await client.customer.createMany({
//     data: customers,
//   });

//   console.log(`Seeded ${customers.length} customers`);

//   return {
//     users: insertedCustomers,
//   };
// }

// async function seedInvoices(
//   client: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
// ) {
//   await client.invoice.deleteMany();

//   const inserted = await client.invoice.createMany({
//     data: [
//       {
//         customer_id: customers[0].id,
//         amount: 15795,
//         status: 'PENDING',
//         date: '2022-12-06',
//       },
//       {
//         customer_id: customers[1].id,
//         amount: 20348,
//         status: 'PENDING',
//         date: '2022-11-14',
//       },
//       {
//         customer_id: customers[4].id,
//         amount: 3040,
//         status: 'PAID',
//         date: '2022-10-29',
//       },
//       {
//         customer_id: customers[3].id,
//         amount: 44800,
//         status: 'PAID',
//         date: '2023-09-10',
//       },
//       {
//         customer_id: customers[5].id,
//         amount: 34577,
//         status: 'PENDING',
//         date: '2023-08-05',
//       },
//       {
//         customer_id: customers[7].id,
//         amount: 54246,
//         status: 'PENDING',
//         date: '2023-07-16',
//       },
//       {
//         customer_id: customers[6].id,
//         amount: 666,
//         status: 'PENDING',
//         date: '2023-06-27',
//       },
//       {
//         customer_id: customers[3].id,
//         amount: 32545,
//         status: 'PAID',
//         date: '2023-06-09',
//       },
//       {
//         customer_id: customers[4].id,
//         amount: 1250,
//         status: 'PAID',
//         date: '2023-06-17',
//       },
//       {
//         customer_id: customers[5].id,
//         amount: 8546,
//         status: 'PAID',
//         date: '2023-06-07',
//       },client.user.deleteMany
//       {
//         customer_id: customers[1].id,
//         amount: 500,
//         status: 'PAID',
//         date: '2023-08-19',
//       },
//       {
//         customer_id: customers[5].id,
//         amount: 8945,
//         status: 'PAID',
//         date: '2023-06-03',
//       },
//       {
//         customer_id: customers[2].id,
//         amount: 8945,
//         status: 'PAID',
//         date: '2023-06-18',
//       },
//       {
//         customer_id: customers[0].id,
//         amount: 8945,
//         status: 'PAID',
//         date: '2023-10-04',
//       },
//       {
//         customer_id: customers[2].id,
//         amount: 1000,
//         status: 'PAID',
//         date: '2022-06-05',
//       },
//     ],
//   });

//   console.log(`Seeded x invoices`);

//   return {
//     invoices: inserted,
//   };
// }
// async function seedRevenue(
//   client: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
// ) {
//   await client.revenue.deleteMany();

//   const insertedRevenue = await client.revenue.createMany({
//     data: revenue,
//   });

//   console.log(`Seeded ${revenue.length} revenue`);

//   return {
//     revenue: insertedRevenue,
//   };
// }

async function main() {
  // await seedUsers(prisma);
  // await seedCustomers(prisma);
  // await seedInvoices(prisma);
  // await seedRevenue(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });
