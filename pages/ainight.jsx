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
    <div className="min-h-screen bg-[url('/bg-marble.jpg')] bg-cover bg-center bg-no-repeat text-black p-6">
      <div className="max-w-md mx-auto text-center space-y-8">

        {/* ロゴ */}
        <div className="space-y-1 text-center">
          <div className="text-2xl">💎</div>
          <h1 className="text-3xl font-bold tracking-[0.2em] text-yellow-600 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)]">
            AINIGHT LUXE
          </h1>
          <p className="text-sm text-black/60 italic tracking-wide">
            AIと選ぶ、夜のとっておき。
          </p>
        </div>

        {/* 性別セレクト */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "LADY", value: "lady" },
            { label: "BOY", value: "boy" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedGender(option.value)}
              className={`w-full py-3 border text-sm font-semibold tracking-wider transition-all 
                ${
                  selectedGender === option.value
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:border-black"
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* ジャンルセレクト */}
        <div className="grid grid-cols-2 gap-4">
          {genreOptions.map((genre) => (
            <button
              key={genre.value}
              onClick={() => toggleGenre(genre.value)}
              className={`w-full py-3 border text-sm font-medium tracking-wide transition-all 
                ${
                  selectedGenres.includes(genre.value)
                    ? "bg-yellow-500 text-white border-yellow-500"
                    : "bg-white text-black border-yellow-500 hover:bg-yellow-100"
                }`}
            >
              {genre.label}
            </button>
          ))}
        </div>

        {/* 検索ボタン */}
        <button
          className="w-full py-3 bg-black text-white font-semibold tracking-wider hover:opacity-80 transition-opacity"
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
