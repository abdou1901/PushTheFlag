//this file will manage tokens generation , and cookie set

import jwt from "jsonwebtoken"
import {
    NODE_ENV,
    JWT_SECRET,
    JWT_REFRESH_SECRET
} from "../utils/env.mjs"
import { setRefreshToken } from "../utils/tokenStore.mjs";
import { ref } from "process";



const COOKIE_SECURE = NODE_ENV == "production";

export function generateTokens(user){
    console.log("i'm generating tokens !");
    const accessToken = jwt.sign(
        {
            id:user.id,
            username:user.username,
            githubToken:user.githubToken
        },
        JWT_SECRET,
        {
            expiresIn: "15m",
            algorithm:"HS256"
        }
    );
    const refreshToken = jwt.sign(
        {
            id:user.id,
            username:user.username,
            tokenVersion: 1 
        },
        JWT_REFRESH_SECRET,
        {
            expiresIn: "7d",
            algorithm:'HS256'
        }
    );
    console.log("access Token : ",accessToken);
    console.log("refresh Token : ",refreshToken);
    
    setRefreshToken(refreshToken,user.id);

    return {accessToken, refreshToken};
}

export function setCookiesTokens(res,accessToken,refreshToken){
    const cookieOptions = {
        httpOnly: true,
        secure: COOKIE_SECURE,
        sameSite: "none"
    };

    res.cookie("access_token",accessToken,cookieOptions);
    res.cookie("refresh_token",refreshToken,cookieOptions);
};



