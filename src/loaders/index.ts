import dependencyInjectorLoader from "./dependencyInjector";
import expressLoader from "./express";
import Logger from "./logger";

export default async ({ expressApp }) => {
    await dependencyInjectorLoader();
    await expressLoader({ app: expressApp });
    Logger.info("✌️ Express loaded");
};
