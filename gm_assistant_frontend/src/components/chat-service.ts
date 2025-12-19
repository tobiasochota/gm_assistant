import { AiResponse, sendPrompt, Prompt } from "./chat-controller";

export async function sendPromptToOllama(prompt: Prompt): Promise<AiResponse> {
    
    return await sendPrompt(prompt);
}
