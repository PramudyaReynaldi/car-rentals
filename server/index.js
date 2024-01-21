import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import UploadRoute from "./routes/UploadRoute.js";
import DashboardRoute from "./routes/DashboardRoute.js";
import path from "path";
import ejs from "ejs";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async () => {
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(UploadRoute);
app.use(DashboardRoute)

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.APP_PORT}`);
});