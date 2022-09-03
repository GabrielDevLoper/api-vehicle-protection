import { v4 } from "uuid";
import { Client } from "../../../../entities/Client";
import { ICreateClientRequestDTO } from "../../useCases/CreateClient/CreateClientDTO";
import { IClientRepository } from "../IClientRepository";

export class ClientInMemoryRepository implements IClientRepository {
    clients: Client[] = [];

    async save(data: ICreateClientRequestDTO): Promise<Client> {
        const client = {
            ...data,
            id: v4(),
            created_at: new Date(),
            updated_at: new Date()
        }

        this.clients.push(client);

        return client;
    }
    async update(data: ICreateClientRequestDTO, id: string): Promise<Client> {
        const clientIndex = this.clients.findIndex(client => client.id === id)

        this.clients[clientIndex].name = data.name;
        this.clients[clientIndex].cpf = data.cpf;
        this.clients[clientIndex].email = data.email;

        let clientUpdated = this.clients[clientIndex];

        return clientUpdated;
    }
    async findByCPF(cpf: string): Promise<Client> {
        const client = this.clients.find(client => client.cpf === cpf);

        return client;
    }
    async findById(id: string): Promise<Client> {
        const client = this.clients.find(client => client.id === id);

        return client;
    }
    async findAll(): Promise<Client[]> {
        const clients = this.clients.map(user => user);

        return clients;
    }

}