import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveeryman(request: Request, response: Response, next: NextFunction) {
  const autheHeader = request.headers.authorization

  if (!autheHeader) {
    return response.status(401).json({
      message: 'Token missing'
    })
  }

  const [, token] = autheHeader.split(" ")

  try {
    const { sub } = verify(token, "21100e9e60400b9704419459ec2babfd") as IPayload

    request.id_deliveeryman = sub

    return next()
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid token'
    })
  }

}