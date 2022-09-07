import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 } from "uuid";
import { AccidentEvent } from "./AccidentEvent";

@Entity({ name: "third_persons" })
export class ThirdPerson {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column({
        unique: true
    })
    cpf: string;

    @ManyToOne(() => AccidentEvent, (accidentEvent) => accidentEvent.thirdPerson)
    accidentEvent?: AccidentEvent;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }

}