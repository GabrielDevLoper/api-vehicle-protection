import { DataSource } from "typeorm"
import { Client } from "../entities/Client"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "default",
    password: "secret",
    database: "default",
    synchronize: true,
    logging: false,
    entities: [Client],
    migrations: [],
    subscribers: [],
});
