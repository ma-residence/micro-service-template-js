import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

const envFound = dotenv.config();

if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * That long string from mlab
     */
    databaseURL: process.env.DATABASE_URI,

    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || "silly"
    },

    /**
     * API configs
     */
    api: {
        host:
            process.env.MICRO_SERVICE_API_HOST ||
            "https://staging.api.ensembl.fr",
        clientId: process.env.MICRO_SERVICE_CLIENT_ID,
        clientSecret: process.env.MICRO_SERVICE_CLIENT_SECRET
    }
};
