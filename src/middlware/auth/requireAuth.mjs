//this file is to verify that the user is authorized to access an endpoint

import jwt from "jsonwebtoken"
import { JWT_SECRET ,NODE_ENV} from "../../utils/env.mjs"
import { ref } from "process";
import { refreshToken } from "../../controllers/auth/jwt.controller.mjs";

const COOKIE_SECURE = NODE_ENV === "production"

export function requireAuth(req,res,next) {
    console.log("i'm requireing auth")
    console.log("cookies with that request : ",req.cookies)
    const access_Token = req.cookies?.access_token;

    function returnToRoot(){
        res.clearCookie("access_token",{secure:COOKIE_SECURE,httpOnly:true,sameSite:"none" })
        res.clearCookie("refresh_token",{secure:COOKIE_SECURE,httpOnly:true,sameSite:"none" })
        return res.redirect("https://v0-aidocsplatform.vercel.app/login");
    }

    if(!access_Token){
        console.log("i'm sending request to the refresh token");
        return refreshToken(req,res,next)
    }

    try {
        const payload = jwt.verify(access_Token,JWT_SECRET);
        req.user = {id:payload.id,username:payload.username};
        console.log("you're authorized ")
        return next();
    } catch(err){
        console.log("access token expired with error :",err);
        if (
            (typeof err === "string" && !err.includes("TokenExpiredError")) ||
            (typeof err === "object" && err.name !== "TokenExpiredError")
        ) {
            return returnToRoot();
        }
        refreshToken(req,res);
        next();
    }
    
}

