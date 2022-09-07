import { IThirdPersonRepository } from "../../repositories/IThirdPersonRepository";
import { ICreateThirdPersonRequestDTO } from "./CreateThirdPersonDTO";

export class CreateThirdPersonService {
    constructor(private thirdPersonRepository: IThirdPersonRepository) { };

    async execute(data: ICreateThirdPersonRequestDTO[]) {
        const thirdPersons = await this.thirdPersonRepository.saveMany(data);

        return thirdPersons;
    }
}