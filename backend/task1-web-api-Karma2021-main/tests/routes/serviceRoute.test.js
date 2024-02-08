const supertest = require("supertest");
const server = require("../../server");
const { default: mongoose } = require('mongoose');
const Service = require("../../models/serviceModel");

const api = supertest(server);

beforeAll(async () => {
    await Service.deleteMany({});
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Service Routes', () => {
    const newService = {
        description: "Test service",
        image: "test.jpg",
        charge: 100,
    }

    test('should add a new service', async () => {
        const response = await api.post("/services/addservice").send(newService);
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Service added successfully");
    });

    test('should get all services', async () => {
        const response = await api.get("/services/getallservices");
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('should delete all services', async () => {
        const response = await api.delete("/services/deleteallservices");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("All services deleted successfully.");
    });


});
