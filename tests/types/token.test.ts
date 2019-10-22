import Token from "../../src/types/token";

test("check the token expiration", () => {
    Token.setToken(
        Buffer.from("token").toString("base64"),
        new Date().getTime() + 3600
    );
    expect(Token.isExpired()).toBe(false);

    Token.setToken(
        Buffer.from("token").toString("base64"),
        new Date().getTime() - 3600
    );
    expect(Token.isExpired()).toBe(true);
});
