import "dotenv/config";
import express from "express";
import {Role} from "./enums/auth";
import {Authentication} from "./middleware/authentication";
import {verifyRole} from "./middleware/verify-role";
import apiRoutes from "./routes/api";
import webRoutes from "./routes/web";
import morgan from "morgan";
import cors from 'cors';
import {jsonErrorHandler} from "./middleware/error-handler";
import * as routes from './routes';

const isProduction = process.env.NODE_ENV === "production";
const app = express();

app.use(morgan("dev"));

if (!isProduction) {
    app.use(cors({
        optionsSuccessStatus: 200,
        origin: '*',
        allowedHeaders: ['Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Authorization, X-Requested-With', 'Cache-Control']
    }));
}

app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({limit: '20mb', extended: true}));


// app.use("/", webRoutes);
app.use('/api/auth', Authentication.verifyToken);
app.use('/api/admin', Authentication.verifyToken, verifyRole([Role.ADMIN]), apiRoutes);
app.use('/api/patient', Authentication.verifyToken, verifyRole([Role.PATIENT]));
routes.initRoutes(app);

// Error Handling
app.use(jsonErrorHandler);

export default app;
