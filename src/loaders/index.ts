import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";

export default async ({ expressApp }) => {
    dependencyInjectorLoader();
    expressLoader({ app: expressApp });
};
