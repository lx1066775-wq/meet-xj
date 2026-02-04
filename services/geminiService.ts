import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `你是一位专业的新疆本地旅游咨询师，名为“西域小管家”。你的任务是：
1. 为游客提供新疆各地的旅游攻略（如北疆喀纳斯、禾木，南疆喀什、帕米尔）。
2. 解答关于新疆天气、美食（大盘鸡、烤包子等）、民族文化和旅行禁忌的问题。
3. 帮助用户规划合理的行程。
4. 语言要热情、专业，并能体现出对家乡新疆的热爱。
5. 如果用户问到价格，请说明这是参考价格，具体需咨询客服。`;

/**
 * Provides travel advice using Gemini AI.
 * Uses gemini-3-flash-preview for general text-based Q&A.
 */
export async function getTravelAdvice(history: ChatMessage[], message: string): Promise<string> {
  // Create a new instance for each call to ensure fresh configuration
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      // Map history to the required format: { role: 'user'|'model', parts: [{ text: string }] }
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
    });

    // Send the current user message and get a response
    const response = await chat.sendMessage({ message });
    // Use .text property directly as per latest SDK guidelines
    return response.text || "抱歉，我现在无法回答，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "小管家去喀纳斯采风了，暂时不在。请稍后或直接拨打我们的电话联系！";
  }
}