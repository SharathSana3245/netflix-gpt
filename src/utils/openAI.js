import OpenAI from 'openai';
import { Open_Ai_Key } from './constants';

const openai = new OpenAI({
  apiKey: Open_Ai_Key, dangerouslyAllowBrowser: true // This is the default and can be omitted
});


export default openai;