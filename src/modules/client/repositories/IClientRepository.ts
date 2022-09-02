import { AccidentEvent } from "../../../entities/AccidentEvent";
import { Client } from "../../../entities/Client";
import { ICreateAccidentEventRequest, ICreateClientRequest } from "../useCases/CreateClient/CreateClientService";

export interface IClientRepository {
    save(data: ICreateClientRequest): Promise<Client>;
    update(data: ICreateClientRequest, id: string): Promise<Client>;
    createAccidentEvent(data: ICreateAccidentEventRequest): Promise<AccidentEvent>;
    findByCPF(cpf: string): Promise<Client>;
    findById(id: string): Promise<Client>;
}