import express from "express"
const app = express()
const port =8000;
import {faker} from "@faker-js/faker";

const createUser = () => {
    const newFake = {
        firstname: faker.person.firstName(),
        lastName:faker.person.lastName(),
        phoneNumber:faker.phone.number(),
        password:faker.internet.password(),
        email:faker.internet.email(),
        id:faker.database.mongodbObjectId()
    };
    return newFake;
};
    
const createCompany = () => {
    const newcompany = {
        id:faker.database.mongodbObjectId(),
        name:faker.company.name(),
        address:{
        street:faker.location.street(),
        city:faker.location.city(),
        state:faker.location.state(),
        zipCode:faker.location.zipCode(),
        country:faker.location.country() 
    }
    };
    return newcompany;
};

const newcompany = createCompany ()
console.log(newcompany)

const newUser = createUser()
console.log(newUser);
let userandcompany ={
    user : newUser,
    comapy :newcompany
}


app.get("/api/users/new",(req,res)=>{res.json(newUser)})
app.get("/api/companies/new",(req,res)=>{res.json(newcompany)})
app.get("/api/user/company",(req,res)=>{res.json( userandcompany )})







app.listen(port,()=>console.log("Linstening on port:" + port))