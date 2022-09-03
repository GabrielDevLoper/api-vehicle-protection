import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 } from "uuid";
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
    accidentEvents?: AccidentEvent[];

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