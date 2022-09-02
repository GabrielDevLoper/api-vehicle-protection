import { Vehicle } from "../../../entities/Vehicle";
import { CreateVehicleRequestDTO } from "../useCases/CreateVehicle/CreateVehicleDTO";

export interface IVehicleRepository {
    save(data: CreateVehicleRequestDTO): Promise<Vehicle>;
    findById(id: string): Promise<Vehicle>;
    findByLicensePlate(license_plate: string): Promise<Vehicle>;
}