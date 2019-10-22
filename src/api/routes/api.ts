import { Container } from "typedi";
import { Router, Request, Response, NextFunction } from "express";
import ApiService from "../../services/api";
import auth from "../middlewares/auth";
import token from "../../types/token";

export default (router: Router) => {
    const route = Router();

    route.get(
        "/roles",
        auth,
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                // To access the data layer and the business logic:
                // 1. use the Service Locator to find the Service
                const apiService = Container.get(ApiService);

                // 2. then call the Service Layer
                const { response, error } = await apiService.getRoles(
                    token.accessToken
                );

                return res.status(200).send({
                    response: response,
                    error: error
                });
            } catch (error) {
                console.error("🔥 error: %o", error);
                return next(error);
            }
        }
    );

    router.use(route);
};
