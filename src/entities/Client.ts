import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { uuid } from "uuidv4";
import { AccidentEvent } from "./AccidentEvent";

@Entity({ name: "clients" })
export class Client {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({
        unique: true
    })
    cpf: string;

    @OneToMany(() => AccidentEvent, (accidentEvent) => accidentEvent.client)
    accidentEvents: AccidentEvent[];

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