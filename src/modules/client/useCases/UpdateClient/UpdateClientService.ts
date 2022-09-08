import * as Boom from "@hapi/boom";
import * as bcrypt from "bcrypt";
import { cpf } from "cpf-cnpj-validator";

import { IClientRepository } from "../../repositories/IClientRepository";
import { IUpdateClientRequestDTO } from "./UpdateClientDTO";


export class UpdateClientService {
    constructor(private clientRepository: IClientRepository) { }

    async execute(data: IUpdateClientRequestDTO, id: string) {
        const clientArealdyExists = await this.clientRepository.findById(id);

        if (!cpf.isValid(data.cpf)) {
            throw Boom.badRequest("CPF is invalid.");
        }

        if (!clientArealdyExists) {
            throw Boom.notFound("Client not found.");
        }

        const clientUpdate = {
            name: data.name,
            cpf: data.cpf,
            email: data.cpf,
            password: bcrypt.hashSync(data.password, 8)
        }

        const client = await this.clientRepository.update(clientUpdate, id);

        return client;
    }
}