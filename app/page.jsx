import Script from "next/script";
import { pageHtml } from "./page-content";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
      <Script src="/site.js?v=jun20-links-3" strategy="afterInteractive" />
    </>
  );
}
