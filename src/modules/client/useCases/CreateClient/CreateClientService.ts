import { Client } from "../../../../entities/Client";
import { IClientRepository } from "../../repositories/IClientRepository";
import * as Boom from "@hapi/boom";
import { ICreateClientRequestDTO } from "./CreateClientDTO";

export interface IUpdateClientRequest {
    name: string;
    cpf: string;
    email: string;
}


export class CreateClientService {
    constructor(private clientRepository: IClientRepository) { }

    async execute(data: ICreateClientRequestDTO) {
        const clientArealdyExists = await this.clientRepository.findByCPF(data.cpf);

        if (clientArealdyExists) {
            throw Boom.badRequest("Client already exists.", clientArealdyExists);
        }

        const client = await this.clientRepository.save(data);

        return client;
    }
}