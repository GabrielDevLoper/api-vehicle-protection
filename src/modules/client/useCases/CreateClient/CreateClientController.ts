import { CreateClientService } from "./CreateClientService";
import * as Hapi from "@hapi/hapi";
import { ICreateClientRequestDTO } from "./CreateClientDTO";

export class CreateClientController {
    constructor(private createClientService: CreateClientService) { }

    async handle(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const { name, cpf, email } = request.payload as ICreateClientRequestDTO;

        const data = {
            name,
            cpf,
            email
        }

        const client = await this.createClientService.execute(data);

        return client;
    }
}