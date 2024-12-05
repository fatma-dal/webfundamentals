
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

const newUser = createUser()

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







export default {createCompany,createUser}