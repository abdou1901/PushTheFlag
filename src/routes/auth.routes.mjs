import { Router } from 'express';
import passport from '../config/auth.mjs';
import { githubCallback } from '../controllers/auth/github.controllers.mjs';
import { refreshToken, logout } from '../controllers/auth/jwt.controller.mjs';
import { requireAuth } from '../middlware/auth/requireAuth.mjs';
import { saveUserInfo,DeleteAccountData } from '../controllers/profile/profile.edit.mjs';

const router = Router();

router.get(
   '/github',
   (req, res, next) => {
      console.log("I'm calling the github app");
      next();
   },
   passport.authenticate('github', { session: false })
);
router.get(
   '/github/callback',
   (req, res, next) => {
      console.log('I authenticate successfully !');
      next();
   },
   passport.authenticate('github', { failureRedirect: '/', session: false }),
   githubCallback
);
router.post('/token', requireAuth, refreshToken);
router.post('/updateinfo',requireAuth, saveUserInfo)
router.get('/delete',requireAuth , DeleteAccountData)
router.get('/logout', logout);

export default router;
