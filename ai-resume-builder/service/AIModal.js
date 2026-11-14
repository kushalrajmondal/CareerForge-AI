import Groq from "groq-sdk";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

const groq = new Groq({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
});

export const AIChatSession = {

    sendMessage: async (prompt, jsonMode = false) => {

        const requestData = {
            model: "openai/gpt-oss-120b",

            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],

            temperature: 0.7,
        };

        // Enable JSON mode only when requested
        if (jsonMode) {
            requestData.response_format = {
                type: "json_object",
            };
        }

        const completion =
            await groq.chat.completions.create(requestData);

        const responseText =
            completion.choices[0]?.message?.content;

        return {
            response: {
                text: () => responseText,
            },
        };
    },
};