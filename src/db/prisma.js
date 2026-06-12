import "dotenv/config";
import { PrismaClient } from "@prisma/client"; // if this doesn't work , try another method which is in next line
// import { PrismaClient} from "../generated/prisma/client.js"
import { Prisma } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({adapter});
export default prisma;