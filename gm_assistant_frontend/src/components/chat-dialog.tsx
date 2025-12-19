import { useState, useEffect } from "react";
import { AiResponse, Prompt } from "./chat-controller";
import { sendPromptToOllama } from "./chat-service";

function ChatDialog() {
    const [data, setData] = useState<AiResponse | null>(null);
    const style: string = "name: example \n age: example \n quote: example \n characteristic: example"  
    let examplePrompt: Prompt = {message:"create an NPC in this style: " + style + " with following properties:"}
    examplePrompt.message = examplePrompt.message + "medieval setting, " + "dumb"

    useEffect(() => {
        sendPromptToOllama(examplePrompt)
            .then((result) => setData(result))
            .catch((error) => console.error("Component error:", error));
    }, []);

    return (
        <div>
            {/* <h1>{data?.name}</h1> */}
            <div>
                <h1>Chat Dialog</h1>
                <div>
                    { data == null 
                    ? "Loading ..." 
                    : JSON.stringify(data, null, 2)
                    }
                </div>
            </div>
        </div>
    );
}

export default ChatDialog;