const supertest = require("supertest");
const server = require("../../server");
const { default: mongoose } = require('mongoose');
const User = require("../../models/userModel");

const api = supertest(server);

beforeAll(async () => {
    await User.deleteMany({});
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User Routes', () => {
    const newUser = {
        username: "testingg",
        email: "testingg@gmail.com",
        password: "test123",
        fullname: "Te2st User"
    }

    test('should respond with home page', () => {
        return api.get('/')
            .then(res => {
                expect(res.statusCode).toBe(200)
                expect(res.text).toBe('app working');
            });
    });

    test("should register a new user", async () => {
        const response = await api.post("/users/register").send(newUser);
        expect(response.statusCode).toBe(201);
        expect(response.body._id).toBeDefined();
        expect(response.body.email).toBe(newUser.email);
    });

    test('should not allow duplicate usernames', () => {
        return api.post('/users/register')
            .send(newUser)
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body.error).toMatch(/already registered/i)
            })
    });

    test('should not allow empty fields', () => {
        return api.post('/users/register')
            .send({})
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res.body.error).toMatch(/all fields are required/i)
            })
    });

    test("should login with valid credentials", async () => {
        const userCredentials = {
            username: "testingg",
            password: "test123",
        };
        const response = await api.post("/users/login").send(userCredentials);
        expect(response.statusCode).toBe(200);
        expect(response.body.accessToken).toBeDefined();
    });
});
