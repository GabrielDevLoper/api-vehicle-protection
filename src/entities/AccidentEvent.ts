import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 } from "uuid";
import { Client } from "./Client";
import { ThirdPerson } from "./ThirdPerson";
import { Vehicle } from "./Vehicle";

@Entity({ name: "accidents_event" })
export class AccidentEvent {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.accidentEvents)
    vehicle: Vehicle;

    @ManyToOne(() => Client, (client) => client.accidentEvents)
    client: Client;

    @Column()
    description_accident: string;

    @OneToMany(() => ThirdPerson, (thirdPerson) => thirdPerson.accidentEvent)
    thirdPerson: ThirdPerson[];

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