import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { uuid } from "uuidv4";
import { AccidentEvent } from "./AccidentEvent";

@Entity({ name: "vehicles" })
export class Vehicle {
    @PrimaryColumn()
    id: string;

    @Column()
    vehicle: string;

    @Column({
        unique: true
    })
    license_plate: string;

    @Column()
    year: number;

    @OneToMany(() => AccidentEvent, (accidentEvent) => accidentEvent.vehicle)
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