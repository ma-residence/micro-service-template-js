import { Container } from "typedi";
import RequesterService from "./../services/requester";
import LoggerInstance from "./logger";

export default () => {
    try {
        Container.set("requester", RequesterService);
        Container.set("logger", LoggerInstance);
    } catch (err) {
        LoggerInstance.error("🔥 Error on dependency injector loader: %o", err);
        throw err;
    }
};
