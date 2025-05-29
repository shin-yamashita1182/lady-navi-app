import { useState } from "react";

export default function LadyAI() {
  const [preference, setPreference] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    const res = await fetch("/api/generate-lady", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ preference }),
    });
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">💬 AIに相談してみよう</h2>
      <input
        type="text"
        value={preference}
        onChange={(e) => setPreference(e.target.value)}
        placeholder="好みや気分を入力..."
        className="w-full p-2 text-black rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
      >
        推しレディを紹介して！
      </button>
      <div className="mt-6 whitespace-pre-wrap">{result}</div>
    </div>
  );
}
