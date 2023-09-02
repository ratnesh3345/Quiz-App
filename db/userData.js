import {v4 as uuid} from "uuid";

const users = {
    data: [
        {
            id: uuid(),
            username:"ratnesh3345",
            password: "Anmol@123",
            accountCreationDate :  "04-02-2000",
        },
        {
            id: uuid(),
            username:"Anmol3345",
            password: "Ratnesh@123",
            accountCreationDate :  "04-02-2000",
        }
        
    ]
}

export default users;