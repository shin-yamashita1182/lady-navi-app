// pages/index.jsx
"use client";

import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mb-6">
      {kicker ? (
        <div className="text-xs tracking-widest text-slate-500">{kicker}</div>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p> : null}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={"rounded-2xl border border-slate-200 bg-white/80 shadow-sm " + className}>
      {children}
    </div>
  );
}

export default function Home() {
  // LP assets（ここだけ差し替えればOK）
  const ASSETS = useMemo(
    () => ({
      heroVideo: "/hatsuume/hero.mp4",
      img1: "/hatsuume/shoji-red.jpg",     // 世界観
      img2: "/hatsuume/tokonoma.jpg",      // 床の間
      img3: "/hatsuume/garden.jpg",        // 庭
      img4: "/hatsuume/wagashi.jpg",       // 和菓子
      img5: "/hatsuume/tea-room.jpg",      // 茶室
    }),
    []
  );

  // 問い合わせ（最小：mailto で送信）
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailTo = () => {
    const to = "info@example.com"; // ←ここだけ実アドレスに変更
    const subject = "【初梅会】お問い合わせ";
    const body = `氏名：${name}\nメール：${email}\n\n問い合わせ内容：\n${message}\n`;
    const url = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <>
      <Head>
        <title>初梅会 | 遠州流福岡支部</title>
        <meta
          name="description"
          content="遠州流福岡支部 初梅会。凛と咲く、初梅のように。遠州流「きれい寂び」の美意識と共に、自らを整える学びの場。"
        />
      </Head>

      {/* 背景グラデ（やさしく） */}
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl border border-slate-200 bg-white grid place-items-center">
                <span className="text-sm font-semibold">初</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">初梅会</div>
                <div className="text-xs text-slate-500">遠州流福岡支部</div>
              </div>
            </div>

            <nav className="ml-auto hidden md:flex items-center gap-5 text-sm text-slate-600">
              <a href="#about" className="hover:text-slate-900">初梅会とは</a>
              <a href="#enshu" className="hover:text-slate-900">遠州流</a>
              <a href="#activity" className="hover:text-slate-900">活動</a>
              <a href="#schedule" className="hover:text-slate-900">開催</a>
              <a href="#contact" className="hover:text-slate-900">お問い合わせ</a>
            </nav>

            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
            >
              見学相談
            </a>
          </div>
        </header>

 {/* Hero */}
 <section className="pt-0">
  {/* ✅ フル幅ラッパー */}
  <div className="relative left-1/2 w-screen -translate-x-1/2">
    {/* ✅ 上はヘッダーのborder-bがあるので、Heroは border-b のみにして“二重線”回避 */}
    <div className="relative overflow-hidden border-b border-slate-200 bg-black">
      {/* ✅ 縦を詰める：aspect固定をやめて高さをvhで制御（PCでも広すぎない） */}
      <div className="relative h-[38vh] sm:h-[50vh] lg:h-[56vh] max-h-[620px]">
         <video
   className="h-full w-full object-cover opacity-90 scale-[1.10]"
          src={ASSETS.heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/10" />

        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
          {/* ✅ テキストだけ中央幅に戻す */}
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <div className="text-xs tracking-[0.2em] text-white/80">
                ENSHU-RYU FUKUOKA / HATSUUME-KAI
              </div>
              <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                凛と咲く、初梅のように。
              </h1>
              <p className="mt-4 text-white/85 leading-relaxed">
                寒さの中にも清らかさを宿す、遠州流「きれい寂び」の美意識。
                <br className="hidden sm:block" />
                茶の湯は、自らを整える道。初梅会は、志ある女性が学びを深める場です。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  初梅会を知る
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/15"
                >
                  見学・お問い合わせ
                </a>
              </div>

              <div className="mt-8 text-xs text-white/60">
                ※映像・写真はイメージ（差し替え可能）
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* ひとこと帯 */}
  <div className="mx-auto max-w-6xl px-4 mt-6 grid gap-4 sm:grid-cols-3">
    <Card className="p-5">
      <div className="text-sm font-semibold">きれい寂び</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        華やかさに走らず、過度に飾らず、ただ端正に整える。
      </p>
    </Card>
    <Card className="p-5">
      <div className="text-sm font-semibold">整える稽古</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        準備と片付けを大切に。所作と心を静かに磨きます。
      </p>
    </Card>
    <Card className="p-5">
      <div className="text-sm font-semibold">志ある女性の学び</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        仕事に真摯に向き合い、教養として茶の湯を深めたい方へ。
      </p>
    </Card>
  </div>
</section>

        {/* Enshu */}
        <section id="enshu" className="mx-auto max-w-6xl px-4 pt-14 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={ASSETS.img2} alt="床の間" fill className="object-cover" />
              </div>
            </div>

            <div>
              <SectionTitle
                kicker="ENSHU-RYU"
                title="遠州流茶道について"
                desc="遠州流茶道は、武家の精神を受け継ぐ流派です。小堀遠州公が大切にした美意識「きれい寂び」を礎に、端正に整えた美を尊びます。"
              />

              <Card className="p-6">
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li>・華やかさに走らず、過度に飾らず、ただ端正に整えること。</li>
                  <li>・静寂の中に宿る清らかさ。凛とした佇まい。</li>
                  <li>・初梅会では、この精神を礎に日々の稽古を重ねています。</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Activity */}
        <section id="activity" className="mx-auto max-w-6xl px-4 pt-14 sm:pt-20">
          <SectionTitle
            kicker="ACTIVITY"
            title="活動内容"
            desc="遠州流のカリキュラムに基づき稽古を重ね、概ね三年で「準師範（宗号）」取得を目指します。"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-6 lg:col-span-2">
              <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-700 leading-relaxed">
                <div>・準備と片付けを大切にしたお稽古</div>
                <div>・日本人としての所作を学ぶ</div>
                <div>・おもてなしの心を学ぶ</div>
                <div>・道具／掛け軸／花など芸術性を学ぶ</div>
                <div>・年に一度 茶道に関する旅行</div>
                <div>・遠州流茶道 全国大会に参加</div>
                <div>・お家元／長谷川代表のお話を聞く機会</div>
                <div>・年に一度 お茶会を催す</div>
              </div>
            </Card>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={ASSETS.img5} alt="茶室" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="mx-auto max-w-6xl px-4 pt-14 sm:pt-20">
          <SectionTitle kicker="SCHEDULE" title="開催概要" />

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">～2026年3月</div>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div>場所：大濠公園日本庭園（福岡市中央区）</div>
                <div>日時：原則 月1回（木曜 13:00～15:00）</div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold">2026年4月～</div>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div>場所：ホテルクリオコート博多（福岡市博多区）</div>
                <div>日時：原則 月1回（木曜 13:00～15:00）</div>
              </div>
            </Card>
          </div>
        </section>

        {/* Recruit */}
        <section className="mx-auto max-w-6xl px-4 pt-14 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <SectionTitle
                kicker="RECRUIT"
                title="ご新規の募集"
                desc="初梅会では、志を同じくする方をお迎えしています。"
              />
              <Card className="p-6">
                <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                  <li>・ご自身の仕事に真摯に向き合っている女性</li>
                  <li>・責任ある立場を担う方</li>
                  <li>・教養として茶の湯を深めたい方</li>
                </ul>
              </Card>

              <div className="mt-5 text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-800">キャッチコピー案：</span>
                <br />
                「静けさは、強さになる。」／「所作が整うと、心が整う。」／「凛と、端正に。」
              </div>
            </div>

            {/* Contact */}
            <div id="contact">
              <SectionTitle
                kicker="CONTACT"
                title="お問い合わせ"
                desc="見学のご相談・ご質問など、お気軽にお送りください。"
              />
              <Card className="p-6">
                <div className="grid gap-4">
                  <div>
                    <div className="text-xs text-slate-500">氏名</div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="例）山田 花子"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">メールアドレス</div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">問い合わせ内容</div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 min-h-[140px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="例）見学希望です。次回の開催日を教えてください。"
                    />
                  </div>

                  <button
                    onClick={mailTo}
                    className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    メールで送信する
                  </button>

                  <div className="text-xs text-slate-500">
                    ※送信ボタンはPC/スマホのメールアプリを起動します。フォーム送信型（DB保存/自動返信）にも拡張できます。
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-6xl px-4 py-12 mt-10 text-sm text-slate-500">
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <div>© {new Date().getFullYear()} 初梅会（遠州流福岡支部）</div>
            <div className="sm:ml-auto">Design: minimal / きれい寂び</div>
          </div>
        </footer>
      </div>
    </>
  );
}
