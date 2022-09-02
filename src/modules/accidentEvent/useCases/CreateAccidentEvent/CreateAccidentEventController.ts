import { CreateAccidentEventService } from "./CreateAccidentEventService";
import * as Hapi from "@hapi/hapi";
import { ICreateAccidentEventRequestDTO } from "./ICreateAccidentEventDTO";

export class CreateAccidentEventController {
    constructor(private createAccidentEventService: CreateAccidentEventService) { }

    async handle(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const { client, description_accident, thirdPerson, vehicle } = request.payload as ICreateAccidentEventRequestDTO;

        const data = {
            client,
            description_accident,
            thirdPerson,
            vehicle
        }

        const accidentEvent = await this.createAccidentEventService.execute(data);

        return accidentEvent;
    }
}