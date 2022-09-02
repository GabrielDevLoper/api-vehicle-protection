import { ClientTypeormRepository } from "../../../client/repositories/typeorm/ClientTypeormRepository";
import { ThirdPersonTypeormRepository } from "../../../thirdPerson/repositories/typeorm/ThirdPersonTypeormRepository";
import { VehicleTypeormRepository } from "../../../vehicle/repositories/typeorm/VehicleTypeormRepository";
import { AccidentEventTypeorm } from "../../repositories/typeorm/AccidentEventTypeorm";
import { CreateAccidentEventController } from "./CreateAccidentEventController";
import { CreateAccidentEventService } from "./CreateAccidentEventService";

const accidentEventTypeormRepository = new AccidentEventTypeorm();
const clientTypeormRepository = new ClientTypeormRepository();
const vehicleTypeormRepository = new VehicleTypeormRepository();
const thirdPersonTypeormRepository = new ThirdPersonTypeormRepository();

const createAccidentEventService =
    new CreateAccidentEventService(accidentEventTypeormRepository,
        clientTypeormRepository,
        vehicleTypeormRepository,
        thirdPersonTypeormRepository
    );

const createAccidentEventController = new CreateAccidentEventController(createAccidentEventService);

export { createAccidentEventController, createAccidentEventService };