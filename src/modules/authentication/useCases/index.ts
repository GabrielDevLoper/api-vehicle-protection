import { ClientTypeormRepository } from "../../client/repositories/typeorm/ClientTypeormRepository";
import { AuthenticationController } from "./AuthenticationController";
import { AuthenticationService } from "./AuthenticationService";

const clientTypeormRepository = new ClientTypeormRepository();
const authenticationService = new AuthenticationService(clientTypeormRepository);

const authenticationController = new AuthenticationController(authenticationService);

export { authenticationController, authenticationService };