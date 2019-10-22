import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "../api";

export default ({ app }: { app: express.Application }) => {
    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({});
    }).head("/", (req: Request, res: Response) => {
        res.status(200).end();
    });

    app.enable("trust proxy")
        .use(cors())
        .use(routes());

    app.use((req: Request, res: Response, next: NextFunction) => {
        const err = new Error("Not Found");
        err["status"] = 404;
        next(err);
    });

    app.use((err, req: Request, res: Response, next: NextFunction) => {
        if (err.name !== "UnauthorizedError") {
            return next(err);
        }

        return res
            .status(err.status)
            .send({ message: err.message })
            .end();
    });

    app.use((err, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message
            }
        });
    });
};
