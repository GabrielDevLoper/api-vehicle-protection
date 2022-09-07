import { IClientRepository } from "../../repositories/IClientRepository";
import { ICreateClientRequestDTO } from "./CreateClientDTO";
import * as Boom from "@hapi/boom";
import * as bcrypt from "bcrypt";
import { cpf } from 'cpf-cnpj-validator';

export class CreateClientService {
    constructor(private clientRepository: IClientRepository) { }

    async execute(data: ICreateClientRequestDTO) {
        const clientArealdyExists = await this.clientRepository.findByCPF(data.cpf);

        if (!cpf.isValid(data.cpf)) {
            throw Boom.badRequest("CPF is invalid.");
        }

        if (clientArealdyExists) {
            throw Boom.badRequest("Client already exists.", clientArealdyExists);
        }

        const clientSave = {
            name: data.name,
            cpf: data.cpf,
            email: data.email,
            password: bcrypt.hashSync(data.password, 8),
        }

        const client = await this.clientRepository.save(clientSave);

        return client;
    }
}