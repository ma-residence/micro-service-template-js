process.env.NODE_ENV = process.env.NODE_ENV || "dev";

export default {
    port: parseInt(process.env.PORT, 10) || 3003,
    perPage: parseInt(process.env.PER_PAGE, 10) || 50,
    logs: {
        level: process.env.LOG_LEVEL || "silly"
    },
    api: {
        host: process.env.MR_API_ENDPOINT || "https://dev.api.ensembl.fr",
        clientId: process.env.MR_API_CLIENT_ID,
        clientSecret: process.env.MR_API_CLIENT_SECRET
    }
};
