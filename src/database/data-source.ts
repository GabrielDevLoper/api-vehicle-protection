import { DataSource } from "typeorm"
import { AccidentEvent } from "../entities/AccidentEvent";
import { Client } from "../entities/Client"
import { ThirdPerson } from "../entities/ThirdPerson";
import { Vehicle } from "../entities/Vehicle";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Client, AccidentEvent, ThirdPerson, Vehicle],
    migrations: [],
    subscribers: [],
});
