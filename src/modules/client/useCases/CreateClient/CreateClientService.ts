import { Client } from "../../../../entities/Client";
import { IClientRepository } from "../../repositories/IClientRepository";
import * as Boom from "@hapi/boom";

export interface IUpdateClientRequest {
    name: string;
    cpf: string;
    email: string;
}

export interface ICreateClientRequest {
    name: string;
    cpf: string;
    email: string;
}

export interface ICreateAccidentEventRequest {
    id_user: string;
    vehicle: string;
    license_plate: string;
    year: string;
}

export class CreateClientService {
    constructor(private clientRepository: IClientRepository) { }

    async execute(data: ICreateClientRequest): Promise<Client> {
        const clientArealdyExists = await this.clientRepository.findByCPF(data.cpf);

        if (clientArealdyExists) {
            throw Boom.badRequest("Client already exists.");
        }

        const client = await this.clientRepository.save(data);

        return client;
    }
}