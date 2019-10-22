// https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
import request from "supertest";
import app from "../src/app";

describe("Test GET / ", () => {
    it("should respond OK to a GET on /", async () => {
        const res = await request(app).get("/");

        expect(res.statusCode).toEqual(200);
    });
});
