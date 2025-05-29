import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">🌙 Night Navi AI</h1>
      <p className="text-center text-lg mb-6">
        AIがあなたにぴったりの“夜のレディ”をご案内します。
      </p>
      <Link href="/lady-ai">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg">
          💃 推しレディを探す
        </button>
      </Link>
      <footer className="mt-12 text-sm text-gray-500">powered by SORA × MIRUROUTE</footer>
    </div>
  );
}
