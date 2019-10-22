import { Router } from "express";
import api from "./routes/api";
import doc from "./routes/doc";

export default () => {
    const router = Router();

    doc(router);
    api(router);

    return router;
};
