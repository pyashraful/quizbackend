import prisma from './db';

const userAndPosts = prisma.user.createMany({
  data: {
    name: 'ashraful',
    post: {
      create: {
        title: 'title 1',
      },
    },
  },
});

async function main() {
  // ... you will write your Prisma Client queries here

  const userAndPosts = prisma.user.createMany({
    data: {
      name: 'ashraful',
      post: {
        create: {
          title: 'title 1',
        },
      },
    },
  });

  async function main() {
    await prisma.user.create({
      data: {
        name: 'Alice',
        posts: {
          create: { title: 'Hello World' },
        },
        profile: {
          create: { bio: 'I like turtles' },
        },
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    console.dir(allUsers, { depth: null });
  }
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
