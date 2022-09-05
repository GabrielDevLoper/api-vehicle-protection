import { VehicleTypeormRepository } from "../../repositories/typeorm/VehicleTypeormRepository";
import { ListVehicleController } from "./ListVehicleController";
import { ListVehicleService } from "./ListVehicleService";

const vehicleTypeormRepository = new VehicleTypeormRepository();
const listVehicleService = new ListVehicleService(vehicleTypeormRepository);

const listVehicleController = new ListVehicleController(listVehicleService);

export { listVehicleController, listVehicleService };