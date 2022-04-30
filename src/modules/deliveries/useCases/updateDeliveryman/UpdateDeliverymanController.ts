import { Request, Response } from "express";
import { UpadateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";


export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params

    const upadateDeliverymanUseCase = new UpadateDeliverymanUseCase();
    const delivery = await upadateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery 
    })

    return response.json(delivery);
  }
}