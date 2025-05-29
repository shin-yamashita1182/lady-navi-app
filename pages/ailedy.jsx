// ✅ AILADY 夜の女神 – UIファイル
import React, { useState } from "react";
import GenerateButton from "../components/GenerateButtonAILEDY";
import AiledyResult from "../components/AiledyResult";
import LuxeHeader from "../components/LuxeHeader";


export default function AILADY() {
  const [location, setLocation] = useState("");
  const [genre, setGenre] = useState("ナイトバー");
  const [vibe, setVibe] = useState("セクシー");
  const [time, setTime] = useState("21:00以降");
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-pink-900 text-pink-100 p-6">
      {/* 🏆 ここ差し替えポイント！ */}
      <LuxeHeader />

      <div className="space-y-4">
        <input
          type="text"
          placeholder="📍 地域を入力（例：中洲、すすきの）"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-800 text-white"
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-800 text-white"
        >
          <option value="ナイトバー">ナイトバー</option>
          <option value="キャバクラ">キャバクラ</option>
          <option value="ラウンジ">ラウンジ</option>
          <option value="ガールズバー">ガールズバー</option>
        </select>

        <select
          value={vibe}
          onChange={(e) => setVibe(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-800 text-white"
        >
          <option value="セクシー">セクシー</option>
          <option value="おしゃれ">おしゃれ</option>
          <option value="癒やし系">癒やし系</option>
          <option value="ギャル系">ギャル系</option>
        </select>

        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-800 text-white"
        >
          <option value="21:00以降">21:00以降</option>
          <option value="22:00以降">22:00以降</option>
          <option value="23:00以降">23:00以降</option>
        </select>

        <GenerateButton
          location={location}
          genre={genre}
          vibe={vibe}
          time={time}
          setResults={setResults}
        />
      </div>

      <div className="mt-8">
        <AiledyResult results={results} />
      </div>
    </div>
  );
}
