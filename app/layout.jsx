import "./globals.css";

export const metadata = {
  title: "NoSpoiler Highlights",
  description: "스포일러 없이 공식 월드컵 하이라이트 링크를 찾는 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
