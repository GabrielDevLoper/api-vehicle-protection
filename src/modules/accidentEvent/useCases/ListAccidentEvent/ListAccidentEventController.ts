import { ListAccidentEventService } from "./ListAccidentEventService";
import * as Hapi from "@hapi/hapi";

export class ListAccidentEventController {
    constructor(private listAccidentEventService: ListAccidentEventService) { }

    async handle(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const accidentsEvent = await this.listAccidentEventService.execute();

        return accidentsEvent;
    }
}