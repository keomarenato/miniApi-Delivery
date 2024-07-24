import { prisma } from "../../../../database/prismaClient";


export class FindAllDeliveriesmanUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_client
      },
      select: {
        Deliveries: true,
        id: true,
        username: true
      }
    })

    return deliveries
  }
}