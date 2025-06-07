//this file will manage refeshing the access token

import jwt from "jsonwebtoken"
import { JWT_REFRESH_SECRET,JWT_SECRET , NODE_ENV } from "../../utils/env.mjs"
import { RefreshTokenExists,RemoveRefreshToken } from "../../utils/tokenStore.mjs"


const COOKIE_SECURE = NODE_ENV == "production"
function returnToRoot(res){
    res.clearCookie("access_token",{secure:COOKIE_SECURE,httpOnly:true,sameSite:"none" })
    res.clearCookie("refresh_token",{secure:COOKIE_SECURE,httpOnly:true,sameSite:"none" })
    return res.redirect("https://v0-aidocsplatform.vercel.app/");
}
export function refreshToken(req,res,next){
    const refreshToken = req.cookies?.refresh_token;
    
    if(!refreshToken || !RefreshTokenExists(refreshToken)) return returnToRoot(res);
    jwt.verify(
        refreshToken,
        JWT_REFRESH_SECRET,
        {algorithms:['HS256']},
        (error,payload) => {
            if(error || !payload?.id){
                return returnToRoot(res);
            }
            console.log("from refresh token : payload = ",payload)
            const newAccessToken = jwt.sign(
                {id:payload.id,username:payload.username},
                JWT_SECRET,
                {
                    expiresIn:"15m"
                }
            );
            
            const cookieOptions = {
                httpOnly: true,
                secure:COOKIE_SECURE,
                sameSite:"none"
            }
            res.cookie("access_token",newAccessToken,cookieOptions);
            req.user = {id:payload.id, username:payload.username}
            return next()
        }
    );
}

export function logout(req,res){
    const refreshT = req.cookies?.refresh_token;
    if(refreshT){   
        RemoveRefreshToken(refreshT);
    }
    returnToRoot(res);
}
