import * as Boom from "@hapi/boom";
import { IClientRepository } from "../../repositories/IClientRepository";
import { IUpdateClientRequest } from "../CreateClient/CreateClientService";

export class UpdateClientService {
    constructor(private clientRepository: IClientRepository) { }

    async execute(data: IUpdateClientRequest, id: string) {
        const clientArealdyExists = await this.clientRepository.findById(id);

        if (!clientArealdyExists) {
            throw Boom.notFound("Client not found.");
        }

        const client = await this.clientRepository.update(data, id);

        return client;
    }
}