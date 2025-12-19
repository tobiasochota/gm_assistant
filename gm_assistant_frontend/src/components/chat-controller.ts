// http://localhost:8080/ai/generate?message=which%20model%20ID%20is%20being%20served

export interface Prompt {
    message: string;

}

export interface AiResponse {
    generation: string;

}

const API_BASE = "http://localhost:8080";

export async function sendPrompt(prompt: Prompt): Promise<AiResponse> {
    try {
        const response = await fetch(`${API_BASE}/ai/generate?message=${prompt.message}`);

        if (!response.ok) {
            throw new Error("Error while fetching ai response");
        }

        return await response.json();
    } catch (error) {
        console.error("Service error:", error);
        throw error;
    }
}
