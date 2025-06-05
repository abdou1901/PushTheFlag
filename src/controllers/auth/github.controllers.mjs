import {
   generateTokens,
   setCookiesTokens,
} from '../../services/jwt.service.mjs';
import { getUser } from '../../services/store/user.store.mjs';

export async  function githubCallback(req, res) {
   let user = req.user; // set by passport
   console.log(user)
   if (!user) {
      console.error('GitHub callback failed: no user found');
      return res.status(401).redirect('/login?error=unauthorized');
   }
   user = await getUser({username: user.username,githubId:user.id})
   console.log('from the github callback : ', user);
   const { accessToken, refreshToken } = generateTokens(user);
   setCookiesTokens(res, accessToken, refreshToken);
   res.redirect('https://v0-aidocsplatform.vercel.app/auth/callback');
}
