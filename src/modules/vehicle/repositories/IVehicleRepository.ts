import { Vehicle } from "../../../entities/Vehicle";
import { ICreateVehicleRequestDTO } from "../useCases/CreateVehicle/CreateVehicleDTO";

export interface IVehicleRepository {
    save(data: ICreateVehicleRequestDTO): Promise<Vehicle>;
    findById(id: string): Promise<Vehicle>;
    findByLicensePlate(license_plate: string): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
}