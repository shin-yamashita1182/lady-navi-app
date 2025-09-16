export type Artist = {
id: string;
slug: string; // URL key
name: string;
avatar: string; // /public/avatars/*.png
cover: string; // /public/covers/*.jpg
tags: string[];
bio: string;
goal: { amount: number; period: string; }; // 例: { amount: 1000000, period: "2025.09" }
links?: { twitter?: string; instagram?: string; youtube?: string; };
};


export type Product = {
id: string;
artistId: string;
name: string;
price: number; // JPY
image: string; // /public/products/*.jpg
stock?: number; // undefined = 在庫無限（モック）
};


export type Support = {
id: string;
artistId: string;
nickname: string;
message?: string;
amount: number;
createdAt: string; // ISO
};


export type CartItem = {
productId: string;
qty: number;
};
