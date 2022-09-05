import { VehicleTypeormRepository } from "../../repositories/typeorm/VehicleTypeormRepository";

export class ListVehicleService {
    constructor(private vehicleRepository: VehicleTypeormRepository) { }

    async execute() {
        const vehicles = await this.vehicleRepository.findAll();

        return vehicles;
    }
}