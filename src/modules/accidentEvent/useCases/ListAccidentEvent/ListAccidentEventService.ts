import { IAccidentEventRepository } from "../../repositories/IAccidentEventRepository";

export class ListAccidentEventService {
    constructor(private accidentEventRepostitory: IAccidentEventRepository) { }

    async execute() {
        const accidentsEvent = await this.accidentEventRepostitory.findAll()

        return accidentsEvent;
    }
}