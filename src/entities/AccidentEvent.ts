import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { uuid } from "uuidv4";

@Entity({ name: "accidents_event" })
export class AccidentEvent {
    @PrimaryColumn()
    id: string;

    @Column()
    id_vehicle: string;

    @Column()
    id_client: string;

    @Column()
    year: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}