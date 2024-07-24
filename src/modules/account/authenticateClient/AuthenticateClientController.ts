
import { Request, Response } from 'express';
import { AuthenticateClientUseUseCase } from './AuthenticateUserUseCase';



export class AuthenticateClientController {
  async handle(request: Request, response: Response) {

    const { username, password } = request.body

    const authenticateUserUseCase = new AuthenticateClientUseUseCase()
    const result = await authenticateUserUseCase.execute({
      username,
      password
    })
     return response.json(result)
  }
}