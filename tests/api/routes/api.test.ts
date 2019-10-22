import { Container } from "typedi";
import app from "../../../src/app";
import request from "supertest";
import fs = require("fs");

const file = JSON.parse(fs.readFileSync("./tests/files/response.json", "utf8"));

describe("Test GET /roles (with the requester mocked)", () => {
    class RequesterMock {
        static async get(uri: string, bearer: string) {
            return { response: file, error: {} };
        }
    }
    Container.set("requester", RequesterMock);

    it("should respond", async () => {
        request(app)
            .get("/roles")
            .then((res, err) => {
                expect(res.statusCode).toBe(200);
            })
            .catch(err => {
                throw err;
            });
    });
});

describe("Test GET /roles", () => {
    it("should respond", async () => {
        request(app)
            .get("/roles")
            .then(function(res, err) {
                expect(res.statusCode).toEqual(200);
            });
    });
});
