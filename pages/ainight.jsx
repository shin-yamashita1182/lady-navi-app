import React, { useState } from "react";

export default function AINightSearch() {
  const [selectedGender, setSelectedGender] = useState("lady");
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const genreOptions = selectedGender === "lady"
    ? [
        { label: "BAR", value: "BAR" },
        { label: "LOUNGE", value: "LOUNGE" },
        { label: "CLUB", value: "CLUB" },
        { label: "MUSIC BAR", value: "MUSIC BAR" },
        { label: "DINING BAR", value: "DINING BAR" },
        { label: "NIGHT CAFE", value: "NIGHT CAFE" },
      ]
    : [
        { label: "HOST CLUB", value: "HOST CLUB" },
        { label: "MEN'S BAR", value: "MEN'S BAR" },
        { label: "DJ NIGHT", value: "DJ NIGHT" },
        { label: "男装ラウンジ", value: "男装ラウンジ" },
        { label: "ALL GENDER BAR", value: "ALL GENDER BAR" },
      ];

  return (
    <div className="min-h-screen bg-[url('/bg-marble.jpg')] bg-cover bg-center bg-no-repeat text-white p-6">
      <div className="max-w-md mx-auto text-center space-y-6">

        {/* タイトル */}
        <div className="text-2xl animate-pulse">💎</div>
        <h1 className="text-4xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-pink-300 to-purple-500 drop-shadow-md">
          AINIGHT LUXE
        </h1>
        <p className="text-sm text-pink-100 italic">AIと選ぶ、夜のとっておき。</p>

        {/* 性別選択 */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "LADY", value: "lady" },
            { label: "BOY", value: "boy" },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center justify-center py-3 rounded-xl font-bold border border-pink-400 
              bg-black/30 hover:bg-pink-100/10 cursor-pointer select-none transition-all uppercase tracking-wide text-sm
              ${
                selectedGender === option.value
                  ? "bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-inner ring-2 ring-pink-200"
                  : ""
              }`}
              onClick={() => setSelectedGender(option.value)}
            >
              {option.label}
            </label>
          ))}
        </div>

        {/* ジャンル選択 */}
        <div className="grid grid-cols-2 gap-4">
          {genreOptions.map((genre) => (
            <label
              key={genre.value}
              className={`flex items-center justify-center py-3 rounded-xl text-sm font-semibold border border-yellow-400 
              bg-black/30 hover:bg-yellow-100/10 cursor-pointer select-none transition-all uppercase tracking-wide
              ${
                selectedGenres.includes(genre.value)
                  ? "bg-yellow-400 text-black shadow-inner ring-1 ring-yellow-300"
                  : ""
              }`}
              onClick={() => toggleGenre(genre.value)}
            >
              {genre.label}
            </label>
          ))}
        </div>

        {/* 検索ボタン */}
        <button
          className="w-full py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg tracking-wide transition-transform hover:scale-105"
          onClick={() =>
            alert(`検索対象: ${selectedGender}\n選択ジャンル: ${selectedGenres.join(", ")}`)
          }
        >
          AIでナイトスポットを探す
        </button>

      </div>
    </div>
  );
}
