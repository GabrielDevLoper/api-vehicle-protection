import { AppDataSource } from "../../../../database/data-source";
import { ThirdPerson } from "../../../../entities/ThirdPerson";
import { ICreateThirdPersonRequestDTO } from "../../useCases/CreateThirdPerson/CreateThirdPersonDTO";
import { IThirdPersonRepository } from "../IThirdPersonRepository";

const thirdPersonRepo = AppDataSource.getRepository(ThirdPerson);

export class ThirdPersonTypeormRepository implements IThirdPersonRepository {
    async saveMany(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]> {
        const thirdPerson = thirdPersonRepo.create(data);

        const thirdPersonCreated = await thirdPersonRepo.save(thirdPerson);

        return thirdPersonCreated;
    }

}