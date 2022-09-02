import { ListClientService } from "./ListClientService";
import * as Hapi from "@hapi/hapi";

export class ListClientController {
    constructor(private listClientService: ListClientService) { }

    async handle(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const clients = await this.listClientService.execute();

        return clients;
    }
}