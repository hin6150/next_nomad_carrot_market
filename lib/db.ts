import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function test() {
  const user = await db.user.create({
    data: {
      username: 'user01',
      phone: '01012341234',
    },
  })
  console.log(
    db.user.create({
      data: {
        username: 'user01',
        phone: '01012341234',
      },
    }),
  )
}

export default db
