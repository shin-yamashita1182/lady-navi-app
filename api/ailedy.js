// ✅ AILADY 女神ガイドAPI
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { location, genre, vibe, time } = req.body;

  const prompt = `
あなたはナイトシーンに詳しい女神AIです。
以下の情報を参考にして、魅力的な女の子たちと出会えるお店を3件紹介してください。
各スポットは次の形式で出力してください：

1. 店名（架空でもOK）
2. ジャンル：${genre}
3. 雰囲気：${vibe}
4. 営業時間：${time}
5. 地域：${location}
6. 魅力的な説明（100文字以内）

情報：

- 地域：${location}
- ジャンル：${genre}
- 雰囲気：${vibe}
- 来店時間帯：${time}

※ 出力は日本語で。
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 1.1,
      max_tokens: 800,
    });

    const responseText = completion.choices[0].message.content;

    res.status(200).json({ result: responseText });
  } catch (error) {
    console.error("💥 AILADY API Error:", error);
    res.status(500).json({ error: "AILADY API failed." });
  }
}
