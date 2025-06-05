import dotenv from 'dotenv';

dotenv.config();

const vars = [
   'NODE_ENV',
   'DATABASE_URL',
   'GITHUB_CLIENT_ID',
   'GITHUB_CLIENT_SECRET',
   'GITHUB_CALLBACK_URL',
   'JWT_SECRET',
   'JWT_REFRESH_SECRET',
   'CORS_ORIGIN',
   'OPENROUTE_API',
   'OPENROUTE_MODEL'
];

vars.forEach((element) => {
   if (!process.env[element]) {
      throw new Error(`Missing varibale ${element} from the dotenv file `);
   }
});

export const {
   NODE_ENV,
   DATABASE_URL,
   GITHUB_CLIENT_ID,
   GITHUB_CLIENT_SECRET,
   GITHUB_CALLBACK_URL,
   JWT_SECRET,
   JWT_REFRESH_SECRET,
   CORS_ORIGIN,
   OPENROUTE_API,
   OPENROUTE_MODEL
} = process.env;
