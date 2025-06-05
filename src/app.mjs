import express from "express"
import authRoutes from "./routes/auth.routes.mjs"
import LeetcodeRoutes from "./routes/AiDoc.routes.mjs"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import rateLimit from "express-rate-limit"
import passport from "./config/auth.mjs"
import cors from "cors"
import axios from "axios"
import jwt from "jsonwebtoken"
import { NODE_ENV ,CORS_ORIGIN } from "./utils/env.mjs"
import { requireAuth } from "./middlware/auth/requireAuth.mjs"
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchUserInfo } from "./services/store/user.store.mjs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const app = express();
const COOKIE_SECURE = NODE_ENV === 'production';

if (COOKIE_SECURE) app.set('trust proxy', 1);
app.use(helmet())
app.use(cors({origin:"https://v0-aidocsplatform.vercel.app", credentials:true}));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/ai",requireAuth,LeetcodeRoutes)



//main route
app.get('/', (req,res) => {
    const token = req.cookies?.access_token;
    if(token){
        try{
            return res.redirect('https://v0-aidocsplatform.vercel.app/auth/callback');
        } catch{
            res.clearCookie("access_token");
        }
    }
    res.redirect('/auth/github')
});

app.get("/hello", (req, res) => {
    console.log("received")
  return res.json({ message: "🛠️ Backend is running." });
});

app.get('/me', requireAuth, async (req, res) => {
    console.log("request received")
    const user = await fetchUserInfo(req.user.id)
    console.log("from me route : user:",user)
    res.json(user);
});

app.get('/home', requireAuth, (req, res) => {
    console.log(req.user)
    const username = req.user?.username || 'User';
    res.send(`<h1>Welcome, ${username}</h1><p><a href="/auth/logout">Logout</a></p>`);
});

export default app;