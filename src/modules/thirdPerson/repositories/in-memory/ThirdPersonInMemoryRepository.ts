import { ThirdPerson } from "../../../../entities/ThirdPerson";
import { ICreateThirdPersonRequestDTO } from "../../useCases/CreateThirdPerson/CreateThirdPersonDTO";
import { IThirdPersonRepository } from "../IThirdPersonRepository";
import { v4 } from "uuid";

export class ThirdPersonInMemoryRepository implements IThirdPersonRepository {
    thirdsPersons: ThirdPerson[] = [];

    async saveMany(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]> {
        data.map(thirdPerson => {
            const data = {
                id: v4(),
                ...thirdPerson,
                created_at: new Date(),
                updated_at: new Date()
            }

            this.thirdsPersons.push(data);
        });

        const thirdsSaved = this.thirdsPersons.map(third => third);

        return thirdsSaved;
    }


    async findManyExists(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]> {
        const thirdCPF = data.map(thirdPerson => {
            return thirdPerson.cpf;
        });

        const thirdPersons = this.thirdsPersons.map(third => third);

        return thirdPersons;
    }

}