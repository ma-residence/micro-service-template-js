import fetch from "node-fetch";
import ClientOAuth2 from "client-oauth2";
import config from "../../../config/index";
import MrToken from "../auth/MrToken";

export default async (req, rep, next) => {
    if (MrToken.isExpired()) {
        try {
            const mrAuth = new ClientOAuth2({
                clientId: config.api.clientId,
                clientSecret: config.api.clientSecret,
                accessTokenUri: `${config.api.host}/oauth/v2/token`,
                scopes: []
            });

            const token = await mrAuth.credentials.getToken();

            MrToken.setToken(
                token.accessToken,
                new Date().getTime() + token.data.expires_in
            );
        } catch (e) {
            return next(e);
        }
    }

    req.headers = new fetch.Headers({
        Authorization: `Bearer ${MrToken.accessToken}`,
        "Content-Type": "application/json"
    });

    return next();
};
