import { ClientTypeormRepository } from "../../repositories/typeorm/ClientTypeormRepository";
import { UpdateClientController } from "./UpdateClientController";
import { UpdateClientService } from "./UpdateClientService";

const clientTypeormRepository = new ClientTypeormRepository();
const updateClientService = new UpdateClientService(clientTypeormRepository);

const updateClientController = new UpdateClientController(updateClientService);

export { updateClientController, updateClientService };