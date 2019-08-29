import fetch from "node-fetch";
import { Router, Request, Response, NextFunction } from "express";
import config from "../../config";
import middlewares from "../middlewares";

const route = Router();

export default (app: Router) => {
    route.get(
        "/roles",
        middlewares.isMrAuth,
        (req: Request, res: Response, next: NextFunction) => {
            try {
                fetch(`${config.api.host}/roles?per_page=50`, {
                    method: "GET",
                    headers: req.headers
                })
                    .then(response => {
                        if (response.status >= 200 && response.status < 400)
                            return response;
                        throw response;
                    })
                    .then(response => {
                        response.json().then(payload => {
                            console.log(payload);
                        });
                    })
                    .catch(error => {
                        console.log("### error", error);
                    });
            } catch (e) {
                return next(e);
            }

            return res.status(200).end();
        }
    );

    app.use(route);
};
