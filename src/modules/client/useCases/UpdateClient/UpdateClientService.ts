import * as Boom from "@hapi/boom";
import { IClientRepository } from "../../repositories/IClientRepository";
import { IUpdateClientRequestDTO } from "./UpdateClientDTO";


export class UpdateClientService {
    constructor(private clientRepository: IClientRepository) { }

    async execute(data: IUpdateClientRequestDTO, id: string) {
        const clientArealdyExists = await this.clientRepository.findById(id);

        if (!clientArealdyExists) {
            throw Boom.notFound("Client not found.");
        }

        const client = await this.clientRepository.update(data, id);

        return client;
    }
}