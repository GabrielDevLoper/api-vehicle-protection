import { AppDataSource } from "../../../../database/data-source";
import { Vehicle } from "../../../../entities/Vehicle";
import { ICreateVehicleRequestDTO } from "../../useCases/CreateVehicle/CreateVehicleDTO";
import { IVehicleRepository } from "../IVehicleRepository";

const vehicleRepo = AppDataSource.getRepository(Vehicle);

export class VehicleTypeormRepository implements IVehicleRepository {
    async save(data: ICreateVehicleRequestDTO): Promise<Vehicle> {
        const vehicle = vehicleRepo.create(data);

        const vehicleCreated = await vehicleRepo.save(vehicle);

        return vehicleCreated;
    }
    async findById(id: string): Promise<Vehicle> {
        const vehicle = await vehicleRepo.findOneBy({
            id
        });

        return vehicle;
    }
    async findByLicensePlate(license_plate: string): Promise<Vehicle> {
        const vehicle = await vehicleRepo.findOneBy({
            license_plate
        });

        return vehicle;
    }

}