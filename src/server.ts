import app from './app';
import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.port || 4000;

app.listen(PORT, () => {
   console.log(`app is running at port ${PORT}\n`);
});
