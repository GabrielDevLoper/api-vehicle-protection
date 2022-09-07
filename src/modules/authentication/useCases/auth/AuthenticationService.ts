import { ClientTypeormRepository } from "../../../client/repositories/typeorm/ClientTypeormRepository";
import { IAuthenticationRequestDTO } from "./IAuthenticationRequestDTO";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as Boom from "@hapi/boom";

export class AuthenticationService {
    constructor(private clientRepository: ClientTypeormRepository) { }

    async execute({ cpf, password }: IAuthenticationRequestDTO) {
        const client = await this.clientRepository.findByCPF(cpf);

        if (!client) {
            throw Boom.badRequest("Credentials invalid.");
        }

        const token = jwt.sign({ clientID: client.id }, process.env.SECRET_KEY, { algorithm: 'HS256' });

        const isValid = await bcrypt.compare(password, client.password);

        const credentials = {
            id: client.id,
            name: client.name,
            email: client.email,
            cpf: client.cpf
        };

        return { isValid, credentials, token };
    }
}