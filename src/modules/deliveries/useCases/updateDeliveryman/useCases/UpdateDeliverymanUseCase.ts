import { prisma } from "../../../../../database/prismaClient"


interface IupdateDeliveeryman {
  id_velivery: string
  id_deliveryman: string
}

export class UpdateDeliverymanUseCase {
  async execute({ id_deliveryman, id_velivery }: IupdateDeliveeryman) {

    const result = await prisma.deliveries.update({
      where: {
        id: id_velivery
      },
      data: {
        id_deliveryman
      }
    })
    return result
  }
} 