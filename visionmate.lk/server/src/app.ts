/**
 * Main app
 *
 * @author M.M.N.H.Fonseka
 */

import "dotenv/config";
import express from "express";
import apiRoutes from "./routes/api";
import webRoutes from "./routes/web";
import morgan from "morgan";
import cors from 'cors';

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", webRoutes);
app.use("/api", apiRoutes);

export default app;
