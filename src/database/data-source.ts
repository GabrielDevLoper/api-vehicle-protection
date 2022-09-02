import { DataSource } from "typeorm"
import { AccidentEvent } from "../entities/AccidentEvent";
import { Client } from "../entities/Client"
import { ThirdPerson } from "../entities/ThirdPerson";
import { Vehicle } from "../entities/Vehicle";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "default",
    password: "secret",
    database: "default",
    synchronize: true,
    logging: false,
    entities: [Client, AccidentEvent, ThirdPerson, Vehicle],
    migrations: [],
    subscribers: [],
});
