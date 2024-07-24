import { CreateDeliverymanUseCase } from './CreateDeliveerymanUseCase';
import { Request, Response } from 'express';



export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {

    const { username, password } = request.body

    const createDeliverymanUseCase = new CreateDeliverymanUseCase
    const result = await createDeliverymanUseCase.execute({
      username,
      password
    })

    return response.json(result)
  }
}