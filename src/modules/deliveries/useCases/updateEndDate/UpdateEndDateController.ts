import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUsecase";


export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params

    const upadateEndDateUseCase = new UpdateEndDateUseCase();
    const delivery = await upadateEndDateUseCase.execute({
      id_deliveryman,
      id_delivery 
    })

    return response.json(delivery);
  }
}