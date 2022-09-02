import { VehicleTypeormRepository } from "../../repositories/typeorm/VehicleTypeormRepository";
import { CreateVehicleController } from "./CreateVehicleController";
import { CreateVehicleService } from "./CreateVehicleService";

const vehicleTypeormRepository = new VehicleTypeormRepository();

const createVehicleService = new CreateVehicleService(vehicleTypeormRepository);

const createVehicleController = new CreateVehicleController(createVehicleService);

export { createVehicleController, createVehicleService };
