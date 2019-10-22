export default class Token {
    static accessToken: string;
    static expires: number;

    static setToken(accessToken: string, expires: number) {
        this.accessToken = accessToken;
        this.expires = expires;
    }

    static isExpired(): boolean {
        return !this.accessToken || new Date().getTime() > this.expires;
    }
}
