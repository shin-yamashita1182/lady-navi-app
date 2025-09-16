// /lib/oshidash.mock.js
export const ARTISTS = [
  {
    id: "a-macchan",
    slug: "macchan",
    name: "まっちゃん",
    avatar: "/avatars/macchan.png",
    cover: "/covers/macchan-hero.jpg",
    tags: ["J-POP", "Acoustic"],
    bio: "優しい声で日常を彩るシンガー。ライブ配信と地域イベントで活動中。",
    goal: { amount: 1000000, period: "2025.10" },
    links: { twitter: "https://x.com/_mock", instagram: "https://instagram.com/_mock" },
  },
];

export const PRODUCTS = [
  { id: "p-tee-001", artistId: "a-macchan", name: "オリジナルTシャツ", price: 3000, image: "/products/tee-001.jpg", stock: 999 },
  { id: "p-sticker-001", artistId: "a-macchan", name: "ステッカー3枚セット", price: 800, image: "/products/sticker-001.jpg" },
];

export const SUPPORTS_INIT = [
  { id: "s1", artistId: "a-macchan", nickname: "しんさん", message: "いつも応援してます！", amount: 2000, createdAt: new Date().toISOString() },
];
