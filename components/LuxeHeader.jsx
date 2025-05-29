export default function LuxeHeader() {
  return (
    <div className="text-center mb-8">
      {/* 月アイコン（やや小さく） */}
      <div className="text-2xl mb-1">🌕</div>

      {/* タイトル：折り返さず1行！ */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-pink-300 to-purple-500 drop-shadow-md whitespace-nowrap">
        AILADY LUXE
      </h1>

      {/* サブテキスト */}
      <p className="text-sm text-pink-100 mt-2 italic">
        女神たちと、特別な夜を──。
      </p>
    </div>
  );
}
