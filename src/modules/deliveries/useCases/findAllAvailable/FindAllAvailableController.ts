import { Request, Response } from 'express'
import { FindAllAvailableUseCase } from './FindAllAvailableUseCase'


export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailableUseCase = new FindAllAvailableUseCase()

    const deliveeies = await findAllAvailableUseCase.execute()

    return response.json(deliveeies)
  }
}