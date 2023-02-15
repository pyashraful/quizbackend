import prisma from './db';

async function main(): Promise<void> {
  // await prisma.user.deleteMany({});
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     Posts: {
  //       create: [
  //         {
  //           title: 'this is 1st post',
  //         },
  //         {
  //           title: 'this is 2nd post',
  //         },
  //         {
  //           title: 'this is 3rd post',
  //         },
  //       ],
  //     },
  //   },
  // });

  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    select: {
      name: true,
      Posts: {
        select: {
          title: true,
        },
      },
    },
  });

  console.log(user);
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
