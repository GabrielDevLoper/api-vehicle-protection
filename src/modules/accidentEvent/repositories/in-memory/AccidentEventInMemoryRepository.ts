import { v4 } from "uuid";
import { AccidentEvent } from "../../../../entities/AccidentEvent";
import { ICreateAccidentEventRequestDTO } from "../../useCases/CreateAccidentEvent/ICreateAccidentEventDTO";
import { IAccidentEventRepository } from "../IAccidentEventRepository";

export class AccidentEventInMemoryRepository implements IAccidentEventRepository {
    accidentsEvent: AccidentEvent[] = [];

    async save(data: ICreateAccidentEventRequestDTO): Promise<AccidentEvent> {
        const accidentEvent = {
            ...data,
            id: v4(),
            created_at: new Date(),
            updated_at: new Date()
        }

        this.accidentsEvent.push(accidentEvent);

        return accidentEvent;
    }

}