import * as Boom from "@hapi/boom";
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

        const getThirdPersonExists = await this.thirdPersonRepository.findMany(data.thirdPerson);

        const thirdPersonsFormated = getThirdPersonExists.map(third => {
            return {
                name: third.name,
                phone: third.phone,
                cpf: third.cpf,
            }
        });

        const thirdPersonRequestFormated = data.thirdPerson.map(t => {
            return {
                name: t.name,
                phone: t.phone,
                cpf: t.cpf,
            }
        });

        const getNewThirdsPersons = thirdPersonRequestFormated.filter(({ cpf: id1 }) => !thirdPersonsFormated.some(({ cpf: id2 }) => id2 === id1));

        const thirdPersonSave = await this.thirdPersonRepository.saveMany(getNewThirdsPersons);

        const thirdPersons = [
            ...thirdPersonSave,
            ...getThirdPersonExists
        ];

        const accidentEvent = await this.accidentEventRepository.save({
            client,
            vehicle,
            description_accident: data.description_accident,
            thirdPerson: thirdPersons
        });

        return accidentEvent;
    }
}