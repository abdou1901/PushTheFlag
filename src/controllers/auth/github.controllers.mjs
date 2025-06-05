import {
   generateTokens,
   setCookiesTokens,
} from '../../services/jwt.service.mjs';
import { getUser } from '../../services/store/user.store.mjs';

export async function githubCallback(req, res) {
  try {
    let user = req.user;
    console.log(user);
    if (!user) {
      console.error('GitHub callback failed: no user found');
      return res.status(401).redirect('/login?error=unauthorized');
    }
    user = await getUser({ username: user.username, githubId: user.id });
    if (!user) {
      console.error('User not found in database');
      return res.status(401).redirect('/login?error=user_not_found');
    }
    console.log('from the github callback : ', user);
    const { accessToken, refreshToken } = generateTokens(user);
    setCookiesTokens(res, accessToken, refreshToken);
    return res.redirect('https://v0-aidocsplatform.vercel.app/auth/callback');
  } catch (error) {
    console.error('Error in githubCallback:', error);
    return res.status(500).send('Internal Server Error');
  }
}
