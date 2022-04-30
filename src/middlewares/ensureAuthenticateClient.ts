import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).json({
      message: "Token missing"
    });
  }

  const [,token ] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "34df3bfb889fd766e84ddd3b3d8a5da9") as IPayload;

    request.id_client = sub;

    return next();
  } catch(err) {
    console.log(err)

    return response.status(401).json({
      message: "Invalid token!"
    });
  }

}