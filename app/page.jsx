import Script from "next/script";
import DisqusComments from "./disqus-comments";
import { pageHtml } from "./page-content";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID;
const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
      <DisqusComments shortname={disqusShortname} />
      {/*
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6788425959877259"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
      */}
      <Script src="/site.js?v=jun28-links-1" strategy="afterInteractive" />
      {gaMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
