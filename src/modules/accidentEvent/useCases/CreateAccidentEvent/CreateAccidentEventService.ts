import * as Boom from "@hapi/boom";
import { ThirdPerson } from "../../../../entities/ThirdPerson";
import { IClientRepository } from "../../../client/repositories/IClientRepository";
import { IThirdPersonRepository } from "../../../thirdPerson/repositories/IThirdPersonRepository";
import { IVehicleRepository } from "../../../vehicle/repositories/IVehicleRepository";
import { IAccidentEventRepository } from "../../repositories/IAccidentEventRepository";
import { ICreateAccidentEventRequestDTO } from "./ICreateAccidentEventDTO";

export class CreateAccidentEventService {
    constructor(
        private accidentEventRepository: IAccidentEventRepository,
        private clientRepository: IClientRepository,
        private vehicleRepository: IVehicleRepository,
        private thirdPersonRepository: IThirdPersonRepository
    ) { }

    async execute(data: ICreateAccidentEventRequestDTO) {
        const client = await this.clientRepository.findByCPF(data.client.cpf);

        if (!client) {
            throw Boom.badRequest("Client not found.");
        }

        const vehicle = await this.vehicleRepository.findByLicensePlate(data.vehicle.license_plate);

        if (!vehicle) {
            throw Boom.badRequest("Vehicle not found.");
        }

        const thirdPerson = await this.thirdPersonRepository.saveMany(data.thirdPerson);

        const accidentEvent = await this.accidentEventRepository.save({
            client,
            vehicle,
            description_accident: data.description_accident,
            thirdPerson
        });

        return accidentEvent;
    }
}