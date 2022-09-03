import { AccidentEventTypeorm } from "../../repositories/typeorm/AccidentEventTypeorm";
import { ListAccidentEventController } from "./ListAccidentEventController";
import { ListAccidentEventService } from "./ListAccidentEventService";

const accidentEventTypeormRepository = new AccidentEventTypeorm();

const listAccidentEventService = new ListAccidentEventService(accidentEventTypeormRepository);

const listAccidentEventController = new ListAccidentEventController(listAccidentEventService);

export { listAccidentEventController, listAccidentEventService };