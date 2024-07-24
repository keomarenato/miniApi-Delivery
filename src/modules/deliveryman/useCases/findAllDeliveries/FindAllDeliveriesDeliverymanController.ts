import { FindAllDeliveriesmanUseCase } from './FindAllDeliveriesmanUseCase'
import { Request, Response } from 'express'

export class FindAllDeliveriesmanController {
  async handle(request: Request, response: Response) {

    const { id_deliveryman } = request
    const findAllDeliveriesmanUseCase = new FindAllDeliveriesmanUseCase()

    const deliveries = await findAllDeliveriesmanUseCase.execute(id_deliveryman)

    return response.json(deliveries)
  }
}