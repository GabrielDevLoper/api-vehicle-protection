import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { uuid } from "uuidv4";
import { AccidentEvent } from "./AccidentEvent";

@Entity({ name: "third_persons" })
export class ThirdPerson {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @ManyToOne(() => AccidentEvent, (accidentEvent) => accidentEvent.thirdPerson)
    accidentEvent: AccidentEvent;

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