import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 } from "uuid";
import { AccidentEvent } from "./AccidentEvent";
import * as bcrypt from "bcrypt";

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

    @Column({
        nullable: true
    })
    password: string;

    @OneToMany(() => AccidentEvent, (accidentEvent) => accidentEvent.client)
    accidentEvents?: AccidentEvent[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }

}