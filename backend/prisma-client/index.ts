import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
        prismaClientV1: PrismaClient;
    }
  }
}

let prismaClientV1: PrismaClient;

if (!global.prismaClientV1) {
  global.prismaClientV1 = new PrismaClient({
    log: ["info"],
  });
}
prismaClientV1 = global.prismaClientV1;

export default prismaClientV1;
