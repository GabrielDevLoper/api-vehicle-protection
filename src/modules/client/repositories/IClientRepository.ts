import { Client } from "../../../entities/Client";
import { ICreateClientRequestDTO } from "../useCases/CreateClient/CreateClientDTO";

export interface IClientRepository {
    save(data: ICreateClientRequestDTO): Promise<Client>;
    update(data: ICreateClientRequestDTO, id: string): Promise<Client>;
    findByCPF(cpf: string): Promise<Client>;
    findById(id: string): Promise<Client>;
    findAll(): Promise<Client[]>;
}