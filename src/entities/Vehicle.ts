import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { uuid } from "uuidv4";

@Entity({ name: "vehicles" })
export class Vehicle {
    @PrimaryColumn()
    id: string;

    @Column()
    vehicle: string;

    @Column()
    license_plate: string;

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