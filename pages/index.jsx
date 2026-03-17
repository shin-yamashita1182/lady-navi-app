// pages/index.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

const PLATFORM_CARDS = [
  {
    no: "01",
    title: "AI Platform Infrastructure",
    desc: "AI活用を支える基盤設計、データ接続、API連携、業務システム接続を統合的に構築します。",
  },
  {
    no: "02",
    title: "AI Certification Center",
    desc: "AIの信頼性、証明、運用設計、記録・証跡の整備を通じて、社会実装の土台をつくります。",
  },
  {
    no: "03",
    title: "AI Generation Center",
    desc: "生成AI・エージェント・対話UI・プロトタイピングを通じて、新しい実装と表現を形にします。",
  },
  {
    no: "04",
    title: "XR / Medical Simulation",
    desc: "XR・AR・シミュレーション技術を活用し、教育・訓練・理解促進の高度化に取り組みます。",
  },
];

const TECH_ROWS = [
  "AI Platform / API Integration",
  "Certification / Trust / Evidence Design",
  "XR / AR / Simulation",
  "Medical Platform / Digital Infrastructure",
  "Regional / Public / Enterprise DX",
  "Prototype Development / Interface Design",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Digital Innovation Center | CONCIDE</title>
        <meta
          name="description"
          content="AI Platform / XR / Data Infrastructure を軸に、社会実装のためのデジタル基盤を研究・構築する Digital Innovation Center。"
        />
      </Head>

      <div className="dic">
        <header className="topbar">
          <div className="inner topin">
            <div className="brand">
              <div className="brandMark">DIC</div>
              <div className="brandText">
                <div className="brandTitle">Digital Innovation Center</div>
                <div className="brandSub">CONCIDE / AI Platform / XR / Data Infrastructure</div>
              </div>
            </div>

            <nav className="nav">
              <a href="#mission">MISSION</a>
              <a href="#platform">PLATFORM</a>
              <a href="#technology">TECHNOLOGY</a>
              <a href="#contact">CONTACT</a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="heroBg">
            {HERO_IMAGES.map((src, idx) => (
              <div
                key={src}
                className={`heroSlide ${idx === current ? "active" : ""}`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
            <div className="heroOverlay" />
            <div className="heroGrid" />
          </div>

          <div className="inner heroInner">
            <div className="heroKicker">DIGITAL INNOVATION CENTER</div>
            <h1 className="heroTitle">
              AI・XR・データ基盤で、
              <br />
              <span>社会実装の中核</span>を設計する。
            </h1>
            <p className="heroLead">
              医療・公共・地域・企業領域にまたがるデジタル基盤を、
              <br />
              AI Platform / Certification / Generation / XR の視点から再構築します。
            </p>

            <div className="heroActions">
              <a href="#platform" className="btn btnPrimary">
                PLATFORM
              </a>
              <a href="#technology" className="btn btnGhost">
                TECHNOLOGY
              </a>
            </div>

            <div className="heroIndicators">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`indicator ${idx === current ? "on" : ""}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`slide-${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="section mission">
          <div className="inner">
            <div className="sectionHead">
              <div className="sectionNo">01</div>
              <div>
                <div className="sectionEn">MISSION</div>
                <h2>研究と実装のあいだを、実際に動く形にする。</h2>
              </div>
            </div>

            <div className="missionGrid">
              <div className="missionMain">
                <p>
                  Digital Innovation Center は、単なる情報発信ではなく、
                  AI・XR・データ基盤を用いて、社会に実装できる構造そのものを設計するための拠点です。
                </p>
                <p>
                  医療分野におけるプラットフォーム構想を基盤にしながらも、
                  特定領域に閉じず、公共・地域・企業との接続を前提に、
                  AI活用の信頼基盤と運用基盤を整備していきます。
                </p>
              </div>

              <div className="missionSide">
                <div className="missionBox">
                  <div className="missionLabel">CENTER FUNCTION</div>
                  <div className="missionValue">Research × Platform × Social Implementation</div>
                </div>
                <div className="missionBox">
                  <div className="missionLabel">FOCUS</div>
                  <div className="missionValue">AI / XR / Data / Certification / Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="section platform">
          <div className="inner">
            <div className="sectionHead">
              <div className="sectionNo">02</div>
              <div>
                <div className="sectionEn">PLATFORM</div>
                <h2>4つの中核レイヤー</h2>
              </div>
            </div>

            <div className="platformGrid">
              {PLATFORM_CARDS.map((card) => (
                <div className="platformCard" key={card.no}>
                  <div className="platformNo">{card.no}</div>
                  <div className="platformTitle">{card.title}</div>
                  <div className="platformDesc">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="section technology">
          <div className="inner">
            <div className="sectionHead">
              <div className="sectionNo">03</div>
              <div>
                <div className="sectionEn">TECHNOLOGY</div>
                <h2>技術領域</h2>
              </div>
            </div>

            <div className="techGrid">
              <div className="techBoard">
                {TECH_ROWS.map((row, idx) => (
                  <div className="techRow" key={idx}>
                    <span className="techIndex">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="techText">{row}</span>
                  </div>
                ))}
              </div>

              <div className="techNote">
                <div className="techNoteTitle">IMPLEMENTATION VIEW</div>
                <p>
                  私たちは、単にAIを導入するのではなく、
                  接続、運用、証跡、可視化、インターフェースまでを含めて
                  一体として設計します。
                </p>
                <p>
                  そのため、研究・構想・LP・プロトタイプ・API・UI・実運用まで、
                  ひとつの流れとして扱います。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section structure">
          <div className="inner">
            <div className="sectionHead">
              <div className="sectionNo">04</div>
              <div>
                <div className="sectionEn">STRUCTURE</div>
                <h2>研究拠点から社会実装へ</h2>
              </div>
            </div>

            <div className="structureWrap">
              <div className="node top">Digital Innovation Center</div>
              <div className="connector" />
              <div className="nodeGrid">
                <div className="node">AI Platform</div>
                <div className="node">AI Certification</div>
                <div className="node">AI Generation</div>
                <div className="node">XR / Medical Platform</div>
              </div>
              <div className="connector" />
              <div className="node bottom">Public / Medical / Regional / Enterprise Implementation</div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="inner">
            <div className="sectionHead">
              <div className="sectionNo">05</div>
              <div>
                <div className="sectionEn">CONTACT</div>
                <h2>Digital Innovation Center</h2>
              </div>
            </div>

            <div className="contactGrid">
              <div className="contactCard">
                <div className="contactLabel">ORGANIZATION</div>
                <div className="contactValue">CONCIDE</div>
              </div>
              <div className="contactCard">
                <div className="contactLabel">FOCUS AREA</div>
                <div className="contactValue">AI / XR / Platform / Infrastructure</div>
              </div>
              <div className="contactCard">
                <div className="contactLabel">NEXT STEP</div>
                <div className="contactValue">Research / Collaboration / Platform Design</div>
              </div>
            </div>

            <div className="contactActions">
              <Link href="/lady-ai" className="btn btnPrimary">
                AI ENTRY
              </Link>
              <a href="#top" className="btn btnGhost">
                BACK TO TOP
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="inner footerIn">
            <div>© 2026 Digital Innovation Center / CONCIDE</div>
            <div>AI Platform / XR / Data Infrastructure</div>
          </div>
        </footer>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            background: #eef1f5;
            color: #0b1220;
            font-family: "Helvetica Neue", Arial, "Hiragino Sans", "Noto Sans JP", sans-serif;
          }

          .dic * {
            box-sizing: border-box;
          }

          .inner {
            width: min(1280px, calc(100% - 64px));
            margin: 0 auto;
          }

          .topbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            backdrop-filter: blur(16px);
            background: rgba(8, 13, 24, 0.68);
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .topin {
            min-height: 76px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 16px;
            min-width: 0;
          }

          .brandMark {
            width: 54px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #0a162d, #17315b);
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #ffffff;
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.12em;
          }

          .brandTitle {
            color: #ffffff;
            font-size: 16px;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .brandSub {
            margin-top: 4px;
            color: rgba(255, 255, 255, 0.68);
            font-size: 11px;
            letter-spacing: 0.08em;
          }

          .nav {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
          }

          .nav a {
            color: rgba(255, 255, 255, 0.82);
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
          }

          .hero {
            position: relative;
            min-height: 100vh;
            overflow: hidden;
            background: #07111f;
          }

          .heroBg {
            position: absolute;
            inset: 0;
          }

          .heroSlide {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transform: scale(1.03);
            transition: opacity 1.15s ease, transform 6s ease;
          }

          .heroSlide.active {
            opacity: 1;
            transform: scale(1);
          }

          .heroOverlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(90deg, rgba(6, 10, 18, 0.82) 0%, rgba(6, 10, 18, 0.38) 48%, rgba(6, 10, 18, 0.58) 100%),
              linear-gradient(180deg, rgba(6, 10, 18, 0.18), rgba(6, 10, 18, 0.42));
            z-index: 2;
          }

          .heroGrid {
            position: absolute;
            inset: 0;
            z-index: 3;
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
            background-size: 48px 48px;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.2));
          }

          .heroInner {
            position: relative;
            z-index: 4;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 120px;
            padding-bottom: 72px;
          }

          .heroKicker {
            display: inline-block;
            width: fit-content;
            padding: 10px 14px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            background: rgba(255, 255, 255, 0.08);
            color: #d8e8ff;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .heroTitle {
            margin: 24px 0 0;
            color: #ffffff;
            font-size: clamp(40px, 7vw, 88px);
            line-height: 1.02;
            letter-spacing: -0.04em;
            font-weight: 900;
          }

          .heroTitle span {
            color: #77b6ff;
          }

          .heroLead {
            margin: 24px 0 0;
            color: rgba(255, 255, 255, 0.82);
            font-size: clamp(15px, 2vw, 20px);
            line-height: 1.85;
            max-width: 860px;
          }

          .heroActions {
            margin-top: 32px;
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
          }

          .btn {
            min-width: 188px;
            min-height: 54px;
            padding: 0 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            transition: 0.2s ease;
            border: 1px solid transparent;
          }

          .btnPrimary {
            background: linear-gradient(135deg, #0d5ef4, #31a3ff);
            color: #ffffff;
            box-shadow: 0 18px 50px rgba(29, 116, 255, 0.28);
          }

          .btnPrimary:hover {
            transform: translateY(-1px);
            box-shadow: 0 24px 60px rgba(29, 116, 255, 0.35);
          }

          .btnGhost {
            background: rgba(255, 255, 255, 0.08);
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.18);
          }

          .btnGhost:hover {
            background: rgba(255, 255, 255, 0.14);
          }

          .heroIndicators {
            margin-top: 36px;
            display: flex;
            gap: 10px;
          }

          .indicator {
            width: 44px;
            height: 4px;
            border: 0;
            padding: 0;
            background: rgba(255, 255, 255, 0.22);
            cursor: pointer;
          }

          .indicator.on {
            background: linear-gradient(90deg, #49b2ff, #ffffff);
          }

          .section {
            padding: 88px 0;
          }

          .mission,
          .technology,
          .contact {
            background: #eef1f5;
          }

          .platform,
          .structure {
            background: #f7f9fc;
          }

          .sectionHead {
            display: grid;
            grid-template-columns: 84px 1fr;
            gap: 20px;
            align-items: start;
            margin-bottom: 34px;
          }

          .sectionNo {
            padding-top: 8px;
            color: #1b57c8;
            font-size: 34px;
            font-weight: 900;
            line-height: 1;
            letter-spacing: -0.04em;
          }

          .sectionEn {
            color: #5c6d89;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .sectionHead h2 {
            margin: 8px 0 0;
            font-size: clamp(28px, 4vw, 54px);
            line-height: 1.08;
            letter-spacing: -0.04em;
            font-weight: 900;
            color: #0c1422;
          }

          .missionGrid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 22px;
          }

          .missionMain,
          .missionBox,
          .techBoard,
          .techNote,
          .contactCard {
            background: #ffffff;
            border: 1px solid #d9e1ec;
          }

          .missionMain {
            padding: 28px;
          }

          .missionMain p {
            margin: 0 0 18px;
            font-size: 15px;
            line-height: 2;
            color: #324255;
          }

          .missionSide {
            display: grid;
            gap: 16px;
          }

          .missionBox {
            padding: 22px;
          }

          .missionLabel {
            color: #6480a5;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.16em;
          }

          .missionValue {
            margin-top: 10px;
            font-size: 24px;
            line-height: 1.45;
            font-weight: 800;
            color: #0d1930;
          }

          .platformGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .platformCard {
            position: relative;
            min-height: 250px;
            padding: 26px 24px 24px;
            background: linear-gradient(180deg, #ffffff, #f5f8fd);
            border: 1px solid #d9e1ec;
            overflow: hidden;
          }

          .platformCard::after {
            content: "";
            position: absolute;
            right: -40px;
            top: -40px;
            width: 160px;
            height: 160px;
            background: linear-gradient(135deg, rgba(33, 105, 255, 0.08), rgba(49, 163, 255, 0.03));
            transform: rotate(45deg);
          }

          .platformNo {
            position: relative;
            z-index: 1;
            color: #2b63d4;
            font-size: 18px;
            font-weight: 900;
            letter-spacing: 0.12em;
          }

          .platformTitle {
            position: relative;
            z-index: 1;
            margin-top: 18px;
            font-size: 28px;
            line-height: 1.22;
            font-weight: 900;
            color: #0d1628;
            letter-spacing: -0.03em;
          }

          .platformDesc {
            position: relative;
            z-index: 1;
            margin-top: 14px;
            font-size: 14px;
            line-height: 1.9;
            color: #3b4c61;
          }

          .techGrid {
            display: grid;
            grid-template-columns: 1fr 0.9fr;
            gap: 18px;
          }

          .techBoard {
            padding: 12px 0;
          }

          .techRow {
            display: grid;
            grid-template-columns: 86px 1fr;
            gap: 14px;
            align-items: center;
            padding: 18px 24px;
            border-bottom: 1px solid #e4ebf3;
          }

          .techRow:last-child {
            border-bottom: 0;
          }

          .techIndex {
            color: #2b63d4;
            font-size: 18px;
            font-weight: 900;
          }

          .techText {
            font-size: 16px;
            font-weight: 700;
            color: #132238;
            letter-spacing: 0.02em;
          }

          .techNote {
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .techNoteTitle {
            color: #6480a5;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.16em;
          }

          .techNote p {
            margin: 14px 0 0;
            font-size: 15px;
            line-height: 1.95;
            color: #34465c;
          }

          .structureWrap {
            padding: 34px 24px;
            background: #ffffff;
            border: 1px solid #d9e1ec;
          }

          .node {
            min-height: 74px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 16px;
            border: 1px solid #cfdae8;
            background: #f8fbff;
            font-size: 16px;
            font-weight: 800;
            color: #102037;
          }

          .node.top,
          .node.bottom {
            background: linear-gradient(135deg, #0d5ef4, #31a3ff);
            color: #ffffff;
            border-color: transparent;
          }

          .connector {
            width: 2px;
            height: 28px;
            margin: 14px auto;
            background: linear-gradient(180deg, #5b93ff, #bed7ff);
          }

          .nodeGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .contactGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
          }

          .contactCard {
            padding: 24px;
          }

          .contactLabel {
            color: #6480a5;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.16em;
          }

          .contactValue {
            margin-top: 12px;
            font-size: 20px;
            line-height: 1.5;
            font-weight: 800;
            color: #132238;
          }

          .contactActions {
            margin-top: 28px;
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
          }

          .footer {
            padding: 24px 0;
            background: #0a101a;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }

          .footerIn {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
            color: rgba(255, 255, 255, 0.62);
            font-size: 12px;
            letter-spacing: 0.08em;
          }

          @media (max-width: 1080px) {
            .missionGrid,
            .techGrid,
            .platformGrid,
            .contactGrid {
              grid-template-columns: 1fr;
            }

            .sectionHead {
              grid-template-columns: 1fr;
              gap: 8px;
            }

            .sectionNo {
              padding-top: 0;
            }
          }

          @media (max-width: 720px) {
            .inner {
              width: min(100% - 32px, 1280px);
            }

            .topin {
              min-height: auto;
              padding: 14px 0;
              align-items: flex-start;
              flex-direction: column;
            }

            .nav {
              gap: 14px;
            }

            .heroInner {
              padding-top: 132px;
              padding-bottom: 56px;
            }

            .heroLead br,
            .heroTitle br {
              display: none;
            }

            .techRow {
              grid-template-columns: 1fr;
            }

            .nodeGrid {
              grid-template-columns: 1fr;
            }

            .btn {
              width: 100%;
            }

            .heroActions,
            .contactActions {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    </>
  );
}
