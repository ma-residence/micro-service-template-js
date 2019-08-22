import { Router } from "express";

import mrApi from "./routes/mrApi";

export default () => {
    const router = Router();

    mrApi(router);

    return router;
};
