import { v4 } from "uuid";
import { Vehicle } from "../../../../entities/Vehicle";
import { ICreateVehicleRequestDTO } from "../../useCases/CreateVehicle/CreateVehicleDTO";
import { IVehicleRepository } from "../IVehicleRepository";

export class VehicleInMemoryRepository implements IVehicleRepository {
    vehicles: Vehicle[] = [];

    async save(data: ICreateVehicleRequestDTO): Promise<Vehicle> {
        const vehicle = {
            ...data,
            id: v4(),
            created_at: new Date(),
            updated_at: new Date()
        };

        this.vehicles.push(vehicle);

        return vehicle;
    }
    async findById(id: string): Promise<Vehicle> {
        const vehicle = this.vehicles.find(vehicle => vehicle.id === id);

        return vehicle;

    }
    async findByLicensePlate(license_plate: string): Promise<Vehicle> {
        const vehicle = this.vehicles.find(vehicle => vehicle.license_plate === license_plate);

        return vehicle;
    }

    async findAll(): Promise<Vehicle[]> {
        throw new Error("Method not implemented.");
    }

}