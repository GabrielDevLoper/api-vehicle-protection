import { UpdateClientService } from "./UpdateClientService";
import * as Hapi from "@hapi/hapi";
import { IUpdateClientRequestDTO } from "./UpdateClientDTO";

export class UpdateClientController {
    constructor(private updateClientService: UpdateClientService) { }

    async handle(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const { name, cpf, email, password } = request.payload as IUpdateClientRequestDTO;
        const { id } = request.params;

        const data = {
            name,
            cpf,
            email,
            password
        }

        const client = await this.updateClientService.execute(data, id);

        return client;
    }
}