import { In } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { ThirdPerson } from "../../../../entities/ThirdPerson";
import { ICreateThirdPersonRequestDTO } from "../../useCases/CreateThirdPerson/CreateThirdPersonDTO";
import { IThirdPersonRepository } from "../IThirdPersonRepository";

const thirdPersonRepo = AppDataSource.getRepository(ThirdPerson);

export class ThirdPersonTypeormRepository implements IThirdPersonRepository {
    async findManyExists(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]> {
        const thirdCPF = data.map(thirdPerson => {
            return thirdPerson.cpf;
        });

        const thirdPersons = await thirdPersonRepo.findBy({
            cpf: In(thirdCPF)
        });

        return thirdPersons;
    }
    async saveMany(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]> {
        const thirdPerson = thirdPersonRepo.create(data);

        const thirdPersonCreated = await thirdPersonRepo.save(thirdPerson);

        return thirdPersonCreated;
    }

}