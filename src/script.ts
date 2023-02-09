import prisma from './db';

async function main(): Promise<void> {
  await prisma.user.deleteMany({});
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  });
  console.log(user);

  const user2 = await prisma.user.create({
    data: {
      email: 'pg@gmail.com',
    },
  });
  console.log('🚀 ~ file: script.ts:20 ~ main ~ user2', user2);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
