import { ClientTypeormRepository } from "../../repositories/typeorm/ClientTypeormRepository";
import { ListClientController } from "./ListClientController";
import { ListClientService } from "./ListClientService";

const clientTypeormRepository = new ClientTypeormRepository();

const listClientService = new ListClientService(clientTypeormRepository);

const listClientController = new ListClientController(listClientService);

export { listClientController, listClientService };