import { Router } from "express";

import mrApi from "./routes/mrApi";
import { handleAPIDocs } from "./routes/apiDocs";

export default () => {
    const router = Router();

    mrApi(router);
    handleAPIDocs(router);

    return router;
};
