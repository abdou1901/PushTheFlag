import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github2';
import {
   GITHUB_CLIENT_ID,
   GITHUB_CLIENT_SECRET,
   GITHUB_CALLBACK_URL,
} from '../utils/env.mjs';

passport.use(
   new GithubStrategy(
      {
         clientID: GITHUB_CLIENT_ID,
         clientSecret: GITHUB_CLIENT_SECRET,
         callbackURL: "https://pushtheflag-5.onrender.com/auth/github/callback",
         scope:["repo"]
      },
      (accessToken, refreshToken, profile, done) => {
         const user = {
            id: profile.id,
            username: profile.username,
            displayName: profile.displayName,
            provider: profile.provider,
            githubToken:accessToken
         };
         done(null, user);
      }
   )
);

export default passport;
