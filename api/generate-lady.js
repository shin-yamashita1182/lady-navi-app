export default async function handler(req, res) {
  const { preference } = req.body;

  const dummy = `あなたにおすすめの“推しレディ”はこちら！

👩‍🦱 名前: ミカ  
🎤 特技: 歌とトーク  
💖 魅力: お酒よりもあなたとの会話が大好き

気分が落ちてる夜こそ、ミカが元気をくれるかも？`;

  res.status(200).json({ result: dummy });
}
