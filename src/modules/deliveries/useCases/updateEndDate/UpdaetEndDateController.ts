import { Request, Response } from 'express'
import { UpdateEndDateUseCase } from './UpdaetEndDateUseCase'


export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request
    const { id: id_velivery } = request.params

    const updateEndDateUseCase = new UpdateEndDateUseCase()

    const delivery = await updateEndDateUseCase.execute({
      id_deliveryman,
      id_velivery
    })
  }
}