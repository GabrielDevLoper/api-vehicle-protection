import { AppDataSource } from "../../../../database/data-source";
import { Client } from "../../../../entities/Client";
import { ICreateClientRequestDTO } from "../../useCases/CreateClient/CreateClientDTO";
import { IUpdateClientRequest } from "../../useCases/CreateClient/CreateClientService";
import { IClientRepository } from "../IClientRepository";

const clientRepo = AppDataSource.getRepository(Client);

class ClientTypeormRepository implements IClientRepository {
    async findAll(): Promise<Client[]> {
        const clients = await clientRepo.find();

        return clients;
    }
    async findById(id: string): Promise<Client> {
        const client = await clientRepo.findOneBy({
            id
        });

        return client;
    }
    async findByCPF(cpf: string): Promise<Client> {
        const client = await clientRepo.findOneBy({
            cpf
        });

        return client;
    }
    async update(data: IUpdateClientRequest, id: string): Promise<Client> {
        const client = await clientRepo.findOneBy({
            id
        });

        client.name = data.name;
        client.email = data.email;
        client.cpf = data.cpf;

        const clientUpdated = await clientRepo.save(client);

        return clientUpdated;
    }

    save(data: ICreateClientRequestDTO): Promise<Client> {
        const client = clientRepo.create(data);

        const clientCreated = clientRepo.save(client);

        return clientCreated;
    }

}

export { ClientTypeormRepository }