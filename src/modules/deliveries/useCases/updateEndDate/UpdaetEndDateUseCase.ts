import { prisma } from "../../../../database/prismaClient"


interface IUpdateEndDate {
  id_velivery: string
  id_deliveryman: string
}

export class UpdateEndDateUseCase {
  async execute({ id_deliveryman, id_velivery }: IUpdateEndDate) {

    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_velivery,
        id_deliveryman
      },
      data: {
        end_at: new Date()
      }
    })
    return result
  }
} 