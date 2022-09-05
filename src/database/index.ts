import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    console.log("Connection succesfuly db");
}).catch(error => console.log(error));
