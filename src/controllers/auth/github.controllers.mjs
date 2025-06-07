import {
   generateTokens,
   setCookiesTokens,
} from '../../services/jwt.service.mjs';
import { getUser } from '../../services/store/user.store.mjs';

export async function githubCallback(req, res) {
   let user = req.user;
   if (!user) {
      return res.redirect('https://v0-aidocsplatform.vercel.app/login?error=unauthorized');
   }

   user = await getUser({ username: user.username, githubId: user.id });

   const { accessToken, refreshToken } = generateTokens(user);
   setCookiesTokens(res, accessToken, refreshToken);

   // 🔁 Redirect after login success
   res.redirect('https://v0-aidocsplatform.vercel.app/auth/callback');
}
