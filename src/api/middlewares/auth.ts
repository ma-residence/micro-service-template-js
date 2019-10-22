import ClientOAuth2 from "client-oauth2";
import config from "../../config";
import token from "../../types/token";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    if (!token.isExpired()) {
        return next();
    }

    try {
        const auth = new ClientOAuth2({
            clientId: config.api.clientId,
            clientSecret: config.api.clientSecret,
            accessTokenUri: `${config.api.host}/oauth/v2/token`,
            scopes: []
        });

        const credentials = await auth.credentials.getToken();

        token.setToken(
            credentials.accessToken,
            new Date().getTime() + parseInt(credentials.data.expires_in, 10)
        );
    } catch (err) {
        return next(err);
    }

    return next();
};
