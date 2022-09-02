import { CreateClientController } from "./CreateClientController";
import { CreateClientService } from "./CreateClientService";
import { ClientTypeormRepository } from "../../repositories/typeorm/ClientTypeormRepository";

const clientTypeormRepository = new ClientTypeormRepository()
const createClientService = new CreateClientService(clientTypeormRepository);

const createClientController = new CreateClientController(createClientService);

export { createClientController, createClientService };