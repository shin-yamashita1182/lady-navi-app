// ✅ グローバルCSSを読み込むエントリーポイント
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
