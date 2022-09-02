import { UpdateClientService } from "./UpdateClientService";
import * as Hapi from "@hapi/hapi";
import { IUpdateClientRequest } from "../CreateClient/CreateClientService";

export class UpdateClientController {
    constructor(private updateClientService: UpdateClientService) { }

    async handle(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const { name, cpf, email } = request.payload as IUpdateClientRequest;
        const { id } = request.params;

        const data = {
            name,
            cpf,
            email
        }

        const client = await this.updateClientService.execute(data, id);

        return client;
    }
}