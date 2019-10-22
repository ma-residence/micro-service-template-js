import "reflect-metadata"; // We need this in order to use @Decorators

import express from "express";

const app = express();

/**
 * No more body-parser
 *
 * https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * A little hack here
 * Import/Export can only be used in 'top-level code'
 * Well, at least in node 10 without babel and at the time of writing
 * So we are using good old require.
 **/
require("./loaders").default({ expressApp: app });

export default app;
