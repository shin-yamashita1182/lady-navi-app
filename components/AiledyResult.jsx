import React from "react";

export default function AiledyResult({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6 p-4 bg-gray-900 text-white rounded-xl shadow-inner space-y-4">
      <h3 className="text-lg font-bold border-b border-pink-500 pb-2">💁‍♀️ AILADYのおすすめ情報</h3>
      <div className="whitespace-pre-line leading-relaxed text-pink-200">
        {result}
      </div>
    </div>
  );
}
