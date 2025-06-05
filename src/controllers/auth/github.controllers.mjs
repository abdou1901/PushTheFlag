import {
   generateTokens,
   setCookiesTokens,
} from '../../services/jwt.service.mjs';
import { getUser } from '../../services/store/user.store.mjs';

export async function githubCallback(req, res) {
   let user = req.user; // set by passport
   if (!user) {
      console.error('GitHub callback failed: no user found');
      return res.status(401).json({ error: 'Unauthorized' });
   }
   user = await getUser({ username: user.username, githubId: user.id });
   const { accessToken, refreshToken } = generateTokens(user);
   setCookiesTokens(res, accessToken, refreshToken);

   // Instead of redirect, send JSON info
   res.json({ success: true, user, redirectUrl: 'https://v0-aidocsplatform.vercel.app/auth/callback' });
}

