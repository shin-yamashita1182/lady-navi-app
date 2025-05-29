// /api/generate-lady.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { preference } = req.body;

  const prompt = `
あなたは一流のナイトガイドAIです。以下の「お客様の気分や好み」に応じて、
とっておきの“推しレディ”を1名紹介してください。

- お客様の入力: ${preference}

紹介フォーマット:
👩‍🦱 名前:
🎤 特技:
💖 魅力ポイント:
🗨 一言メッセージ:
`;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.data.choices[0].message.content;
    res.status(200).json({ result });
  } catch (err) {
    console.error("GPTエラー:", err.message);
    res.status(500).json({ result: "AIレディ生成に失敗しました🥲" });
  }
}
