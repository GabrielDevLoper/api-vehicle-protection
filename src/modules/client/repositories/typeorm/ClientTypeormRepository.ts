import { AppDataSource } from "../../../../database/data-source";
import { AccidentEvent } from "../../../../entities/AccidentEvent";
import { Client } from "../../../../entities/Client";
import { ICreateAccidentEventRequest, ICreateClientRequest, IUpdateClientRequest } from "../../useCases/CreateClient/CreateClientService";
import { IClientRepository } from "../IClientRepository";

const clientRepo = AppDataSource.getRepository(Client);

class ClientTypeormRepository implements IClientRepository {
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
    createAccidentEvent(data: ICreateAccidentEventRequest): Promise<AccidentEvent> {
        throw new Error("Method not implemented.");
    }
    save(data: ICreateClientRequest): Promise<Client> {
        const client = clientRepo.create(data);

        const clientCreated = clientRepo.save(client);

        return clientCreated;
    }

}

export { ClientTypeormRepository }