import { AccidentEvent } from "../../../entities/AccidentEvent";
import { Client } from "../../../entities/Client";
import { ICreateClientRequestDTO } from "../useCases/CreateClient/CreateClientDTO";
import { ICreateAccidentEventRequest } from "../useCases/CreateClient/CreateClientService";

export interface IClientRepository {
    save(data: ICreateClientRequestDTO): Promise<Client>;
    update(data: ICreateClientRequestDTO, id: string): Promise<Client>;
    createAccidentEvent(data: ICreateAccidentEventRequest): Promise<AccidentEvent>;
    findByCPF(cpf: string): Promise<Client>;
    findById(id: string): Promise<Client>;
    findAll(): Promise<Client[]>;
}