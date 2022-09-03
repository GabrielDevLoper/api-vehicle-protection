import { AccidentEvent } from "../../../entities/AccidentEvent";
import { ICreateAccidentEventRequestDTO } from "../useCases/CreateAccidentEvent/ICreateAccidentEventDTO";

export interface IAccidentEventRepository {
    save(data: ICreateAccidentEventRequestDTO): Promise<AccidentEvent>
    findAll(): Promise<AccidentEvent[]>;
}