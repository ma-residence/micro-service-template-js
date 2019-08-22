export default class MrToken {
    static accessToken: string;
    static expires: number;

    static setToken(accessToken, expires) {
        MrToken.accessToken = accessToken;
        MrToken.expires = expires;
    }

    static isExpired() {
        return (
            !MrToken.accessToken ||
            new Date().getTime() > MrToken.expires * 1000
        );
    }
}
