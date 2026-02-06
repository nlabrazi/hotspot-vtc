import { PrismaClient, Role, SubscriptionStatus } from "@prisma/client"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcryptjs"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("🌱 Seeding HotspotVTC...")

  await prisma.subscription.deleteMany()
  await prisma.user.deleteMany()

  const adminHash = await bcrypt.hash("adminpass", 10)
  const subHash = await bcrypt.hash("subpass", 10)
  const freeHash = await bcrypt.hash("freepass", 10)

  const admin = await prisma.user.create({
    data: {
      email: "admin@hotspotvtc.dev",
      passwordHash: adminHash,
      role: Role.ADMIN,
    },
  })

  const subscriber = await prisma.user.create({
    data: {
      email: "sub@hotspotvtc.dev",
      passwordHash: subHash,
      role: Role.DRIVER,
      subscription: {
        create: {
          status: SubscriptionStatus.ACTIVE,
          startsAt: new Date(),
        },
      },
    },
    include: { subscription: true },
  })

  const free = await prisma.user.create({
    data: {
      email: "free@hotspotvtc.dev",
      passwordHash: freeHash,
      role: Role.DRIVER,
      subscription: {
        create: { status: SubscriptionStatus.INACTIVE },
      },
    },
    include: { subscription: true },
  })

  console.log("✅ Seed done")
  console.log("admin:", admin.email)
  console.log("subscriber:", subscriber.email, subscriber.subscription.status)
  console.log("free:", free.email, free.subscription.status)
}

main()
	.catch((e) => {
		console.error("❌ Une erreur est survenue pendant le script de seed :", e)
		process.exit(1)
  })
	.finally(async () => {
		console.log("🔌 Déconnexion de Prisma...")
		await prisma.$disconnect()
		console.log("✅ Déconnexion Prisma effectuée.")
  })
