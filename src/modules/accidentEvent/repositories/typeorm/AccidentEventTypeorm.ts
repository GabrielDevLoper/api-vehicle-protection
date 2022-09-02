import { AppDataSource } from "../../../../database/data-source";
import { AccidentEvent } from "../../../../entities/AccidentEvent";
import { ICreateAccidentEventRequestDTO } from "../../useCases/CreateAccidentEvent/ICreateAccidentEventDTO";
import { IAccidentEventRepository } from "../IAccidentEventRepository";

const accidentEventRepo = AppDataSource.getRepository(AccidentEvent);

export class AccidentEventTypeorm implements IAccidentEventRepository {
    async save(data: ICreateAccidentEventRequestDTO): Promise<AccidentEvent> {
        const accidentEvent = accidentEventRepo.create(data);

        const accidentEventCreated = await accidentEventRepo.save(accidentEvent);

        return accidentEventCreated;
    }
}