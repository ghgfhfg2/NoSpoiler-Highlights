import Script from "next/script";
import { pageHtml } from "./page-content";

const basePath = process.env.NODE_ENV === "production" ? "/NoSpoiler-Highlights" : "";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
      <Script src={`${basePath}/site.js?v=date-filter-strict-1`} strategy="afterInteractive" />
    </>
  );
}
