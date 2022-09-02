import { IClientRepository } from "../../repositories/IClientRepository";

export class ListClientService {
    constructor(private userRepository: IClientRepository) { }

    async execute() {
        const clients = await this.userRepository.findAll();

        return clients;
    }
}