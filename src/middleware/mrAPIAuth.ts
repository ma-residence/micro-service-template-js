import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";
import ClientOAuth2 from 'client-oauth2';

export const mrAPIAuth = async (
  req: Request,
  next: NextFunction
) => {
    let mrAuth = new ClientOAuth2({
        clientId: process.env.API_CLIENT_ID,
        clientSecret: process.env.API_CLIENT_SECRET,
        accessTokenUri: process.env.ACCESS_TOKEN_URI,
        scopes: []
    });

    await mrAuth.credentials.getToken().then((token: any) => {
        req.headers.Authorization = `Bearer ${token.accessToken}`;
    });

    next();
};
