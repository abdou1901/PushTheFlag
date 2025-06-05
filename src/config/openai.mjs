import {OpenAI} from 'openai'
import { OPENROUTE_API } from '../utils/env.mjs'

const openai = new OpenAI ({
    apiKey:OPENROUTE_API,
    baseURL:'https://openrouter.ai/api/v1'
});
export default openai

